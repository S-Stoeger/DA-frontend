import { Text, View,StyleSheet } from "react-native";
const styles = require('../app/style');


type Props = {
    levelNumber: number;
    hexColor: string;
}


export default function LevelBox ({levelNumber, hexColor}: Props) {

    var level = (
        <View style={styles.levelBoxInnen}>
          <Text style={[styles.levelNumber, {backgroundColor: hexColor}]}>{levelNumber}</Text>
        </View>)
      
    return level
}

/*
const styles = StyleSheet.create({
    
})
    */