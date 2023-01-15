import { StatusBar, SafeAreaView, Text, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FavoritesContextProvider from "./store/context/favorites-context";

import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#351401" },
                headerTintColor: "white",
                sceneContainerStyle: { backgroundColor: "#3f2f25" },
                drawerContentStyle: { backgroundColor: "#351401" },
                drawerInactiveTintColor: "white",
                drawerActiveTintColor: "#351401",
                drawerActiveBackgroundColor: "#e4baa1",
            }}
        >
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: "All Categories",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons color={color} size={size} name="list" />
                    ),
                }}
            />
            <Drawer.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons color={color} size={size} name="star" />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <FavoritesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: { backgroundColor: "#351401" },
                            headerTintColor: "white",
                            cardStyle: { backgroundColor: "#3f2f25" },
                        }}
                    >
                        <Stack.Screen
                            name="Drawer"
                            component={DrawerNavigator}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="MealsOverview"
                            component={MealsOverviewScreen}
                        />
                        <Stack.Screen
                            name="MealDetail"
                            component={MealDetailScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </FavoritesContextProvider>
        </>
    );
}
