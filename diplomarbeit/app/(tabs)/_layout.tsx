import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
        headerTitle:"Gestures",
        headerLeft: () => <></>
        }}/>
      <Tabs.Screen name="profile" options={{headerTitle:"Profil"}}/>
      <Tabs.Screen name="not-found" options={{headerTitle:"Not Found"}}/>
    </Tabs>
  );
}



