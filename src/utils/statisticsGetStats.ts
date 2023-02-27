import { mealsGetAll } from "@storage/meal/mealsGetAll";

export type Stats = {
    percentage: number;
    inDietStreak: number;
    meals: number;
    inDietMeals: number;
    outDietMeals: number;
}

export async function statisticsGetStats() {
    try {

        const meals = await mealsGetAll();

        if (meals.length === 0) {
            const stats: Stats = {
                percentage: 0,
                inDietMeals: 0,
                meals: 0,
                inDietStreak: 0,
                outDietMeals: 0
            }
            return stats;
        }

        meals.sort((a, b) => {
            const dateA: string[] = a.date.split('/');
            const dateB: string[] = b.date.split('/');
            const timeA: string[] = a.time.split(':');
            const timeB: string[] = b.time.split(':');
            const dateObjA: Date = new Date(+dateA[2], +dateA[1], +dateA[0], +timeA[0], +timeA[1]);
            const dateObjB: Date = new Date(+dateB[2], +dateB[1], +dateB[0], +timeB[0], +timeB[1]);
            return dateObjA.getTime() - dateObjB.getTime();
        })

        var bestSequence = 0;
        var inDietStreak = 0;
        meals.map(meal => {
            if (meal.inDiet) {
                inDietStreak++;
                if (inDietStreak > bestSequence) {
                    bestSequence = inDietStreak;
                }
            } else {
                inDietStreak = 0;
            }
        })

        const inDietMeals = meals.filter(meal => meal.inDiet === true)

        const percentage = (inDietMeals.length / meals.length) * 100

        const stats: Stats = {
            percentage: +percentage.toFixed(2),
            inDietMeals: inDietMeals.length,
            meals: meals.length,
            inDietStreak: bestSequence,
            outDietMeals: (meals.length - inDietMeals.length)
        }
        return stats;
    } catch (error) {
        throw error;
    }
}