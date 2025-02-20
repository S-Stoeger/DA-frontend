import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";


export default function Index() {
  const styles = require('../style');

  return (
    <View style={styles.indexContainer}>
      <Text style={styles.headline}>
        Herzlich Willkomen zu Gestures
      </Text>

      <Text style={styles.h2}>Gestures ist eine Plattform, die das Lernen <br/>
        von Gebärdensprach vereinfachen soll!</Text>

      <Text style={styles.tempText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis harum dignissimos fugit et facere 
        architecto aliquam non ipsum quasi repellendus, assumenda voluptatum, nobis dolorem libero dolorum quisquam neque deserunt!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed sapiente voluptate delectus aperiam deserunt aut 
        accusantium corrupti, modi eius ipsum suscipit quasi, consequuntur itaque quos animi dolorum hic nostrum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates accusamus fuga recusandae placeat, animi dicta 
        corrupti optio sit cupiditate inventore! Nobis enim voluptatem, fugit minus tempora qui iure labore?
      </Text>
    </View>
  );
}
/*

const styles = StyleSheet.create({
  container: {
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
})
*/