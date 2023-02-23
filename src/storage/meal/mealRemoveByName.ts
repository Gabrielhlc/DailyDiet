import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealRemoveByDTO(mealDeleted: MealStorageDTO) {
    try {
        const storedMeals = await mealsGetAll();

        const filteredMeals = storedMeals.filter(meal => meal.name !== mealDeleted.name);

        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(filteredMeals));
        await AsyncStorage.removeItem(`${MEAL_COLLECTION}-${mealDeleted}`)
    } catch (error) {
        throw error;
    }
}