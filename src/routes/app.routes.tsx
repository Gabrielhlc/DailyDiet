import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home';
import { Statistics } from '@screens/Statistics';
import { NewMeal } from '@screens/NewMeal';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        // Ordem de aparição
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="statistics"
                component={Statistics}
            />

            <Screen
                name="new"
                component={NewMeal}
            />
        </Navigator>
    )
}