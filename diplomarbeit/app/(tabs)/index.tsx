import { Link } from "expo-router";
import { Text, View,StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
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