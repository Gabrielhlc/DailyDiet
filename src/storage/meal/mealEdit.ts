import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll"
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealEdit(newMeal: MealStorageDTO) {
    try {
        const storedMeals = await mealsGetAll();

        const filteredMeals = storedMeals.filter(meal => (meal.name !== newMeal.name) && (meal.date !== newMeal.date) && (meal.time !== newMeal.time));

        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(filteredMeals));
        await AsyncStorage.removeItem(`${MEAL_COLLECTION}-${newMeal}`)

        const storage = JSON.stringify([...filteredMeals, newMeal]);
        await AsyncStorage.setItem(MEAL_COLLECTION, storage);

    } catch (error) {
        throw error;
    }
}