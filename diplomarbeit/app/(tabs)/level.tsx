import { Ionicons } from "@expo/vector-icons";
import { router, useGlobalSearchParams } from "expo-router";
import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { View, Image, ScrollView, TextInput, Alert, Text, TouchableOpacity } from "react-native";
import { Button, Snackbar, Modal, Portal, Provider } from "react-native-paper";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";
import { Camera, CameraType, CameraView } from 'expo-camera';

const styles = require('../style');

export default function Level(){
    const [visible, setSnackBarVisible] = React.useState(false);
    const onToggleSnackBar = () => setSnackBarVisible(!visible);
    const onDismissSnackBar = () => setSnackBarVisible(false);

    // Camera related states
    const [cameraModalVisible, setCameraModalVisible] = useState(false);
    const [facing, setFacing] = useState<CameraType>('front');
    const [permission, setPermission] = useState<boolean | null>(null);
    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const [prediction, setPrediction] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const cameraRef = useRef<CameraView>(null);

    const params = useGlobalSearchParams();
    const [text, setText] = useState('');

    const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);
    
    // For camera demonstration challenge
    const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
    const [challengeCompleted, setChallengeCompleted] = useState(false);
    
    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({
            count: index - progress.value,
            animated: true,
        });
    };

    //TODO: get from Db
    const currLevel: Level = {
    
        gestures: [
            {
                letter: 'A',
                imageSource: require("../../assets/images/A.jpg")
            },
            {
                letter: 'B',
                imageSource: require("../../assets/images/B.jpg")
            },
            {
                letter: 'C',
                imageSource: require("../../assets/images/C.jpg")
            }
        ],
        LevelNr: 1
       
    };

    // Generate a random order for the camera challenge
    const [cameraChallenge, setCameraChallenge] = useState<string[]>([]);
    
    useEffect(() => {
        // Generate a random order of letters for the camera challenge
        const letters = currLevel.gestures.map(g => g.letter);
        const shuffled = [...letters].sort(() => Math.random() - 0.5);
        setCameraChallenge(shuffled);
    }, []);

    const [areLettersVisible, setLettersVisible] = useState(true);

    function setLettersInvisible(){
        setLettersVisible(!areLettersVisible);
    }

    const [isRightLetter, setLetterTrue] = useState(false);
    const [isPredictionCorrect, setPredictionCorrect] = useState(false);
    
    function checkLetter(actuallLetter:string){
        if(actuallLetter == text.toUpperCase()){
            return <Ionicons name="checkmark" size={60} style={{textAlign:'center', color: 'green', margin: 0}}></Ionicons>
        }
        else {
            return <Ionicons name="close" size={60} style={{textAlign:'center', color: 'red'}}></Ionicons>
        }
    }

    useEffect(() => {
        // Request camera permissions on component mount
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setPermission(status === 'granted');
        })();
        
        // Checking if the typed letter matches the current gesture
        const currentLetter = currLevel.gestures[progress.value]?.letter;
        if (currentLetter && text.toUpperCase() === currentLetter) {
            setLetterTrue(true);
        } else {
            setLetterTrue(false);
        }
    }, [text, progress.value]);

    const openCameraModal = () => {
        setCameraModalVisible(true);
        setPhotoUri(null);
        setPrediction(null);
        setPredictionCorrect(false);
    };

    const closeCameraModal = () => {
        setCameraModalVisible(false);
    };

    const toggleCameraFacing = () => {
        setFacing((current) => (current === 'back' ? 'front' : 'back'));
    };

    const takePictureAndUpload = async () => {
        if (cameraRef.current) {
            try {
                setIsLoading(true);
                // Take picture
                const photo = await cameraRef.current.takePictureAsync();
                setPhotoUri(photo!.uri);
                console.log('Picture taken:', photo!.uri);
                
                // Upload photo
                const response = await fetch(photo!.uri);
                const blob = await response.blob();
                const formData = new FormData();
                const filename = 'sign.jpg';
                formData.append('image', blob, filename);
                
                const serverResponse = await fetch('http://127.0.0.1:5000/predict', {
                    method: 'POST',
                    body: formData,
                });
                
                if (serverResponse.ok) {
                    const data = await serverResponse.json();
                    console.log('Prediction Success', `Prediction: ${data.prediction}`);
                    setPrediction(data.prediction);
                    
                    // Check if prediction matches the current challenge letter
                    const currentChallengeLetter = cameraChallenge[currentChallengeIndex];
                    if (data.prediction === currentChallengeLetter) {
                        setPredictionCorrect(true);
                    } else {
                        setPredictionCorrect(false);
                    }
                } else {
                    console.log('Prediction Failed', `Server responded with status: ${serverResponse.status}`);
                    setPrediction('Error');
                    setPredictionCorrect(false);
                }
            } catch (error) {
                console.error('Failed to take picture or upload photo:', error);
                Alert.alert('Error', (error as Error).message);
                setPrediction('Error');
                setPredictionCorrect(false);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleCameraSuccessAndNext = () => {
        if (currentChallengeIndex < cameraChallenge.length - 1) {
            // Move to next challenge
            setCurrentChallengeIndex(currentChallengeIndex + 1);
            setPhotoUri(null);
            setPrediction(null);
            setPredictionCorrect(false);
        } else {
            // All challenges completed
            setChallengeCompleted(true);
            closeCameraModal();
            setSnackBarVisible(true);
            setTimeout(() => {
                router.push('/(tabs)/level_overview');
            }, 3000);
        }
    };

    async function progressToNext(){
        if (progress.value < currLevel.gestures.length - 1) {
            onPressPagination(progress.value + 1);
            setText('');
            setLetterTrue(false);
        } else {
            // All guessing completed, start camera challenge
            openCameraModal();
        }
    }

    function showAgenda() {
        let content = [];

        for (let index = 0; index < currLevel.gestures.length; index++) {
            const currGesture = currLevel.gestures[index];
            content.push (
                <View style={styles.letterColumn} key={currLevel.gestures[index].letter}>
                    <h1>{currLevel.gestures[index].letter}:</h1>
                    <Image source={currLevel.gestures[index].imageSource} style={styles.letterPicture} />
                </View>
            )
        }        
        return <>{content}</>
    }

    // Camera modal content
    const renderCameraModal = () => {
        if (!permission) {
            return (
                <View style={styles.cameraContainer}>
                    <Text style={styles.message}>We need your permission to use the camera</Text>
                    <Button
                        onPress={async () => {
                            const { status } = await Camera.requestCameraPermissionsAsync();
                            setPermission(status === 'granted');
                        }}
                        mode="contained"
                    >
                        Grant Permission
                    </Button>
                </View>
            );
        }

        return (
            <Provider>
            <View style={styles.cameraContainer}>
                <View style={styles.challengeProgress}>
                    <Text style={styles.challengeText}>
                        Challenge {currentChallengeIndex + 1} of {cameraChallenge.length}
                    </Text>
                </View>
                
                {!photoUri ? (
                    <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
                        <View style={styles.cameraInstructions}>
                            <Text style={styles.cameraInstructionText}>
                                Show the sign for letter: {cameraChallenge[currentChallengeIndex]}
                            </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                                <Text style={styles.text}>Flip Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={takePictureAndUpload}>
                                <Text style={styles.text}>Take Picture</Text>
                            </TouchableOpacity>
                        </View>
                    </CameraView>
                ) : (
                    <>
                        <Image source={{ uri: photoUri }} style={styles.preview} />
                        <View style={styles.predictionContainer}>
                            {isLoading ? (
                                <Text style={styles.predictionText}>Loading prediction...</Text>
                            ) : prediction ? (
                                <>
                                    <Text style={styles.predictionText}>
                                        Predicted Letter: {prediction}
                                    </Text>
                                    {isPredictionCorrect ? (
                                        <View style={styles.predictionResult}>
                                            <Ionicons name="checkmark-circle" size={40} color="green" />
                                            <Text style={styles.successText}>Correct!</Text>
                                            <TouchableOpacity 
                                                style={styles.continueButton} 
                                                onPress={handleCameraSuccessAndNext}
                                            >
                                                <Text style={styles.buttonText}>
                                                    {currentChallengeIndex < cameraChallenge.length - 1 ? 
                                                    "Next Challenge" : "Complete Level"}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    ) : (
                                        <View style={styles.predictionResult}>
                                            <Ionicons name="close-circle" size={40} color="red" />
                                            <Text style={styles.errorText}>
                                                Incorrect. Try again with the letter {cameraChallenge[currentChallengeIndex]}.
                                            </Text>
                                            <TouchableOpacity 
                                                style={styles.retakeButton} 
                                                onPress={() => setPhotoUri(null)}
                                            >
                                                <Text style={styles.buttonText}>Retake Picture</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                </>
                            ) : (
                                <Text style={styles.predictionText}>Error getting prediction</Text>
                            )}
                        </View>
                    </>
                )}
            </View>
            </Provider>
        );
    };

    return (
        <Provider>
        <ScrollView style={styles.levelDetail}>
            <View>
                <View style={areLettersVisible ? styles.textVisible : styles.textInvisible}>
                    <h1>Level {params.id}</h1>
                    <h2>You will learn the following letters:</h2>

                    {areLettersVisible && (
                        <View style={{flexDirection: "row", alignSelf: 'center'}}>{showAgenda()}</View>
                    )}
                    
                    <button style={styles.btnStart} onClick={setLettersInvisible}>Let's get started</button>
                    
                    <View></View>
                </View>
                
                <View style={styles.carouselContainer}>
                    <View style={styles.carouselSnackBar}> 
                        <Snackbar
                            visible={visible}
                            onDismiss={onDismissSnackBar}
                            duration={5500}
                        >
                            <Text style={{ textAlign: "center", fontSize: 50, color: 'white' }}>Gut Gemacht!</Text>
                        </Snackbar>
                    </View>

                    <View style={areLettersVisible ? styles.textInvisible: styles.textVisible}>
                        <Carousel 
                            ref={ref} 
                            width={1000} 
                            height={600} 
                            data={currLevel.gestures} 
                            onProgressChange={progress} 
                            enabled={false} 
                            renderItem={({ index }) => (
                                <View style={styles.carouselView}>
                                    <h2>Welcher Buchstabe ist das?</h2>
                                
                                    <View style={styles.letterColumn}>
                                        <Image source={currLevel.gestures[index].imageSource} style={styles.letterPicture} />
                                        <h4>Tippe den Buchstaben ein: </h4>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="z.B: X"
                                            value={text}
                                            onChangeText={newText => setText(newText)}
                                        />                        
                                        {checkLetter(currLevel.gestures[index].letter)}
                                    </View>
                                    <View>
                                        <button 
                                            style={isRightLetter ? styles.btnNext : styles.btnNextDisabled} 
                                            onClick={progressToNext} 
                                            disabled={!isRightLetter}
                                        >
                                            {progress.value === currLevel.gestures.length - 1 ? "Starte die Herausforderung" : "Weiter"}
                                        </button>
                                    </View>
                                </View>
                            )}
                        />
        
                        <Pagination.Basic
                            progress={progress}
                            data={currLevel.gestures}
                            dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50, marginTop: 10, marginBottom: 30 }}
                            containerStyle={{ gap: 5, marginTop: 10 }}
                        />
                    </View>
                </View>
            </View>

            {/* Camera Challenge Modal */}
            <Portal>
                <Modal
                    visible={cameraModalVisible}
                    onDismiss={() => {
                        // Only allow dismissal if all challenges are completed
                        if (challengeCompleted) {
                            closeCameraModal();
                        }
                    }}
                    contentContainerStyle={styles.modalContainer}
                >
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>
                            Camera Challenge
                        </Text>
                        {challengeCompleted && (
                            <TouchableOpacity onPress={closeCameraModal} style={styles.closeButton}>
                                <Ionicons name="close" size={24} color="#000" />
                            </TouchableOpacity>
                        )}
                    </View>
                    {renderCameraModal()}
                </Modal>
            </Portal>
        </ScrollView>
        </Provider>
    );
}