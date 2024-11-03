import { Link, Stack } from "expo-router";
import { Text, View,StyleSheet } from "react-native";

export default function NotDoundScreen() {
  return (
    <>
        <Stack.Screen options={{title: "OOOPS! Page not Found!"}}></Stack.Screen>
        <View style={styles.container}>
        <Text style={styles.text}>The page your looking for does not exist</Text>
        <Link href={"/"} style={styles.button}> Go to Home screen</Link>
        </View>
    </>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#272727'
  },
  text: {
    color: '#ffffff'
  },
  button: {
    color: '#ffffff',
    textDecorationLine: "underline"
  }
})