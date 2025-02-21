import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarActiveTintColor: '#FFFFFF',
        headerStyle : {
          backgroundColor: "#5b6bf5" //hellblau
        },
        headerShadowVisible: false,
        headerTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: "#5b6bf5", //hellblau
        },
      }}
    >
      <Tabs.Screen name="index" options={{
        headerTitle:"Gestures",
        title: "Home",
        tabBarIcon : ({focused, color}) => (
          <Ionicons 
            name={focused ? "home" : "home-outline"} 
            color={color}
            size={30}
          />
        )
      }}/>

      <Tabs.Screen name="profile" options={{
        headerTitle:"Profil",
        title: "Profil",
        tabBarIcon : ({focused, color}) => (
          <Ionicons 
            name={focused ? "person" : "person-outline"} 
            color={color}
            size={30}
          />
        )
      }}/>

      <Tabs.Screen name="level_overview" options={{
        title: "Levels",
        headerTitle:"Levels",
        tabBarIcon : ({focused, color}) => (
          <Ionicons 
            name={focused ? "game-controller" : "game-controller-outline"} 
            color={color}
            size={30}/>
        )
      }}/>

      <Tabs.Screen name="camera" options={{
        title: "Camera",
        headerTitle:"Camera",
        tabBarIcon : ({focused, color}) => (
          <Ionicons 
            name={focused ? "camera" : "camera-outline"} 
            color={color}
            size={30}/>
        )
      }}/>

    {/*
      TODO: auskommentieren / nur da, weil es leichter ist so zu programmieren
      <Tabs.Screen name="level" options={{tabBarItemStyle: {display:"none"}}}/>
    */}
      

    </Tabs>
  );
}



