import { View, FlatList, StyleSheet, Text } from "react-native";
import { useEffect, useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId;
    return (
        <View style={styles.container}>
            <Text>This is the Meal Deatil Screen ({mealId})</Text>
        </View>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    container: {},
});
