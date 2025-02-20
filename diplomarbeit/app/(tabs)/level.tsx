import { useGlobalSearchParams } from "expo-router";
import { View } from "react-native";
const styles = require('../style');


export default function Level(){

    const params = useGlobalSearchParams();

    return (
        <View>
            <h1>Level {params.id}</h1>
            <p>Hello World</p>

        </View>
     )
}
