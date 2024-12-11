import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View,StyleSheet } from "react-native";
import { Image } from "react-native";

export default function Profile() {
  const PlaceHolderImage = require("../../assets/images/profile-pic.png")
  const numbreOfAllLevels = 20

  //TODO: get from Db
  var currUser = "Default User"
  var currUserName = "@maxmuster42"
  var userStars = 6*2+1
  var latestFinishedLevel = 6;

  
  {/* Function counts from 1 to the last Level that the User finished
      and add the style as well as pushing it into an array, that will return everything 
      and when the function is called will show all of the levels 
  */}
  function showLevels() {
    var levels = []

    for (let i = 1; i <= latestFinishedLevel; i++) {
      levels.push(
        <View style={styles.levelBox}>
          <Text style={styles.levelNumber}>{i}</Text>
        </View>
      )
    }

    return levels
  }

  {/* Function calculates how many Levels have been done / have not been done and will return the number
      if  todo = true =>  returns number of levels that are still not done / have to yet be done
          todo = false => returns number of levels that have been done
  */}
  function calcLevels(todo: boolean)  {

    
    //TODO

  }
  
  return (
    
    <View style={styles.container}>

      {/* Header will show which user is logged in
          You can see the users Full Name, Profile Picture and the userName in the Header
      */}
      <View style={styles.header}>
        <View style={styles.flexHeader}>
          <Image style={styles.image}  source={PlaceHolderImage}></Image>

          <View>
            <Text style={styles.headerText}>Willkomen</Text>
            <Text style={styles.header}>{currUser}</Text>
          </View>
        </View>
        <View style={styles.username}>
          <Text style={{ paddingVertical: 5 }}>{currUserName}</Text>
          <Ionicons style={{ paddingLeft: 60 }} name="copy" size={20}></Ionicons>
        </View>
      </View>

      {/* This will be the Main Part of the Profile Page:
          You can see how many stars the user collected,
          the Levels they completed and how many Levels they still need to play
      */}
      <View style={styles.mainBody}>


        {/* STARS: */}
        <Text style={styles.headlines}>So viele Sterne hast du schon: </Text>

        <View style={styles.starBox}>

          <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10}}>
            <Text style={{fontSize: 70, paddingTop: 6, paddingRight: 10}} >{userStars}</Text>

            {/* TODO: Add Function to button/ on click username should be copied to "Zwischenablage" */}
            <Ionicons name="star" color={'#ffde59'} size={70}></Ionicons>
          </View>

        </View>



        {/* LEVEL: */}
        <Text style={styles.headlines}>Diese Level hast du schon abgeschlossen: </Text>
        <View style={{marginBottom:20}}>
          <View style={styles.levelContainer}>{showLevels()}</View>
        </View>
 

        {/* STATISTIKS: */}
        <Text style={styles.headlines}>Deine Statistiken: </Text>
        <View style={{marginBottom:20}}>
          {/* ELERDIGTE LEVELS: */}
          <Text style={styles.headlinesButSmaller}>Erledigt: </Text>
          <View style={{backgroundColor: '#7ed957'}}>
            5S
          </View>


          {/* UNERLEFIGTE LEVELS: */}
          <Text style={styles.headlinesButSmaller}>Unerledigt: </Text>


        </View>



      </View>
      
    </View>
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },
  headerText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 25
  },
  flexHeader: { 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#5b6bf5",
    width: '100%',
    color: '#FFFFFF',
    fontSize: 20,
  },
  header: { 
    flex: 2,
    backgroundColor: "#5b6bf5",
    width: '100%',
    color: '#FFFFFF',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  image: {
   height: 70,
   width: 70, 
   marginRight: 20
  },
  username: {
    margin: 20,
    backgroundColor: '#ffde59', //gelb
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    borderRadius: 5,
    minWidth: 200,
    fontWeight: 'bold'
  },
  mainBody: {
    flex: 8
  }, 
  starBox: {
    padding: 17,
    fontSize: 20,
    alignSelf: 'center',
    width: '60%',
  },
  levelContainer: {
    alignSelf: 'center',
    padding: 17,
    fontSize: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '60%',
    justifyContent: 'center'
  },
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
    backgroundColor: '#ffde59',
    borderRadius: 200,
    textAlign: 'center',
    color: '#fff',
    fontSize: 40,
    padding: 10,
    width: 60,
    height: 60
  },
  headlines: {
    width: '60%', 
    alignSelf: 'center', 
    fontSize: 20, 
    marginLeft: 50
  },
  headlinesButSmaller: {
    width: '60%', 
    alignSelf: 'center', 
    fontSize: 16, 
    marginLeft: 50
  }

})
