import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View,StyleSheet, ScrollView, Button } from "react-native";
import LevelBox from "@/components/LevelBox";
import React from "react";


export default function Index() {
  const maxStarsPossible = 5;
  const numberOfLevels = 26;
  const hexGreen = "#00bf63";
  const hexOrange = "#f5b664";
  const hexRed = "#de3737";
  const hexYellow = "#ffde59";
  const styles = require('../style');


  function getStars(level: number) {
    let stars = [];
    let userStars;

    //FIXME: Temporary until Database is functioning
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
        <Ionicons key={`star-${level}-${i}`} name="star-outline" color={hexYellow} size={15} />
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
    <ScrollView contentContainerStyle={styles.scrollContainerOverview}>
      {Array.from({ length: numberOfLevels }, (_, index) => {
        let currLevel = index+1
        const { stars, userStars } = getStars(currLevel);
        const color = getColor(userStars);

        return (
          <View
            key={`level-${currLevel}`}
            style={[styles.levelBox, index % 2 === 0 ? styles.boxOdd : styles.boxEven]}
          >
            <LevelBox levelNumber={currLevel} hexColor={color} />
            <View style={styles.starsBox}>{stars}</View>            
            <Link style={styles.playButton} href={`/level?id=${currLevel}` }>
              <Ionicons name="play"><Text style={styles.playText}>Play Level {index+1}</Text> </Ionicons>
            </Link>
            
          </View>
        );
      })}
    </ScrollView>
  );
}