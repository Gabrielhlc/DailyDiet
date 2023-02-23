import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            new: undefined;
            statistics: undefined;
            meal: {
                meal: MealStorageDTO;
            };
            feedback: {
                inDiet: string;
            };
        }
    }
}