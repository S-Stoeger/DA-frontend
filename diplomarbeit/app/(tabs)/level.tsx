import { Ionicons } from "@expo/vector-icons";
import { useGlobalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Image, ScrollView, TextInput, Alert } from "react-native";
import { Button } from "react-native-paper";
const styles = require('../style');

export default function Level(){

    const params = useGlobalSearchParams();
    const [text, setText] = useState('');


    function checkLetter(actuallLetter:string){

        if(actuallLetter == text){
            return <Ionicons name="checkmark" size={60} style={{textAlign:'center', color: 'green'}}></Ionicons>
        }
        else {
            return <Ionicons name="close" size={60} style={{textAlign:'center', color: 'red'}}></Ionicons>
        }

    }

    

    return (
        <ScrollView style={styles.levelDetail}> {
            <View>
                <h1>Level {params.id}</h1>
                <h2>You will learn the following letters:</h2>

                {/*TODO: get everything from db*/}
                <View style={{flexDirection: "row", alignSelf: 'center'}}>
                    <View style={styles.letterColumn}>
                        <h1>A:</h1>
                        <Image source={{uri: "../../assets/images/A.jpg"}} style={styles.letterPicture} />
                    </View>
                   
                    <View style={styles.letterColumn}>
                        <h1>B:</h1>
                        <Image source={{uri: "../../assets/images/B.jpg"}} style={styles.letterPicture} />
                    </View>

                    <View style={styles.letterColumn}>
                        <h1>C:</h1>
                        <Image source={{uri: "../../assets/images/C.jpg"}} style={styles.letterPicture} />
                    </View>
                </View>

                <div style={styles.divider}></div>

                <View>
            {//FIXME: es ko immer nur a buchstabe gleichzeitig richtig sei
                }
                <h2>Welcher Buchstabe ist das?</h2>
                <View style={{flexDirection: "column", alignSelf: 'center'}}>
                    <View style={styles.letterColumn}>
                        <Image source={{uri: "../../assets/images/C.jpg"}} style={styles.letterPicture} />
                        <TextInput
                            style={styles.input}
                            placeholder="Tippe den Buchstaben ein"
                            onChangeText={newText => setText(newText)}
                        />                        
                        {checkLetter('C')}
                       
                    </View>
                   
                    <View style={styles.letterColumn}>
                        <Image source={{uri: "../../assets/images/A.jpg"}} style={styles.letterPicture} />
                        <TextInput
                            style={styles.input}
                            placeholder="Tippe den Buchstaben ein"
                            onChangeText={newText => setText(newText)}
                        />                        
                        {checkLetter('A')}
                    </View>

                    <View style={styles.letterColumn}>
                        <Image source={{uri: "../../assets/images/B.jpg"}} style={styles.letterPicture} />
                        <TextInput
                            style={styles.input}
                            placeholder="Tippe den Buchstaben ein"
                            onChangeText={newText => setText(newText)}
                        />                        
                        {checkLetter('B')}
                    </View>
                </View>

                {//TODO: selber foto machen
                }
            </View>


            </View>
           

            
            
        }</ScrollView>
    )
}

