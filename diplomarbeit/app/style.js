'use strict';
import { StyleSheet } from 'react-native';

//const styles = require('../style');


module.exports = StyleSheet.create({

    /**** Level Overview ****/
    scrollContainerOverview: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        flexDirection: 'column',
        alignSelf: 'center',
        margin: 10,
        width: '30%'
    },
    starsBox: {
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'center',
        padding: 10,
        color: 'white',
        textAlign: 'center'
    },
    playButton: {
        backgroundColor: '#5b6bf5',
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'center',
        padding: 10,
        color: 'white',
        textAlign: 'center'
    },
    boxEven: {
        alignSelf: 'flex-end'
    },
    boxOdd: {
        alignSelf: 'flex-start'
    },
    playText: {
        fontFamily : 'Arial, sans-serif',
        textAlign: 'center'
    },
    levelBox: {
        padding: 25,
        borderRadius: 15,
        backgroundColor: '#cfcaca'
    },

    levelBoxInnen: {
        justifyContent: 'center',
        borderRadius: 5,
        padding: 20,
        textAlign: 'center',
        width: 120,
        height: 120,
        marginHorizontal: 10,
        marginVertical: 5
    },
    levelNumber: {
        borderRadius: 15,
        textAlign: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 40,
        paddingHorizontal: 50,
        paddingVertical: 35,
    },

    /**** Level Detail ****/
    levelDetail: {
       textAlign: 'center',
       fontFamily : 'Arial, sans-serif',
       flex:1
    },
    letterPicture:{
        height: 200,
        width: 200,
        alignSelf: 'center',
    },
    divider:{
        height: 2,
        backgroundColor: 'grey',
        width: 1000,
        alignSelf: 'center',
        marginTop: 50
    },
    letterColumn: {
       margin: 50,
       alignSelf: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#9c9c9c'
    },
    btnStart: {
        backgroundColor: '#5b6bf5',
        borderRadius: 5,
        width: 150,
        height: 40,
        color: 'white',
        alignSelf: 'center',
        borderColor: '#5b6bf5',
        
    },
    btnNext: {
        position: 'absolute',
        backgroundColor: '#5b6bf5',
        borderRadius: 5,
        width: 150,
        height: 40,
        color: 'white',
        alignSelf: 'flex-end',
        borderColor: '#5b6bf5',
        bottom: 5,
        right: 50
    },
    btnNextDisabled: {
        position: 'absolute',
        backgroundColor: '#9c9c9c',
        borderRadius: 5,
        width: 150,
        height: 40,
        color: 'white',
        alignSelf: 'flex-end',
        borderColor: '#9c9c9c',
        bottom: 5,
        right: 50
    },


    /***** Camera *****/
    cameraContainer: {
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
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        Direction: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'transparent',
    },
    predictionContainer: {
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'transparent',
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
        width: '80%',
        height: '80%',
    },
    predictionText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
    },

    /**** Profile ****/
    scrollContainerProfile: {
        position: "absolute",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        alignSelf: 'center',
        margin: 20,
    },
    profileContainer: {
        flex: 3,
        alignItems: "center",
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
    },
    headerText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 25
    },
    flexHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#5b6bf5",
        width: '100%',
        color: '#FFFFFF',
        fontSize: 20,
    },
    header: {
        flex: 2,
        backgroundColor: "#5b6bf5",
        width: '100%',
        color: '#FFFFFF',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        marginBottom: 30,
        borderRadius: 10,
    },
    image: {
        height: 70,
        width: 70,
        marginRight: 20
    },
    username: {
        margin: 20,
        backgroundColor: '#ffde59', //gelb
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        borderRadius: 5,
        minWidth: 200,
        fontWeight: 'bold'
    },
    mainBody: {
        flex: 8
    },
    starBox: {
        padding: 17,
        fontSize: 20,
        alignSelf: 'center',
        width: '60%',
    },
    levelContainer: {
        alignSelf: 'center',
        padding: 17,
        fontSize: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '60%',
        justifyContent: 'center',
    },
    headlines: {
        width: '60%',
        alignSelf: 'center',
        fontSize: 20,
        marginLeft: 50,
        paddingBottom: 5
    },
    headlinesButSmaller: {
        width: '60%',
        alignSelf: 'center',
        fontSize: 16,
        marginLeft: 50
    },
    statisticsBox: { 
        flexDirection: 'row', 
        justifyContent: 'center' 
    },

    /**** Index ****/
    indexContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    headline: {
        fontSize: 50,
        marginBottom: 30,
        textAlign: 'center'
    },
    h2: {
        fontSize: 28,
        marginBottom: 20
    },
    tempText: {
        width: '50%',
        textAlign: 'center'
    },
    textVisible: {
        opacity: 1,
    },
    textInvisible: {
        opacity: 0,
        height: 0,
        margin: 0,
        padding: 0
    },


    /**** Carusel ****/
    carouselContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    carouselView: {
        flex: 1,
        justifyContent: "center",
        shadowColor: '#9c9c9c',
        shadowRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 5,
        shadowOffset: 5
    },
    carouselSnackBar: {
        width: 720,
        height: 400,
    },

    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 10,
        flex: 1,
        maxHeight: '90%',
      },
      modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
      },
      modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
      },
      closeButton: {
        padding: 5,
      },
      cameraContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 500,
      },
      camera: {
        width: '100%',
        height: '100%',
        position: 'relative',
      },
      cameraInstructions: {
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        padding: 15,
        alignItems: 'center',
      },
      cameraInstructionText: {        
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff'
      },
      challengeProgress: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
      },
      challengeText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      buttonContainer: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      },
      button: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
      },
      text: {
        color: 'white',
        fontSize: 16,
      },
      preview: {
        width: '100%',
        height: 400,
        resizeMode: 'contain',
      },
      predictionContainer: {
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        width: '100%',
      },
      predictionText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
      },
      predictionResult: {
        alignItems: 'center',
        marginTop: 10,
      },
      successText: {
        color: 'green',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
      },
      errorText: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
      },
      continueButton: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
      },
      retakeButton: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      message: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
      }

});
