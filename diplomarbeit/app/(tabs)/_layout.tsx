import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarActiveTintColor: '#FFFFFF', //"#ffde59", //gelb
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
          tabBarIcon : ({focused, color}) => (
          <Ionicons 
              name={focused ? "home" : "home-outline"} 
              color={color}
              size={30}/>)
        }}/>
      <Tabs.Screen name="profile" options={{
          headerTitle:"Profil",
          tabBarIcon : ({focused, color}) => (
            <Ionicons 
                name={focused ? "person" : "person-outline"} 
                color={color}
                size={30}/>)
        }}/>
      <Tabs.Screen name="not-found" options={{headerTitle:"Not Found"}}/>
    </Tabs>
  );
}



