import React, { useRef, useState, useEffect,} from 'react';
import { Camera, CameraType, CameraView } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, setPermission] = useState<boolean | null>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null); 

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === 'granted');
    })();
  }, []);

  if (permission === null) {
    return <View />;
  }

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to use the camera</Text>
        <Button
          onPress={async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setPermission(status === 'granted');
          }}
          title="Grant Permission"
        />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setPhotoUri(photo!.uri);
        console.log('Picture taken:', photo!.uri);
      } catch (error) {
        console.error('Failed to take picture:', error);
      }
    }
  };

  const uploadPhoto = async () => {
    if (!photoUri) {
      Alert.alert('No photo to upload');
      return;
    }

    try {
      // Fetch the file from the URI
      const response = await fetch(photoUri);
      const blob = await response.blob(); 
  
      const formData = new FormData();
      
      // Set filename "sign.jpg"
      const filename = 'sign.jpg';
      const type = 'image/jpeg'; // Set MIME type as JPEG for the fixed filename
  
      // Append the Blob to FormData with the fixed filename
      formData.append('image', blob, filename);
  
      const serverResponse = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      });
  
      if (serverResponse.ok) {
        const data = await serverResponse.json();
        console.log('Prediction Success', `Prediction: ${data.prediction}`);
        document.getElementById('yourPrediction')!.innerText = "Predicted Letter: \n" + data.prediction;
        
      } else {
        console.log('Prediction Failed',
          `Server responded with status: ${serverResponse.status}`);
        document.getElementById('yourPrediction')!.innerText = "Failed to predict a Letter, try again"

          /*
        Alert.alert(
          'Prediction Failed',
          `Server responded with status: ${serverResponse.status}`,
        );
        */
      }
    } catch (error) {
      console.error('Failed to upload photo:', error);
      Alert.alert('Upload Error', (error as Error).message);
    }
  };
  
  return (
    <View style={styles.container}>
      {!photoUri ? (
        <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}>Take Picture</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <>
          <Text style={styles.predictionText} id='yourPrediction'>Predicted Letter:</Text>
          <Image source={{ uri: photoUri }} style={styles.preview} />
          <Button title="Upload Photo" onPress={uploadPhoto} />
          <Button title="Retake Picture" onPress={() => setPhotoUri(null)} />
        </>
      )}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    margin: 20,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  preview: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  predictionText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    justifyContent:'center',
    textAlign: 'center',
  },
});
