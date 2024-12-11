import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View,StyleSheet, ScrollView } from "react-native";
import LevelBox from "@/components/LevelBox";

export default function Index() {
  const maxStarsPossible = 5;
  const numberOfLevels = 20;
  const hexGreen = "#00bf63";
  const hexOrange = "#f5b664";
  const hexRed = "#de3737";
  const hexYellow = "#ffde59";

  function getStars(level: number) {
    let stars = [];
    let userStars;

    // Temporary until Database is functioning
    switch (level) {
      case 1:
      case 5:
      case 10:
      case 15:
        userStars = 5; // Max stars
        break;
      case 2:
      case 6:
      case 11:
      case 16:
        userStars = 4;
        break;
      case 3:
      case 7:
      case 13:
      case 17:
        userStars = 2;
        break;
      case 4:
      case 8:
      case 14:
      case 18:
        userStars = 1;
        break;
      default:
        userStars = 0;
    }

    // Full stars the user got
    for (let i = 0; i < userStars; i++) {
      stars.push(
        <Ionicons key={`full-star-${level}-${i}`} name="star" color={hexYellow} size={15} />
      );
    }

    // Outline stars for remaining possible stars
    for (let i = userStars; i < maxStarsPossible; i++) {
      stars.push(
        <Ionicons key={`outline-star-${level}-${i}`} name="star-outline" color={hexYellow} size={15} />
      );
    }

    return { stars, userStars };
  }

  function getColor(userStars: number) {
    if (userStars >= 4) return hexGreen;
    if (userStars >= 2) return hexOrange;
    return hexRed;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {Array.from({ length: numberOfLevels }, (_, index) => {
        const { stars, userStars } = getStars(index + 1);
        const color = getColor(userStars);

        return (
          <View
            key={`level-${index + 1}`}
            style={index % 2 === 0 ? styles.boxOdd : styles.boxEven}
          >
            <View style={styles.starsBox}>{stars}</View>
            <LevelBox levelNumber={index + 1} hexColor={color} />
          </View>
        );
      })}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    flexDirection: 'column',
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
  },
  boxEven: {
    alignSelf: 'flex-end'
  },
  boxOdd: {
    alignSelf: 'flex-start'
  },
})