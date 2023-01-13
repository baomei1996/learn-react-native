import { StatusBar, SafeAreaView } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: "#351401" },
                        headerTintColor: "white",
                        cardStyle: { backgroundColor: "#3f2f25" },
                    }}
                >
                    <Stack.Screen
                        name="MealsCategories"
                        component={CategoriesScreen}
                        options={{
                            title: "All Categories",
                        }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverviewScreen}
                        // options={({ route, navigation }) => {
                        //     const catId = route.params.categoryId;
                        //     return {
                        //         title: catId,
                        //     };
                        // }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
