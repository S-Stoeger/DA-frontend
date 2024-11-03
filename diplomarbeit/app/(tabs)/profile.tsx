import { Link } from "expo-router";
import { Text, View,StyleSheet } from "react-native";

export default function Profile() {
  var element = ""

  for (let i = 0; i < 4; i++) {
    element += "Name: " + profiles[i] +  "\n"
  }
  
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Your Profile Page.</Text>
      <Text>{element}</Text>
      <Link href={"/"} style={styles.button}> Go to Home screen</Link>
    </View>
    
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

var profiles = [
  "Sophie Stöger",
  "Sophie Binder",
  "Maria Aschenberger",
  "Seppi Stieg"
]