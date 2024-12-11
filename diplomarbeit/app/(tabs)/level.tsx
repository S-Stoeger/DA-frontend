import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View,StyleSheet } from "react-native";
import LevelBox from "@/components/LevelBox";

export default function Index() {

  const maxStarsPossible = 5;
  const hexGreen = "#00bf63";
  const hexOrange = "#f5b664";
  const hexRed = "#de3737";
  const hexYellow = "#ffde59";
  

  //TODO: get number of Stars for each Level from DB and show right value of stars 
  var userStars

  function getStars(level:number) {
    var stars = []

    //Temporary until Database is functioning
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

    //puts full stars / stars user actually got
    for (let i = 0; i < userStars; i++) {
      stars.push(
        <Ionicons name="star" color={hexYellow}></Ionicons>
      )
      
    }

    //checks if user got 5 stars
    if (userStars != maxStarsPossible) {
      //if not puts outlines for stars you could have gotten
      for (let i = userStars; i < maxStarsPossible; i++) {
        stars.push(
          <Ionicons name="star-outline" color={hexYellow}></Ionicons>
        )
      }
    }
    
    return stars
  }

  return (
    //TODO: Connect Levels
    <View style={styles.container}>
      
      <View style={styles.boxOdd}>
        <View style={styles.starsBox}> {getStars(1)}</View>
        <LevelBox levelNumber={1} hexColor={hexGreen}/>
      </View>

      <View style={styles.boxEven}>
        <View style={styles.starsBox}> {getStars(2)} </View>
        <LevelBox levelNumber={2} hexColor={hexGreen}/>
      </View>

      <View style={styles.boxOdd}>
        <View style={styles.starsBox}>
          {getStars(3)}
        </View>
        <LevelBox levelNumber={3} hexColor={hexOrange}/>
      </View>

      <View style={styles.boxEven}>
        <View style={styles.starsBox}>
          {getStars(4)}
        </View>
        <LevelBox levelNumber={4} hexColor={hexRed}/>
      </View>



    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    margin: 10,
    width: '30%'
  },
  starsBox: {
    backgroundColor: '#5b6bf5',
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10
  },
  boxEven: {
    alignSelf: 'flex-end'
  },
  boxOdd: {
    alignSelf: 'flex-start'
  },
})