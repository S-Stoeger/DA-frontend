import { Ionicons } from "@expo/vector-icons";
import { router, useGlobalSearchParams } from "expo-router";
import * as React from "react";
import { useEffect, useState } from "react";
import { View, Image, ScrollView, TextInput, Alert, Text, TouchableOpacity } from "react-native";
import { Button, Snackbar } from "react-native-paper";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";


const styles = require('../style');

export default function Level(){

    const [visible, setSnackBarVisible] = React.useState(false)
    const onToggleSnackBar = () => setSnackBarVisible(!visible)
    const onDismissSnackBar = () => setSnackBarVisible(false)


    const params = useGlobalSearchParams();
    const [text, setText] = useState('');

    const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);
    
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

    const [areLettersVisible, setLettersVisible] = useState(true); // Use state to track visibility

    function setLettersInvisible(){
        setLettersVisible(!areLettersVisible)
    }

    const [isRightLetter, setLetterTrue] = useState(false);
    function checkLetter(actuallLetter:string){
        if(actuallLetter == text.toUpperCase()){
            return <Ionicons name="checkmark" size={60} style={{textAlign:'center', color: 'green', margin: 0}}></Ionicons>
        }
        else {
            return <Ionicons name="close" size={60} style={{textAlign:'center', color: 'red'}}></Ionicons>
        }
    }

    useEffect(() => {
        // Assuming you're checking against the letter in the current gesture
        const currentLetter = currLevel.gestures[progress.value]?.letter;
        if (currentLetter && text.toUpperCase() === currentLetter) {
            setLetterTrue(true);
        } else {
            setLetterTrue(false);
        }
    }, [text, progress.value]); // Run this when 'text' or 'progress.value' changes

    async function progressToNext(){
        if(progress.value <2){
            onPressPagination( progress.value + 1)
        }
        else {
            setSnackBarVisible(true)
            await new Promise(resolve => setTimeout(resolve, 3000)); //delay for 3 sek
            router.push('/(tabs)/level_overview');            
        }    
        setLetterTrue(false)    
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
        
    
    

    return (
        <ScrollView style={styles.levelDetail}> {
            <View>
           

                <View style={areLettersVisible ? styles.textVisible : styles.textInvisible}>
                
                    <h1>Level {params.id}</h1>
                    <h2>You will learn the following letters:</h2>

                    {/*TODO: get everything from db*/}
                    {areLettersVisible && (
                        <View style={{flexDirection: "row", alignSelf: 'center'}}>{showAgenda()}</View>
                    )}
                    
                    <button style={styles.btnStart} onClick={setLettersInvisible}>Let's get started</button>
                    

                    {/*FIXME: I don't know why it's here or what it does but i can't delete this tag without errors*/}
                    <View>
                    

                
                </View>
            </View>
            
            
            <View style={styles.carouselContainer}>

                <View style={styles.carouselSnackBar}> 
                    <Snackbar
                        visible = {visible}
                        onDismiss={onDismissSnackBar}
                        duration={5500}
                        >
                            <Text style={{ textAlign: "center", fontSize: 50, color: 'white' }}>Gut Gemacht!</Text>
                    </Snackbar>
                </View>

                <View style={areLettersVisible ? styles.textInvisible: styles.textVisible}>
                    <Carousel ref={ref} width={1000} height={600} data={currLevel.gestures} onProgressChange={progress} enabled={false} renderItem=
                    {({ index }) => (
                        <View style={styles.carouselView}>
                            {/*<Text style={{ textAlign: "center", fontSize: 30 }}>{currLevel.gestures[index].letter}</Text> */}
                            <h2>Welcher Buchstabe ist das?</h2>
                           
                            <View style={styles.letterColumn}>
                                <Image source={currLevel.gestures[index].imageSource} style={styles.letterPicture} />
                                <h4>Tippe den Buchstaben ein: </h4>
                                <TextInput
                                    style={styles.input}
                                    placeholder="z.B: X"
                                    onChangeText={newText => setText(newText)}
                                />                        
                                {checkLetter(currLevel.gestures[index].letter)}
                            </View>
                            <View>
                                <button style={isRightLetter ? styles.btnNext: styles.btnNextDisabled } onClick={progressToNext} disabled={!isRightLetter}> {progress.value === 2 ? "Fertig" : "Weiter"}</button>
                            </View>
                        </View>
                    )}/>
    
                    <Pagination.Basic
                        progress={progress}
                        data={currLevel.gestures}
                        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50, marginTop: 10, marginBottom: 30 }}
                        containerStyle={{ gap: 5, marginTop: 10 }}
                    />
                </View>
            </View>

        </View>
           


            
            
        }</ScrollView>
    )
}

