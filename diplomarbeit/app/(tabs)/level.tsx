import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View,StyleSheet } from "react-native";
import LevelBox from "@/components/LevelBox";

export default function Index() {

  const maxStarsPossible = 5;

  //TODO: get number of Stars for each Level from DB
  //      and set right valu of stars
  
  var userStars

  function getStars(level:number) {
    var stars = []

    switch (level) {
      case 1:
        userStars = 5
        break
      case 2:
        userStars = 4
        break
      case 3:
        userStars = 2
        break
      //etc...  
      default:
        userStars = 0
    }

    
    for (let i = 0; i < userStars; i++) {
      stars.push(
        <Ionicons name="star" color={'#ffde59'}></Ionicons>
      )
      
    }

    if (userStars != maxStarsPossible) {
      for (let i = userStars; i < maxStarsPossible; i++) {
        stars.push(
          <Ionicons name="star-outline" color={'#ffde59'}></Ionicons>
        )
        
      }
      
    }
    

    return stars
    
  }

  return (
    <View style={styles.container}>
      
      <View>
        {/* 5 Stars: */}
        <View style={styles.starsBox}>
        {getStars(1)}

        </View>
        <Text>Test Level 1</Text>

        <LevelBox levelNumber={1}></LevelBox>

      </View>

      <View>
        {/* 4 Stars and 1 Outline*/}
        <View style={styles.starsBox}>
          {getStars(2)}
        </View>
        <Text>Test Level 2</Text>

      </View>

      <View>
        {/* 4 Stars and 1 Outline*/}
        <View style={styles.starsBox}>
          {getStars(3)}
        </View>
        <Text>Test Level 3</Text>

      </View>

      <View>
        {/* 4 Stars and 1 Outline*/}
        <View style={styles.starsBox}>
          {getStars(4)}
        </View>
        <Text>Test Level 4</Text>

      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  starsBox: {
    backgroundColor: '#5b6bf5',
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10
  },
  
  
})