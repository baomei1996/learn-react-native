import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    Image,
    Button,
} from "react-native";
import { useEffect, useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        console.log("Pressed~!");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        onPress={headerButtonPressHandler}
                        icon="star"
                        color="white"
                    />
                );
            },
        });
    }, [navigation, headerButtonPressHandler]);
    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.image}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterCotnainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white",
    },
    detailText: {
        color: "white",
    },
    listOuterCotnainer: {
        alignItems: "center",
    },
    listContainer: {
        width: "80%",
    },
});