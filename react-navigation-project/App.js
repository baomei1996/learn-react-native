import { StatusBar, SafeAreaView } from "react-native"
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar  barStyle="light-content"/>
      <CategoriesScreen/>
    </SafeAreaView>
  );
}
