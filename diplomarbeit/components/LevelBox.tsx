import { Text, View,StyleSheet } from "react-native";

type Props = {
    levelNumber: number;
    hexColor: string;
}


export default function LevelBox ({levelNumber, hexColor}: Props) {


    var level = (
        <View style={styles.levelBox}>
          <Text style={[styles.levelNumber, {backgroundColor: hexColor}]}>{levelNumber}</Text>
        </View>)
      
    return level
}

const styles = StyleSheet.create({
    levelBox: {
        justifyContent: 'center',
        backgroundColor: '#ebebeb',
        borderRadius: 5,
        padding: 20,
        textAlign: 'center',
        width: 100,
        height: 100,
        marginHorizontal: 10,
        marginVertical: 5
    },
    levelNumber: {
        borderRadius: 200,
        textAlign: 'center',
        color: '#fff',
        fontSize: 40,
        padding: 10,
        width: 60,
        height: 60
    }
})