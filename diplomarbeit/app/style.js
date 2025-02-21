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

    /**** *****/
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
        flexDirection: 'row',
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
        width: '100%',
        height: '100%',
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
    statisticsBox: { flexDirection: 'row', justifyContent: 'center' },

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
    }
});
