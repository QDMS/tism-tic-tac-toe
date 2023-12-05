import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { Home, Settings, SinglePlayerGame } from "@screens";
import { colors } from "@utils";

export type StackNavigatorParams = {
    Home: undefined;
    SinglePlayerGame: undefined;
    Settings: undefined;
};

const navigatorOptions: StackNavigationOptions = {
    headerStyle: {
        backgroundColor: colors.teal,
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
            width: 0
        }
    },
    headerTintColor: colors.darkGreen,
    headerTitleStyle: {
        fontFamily: "TicTacToe",
        fontSize: 35
    }
};

const Stack = createStackNavigator<StackNavigatorParams>();

export default function Navigator({ children }: any): ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={navigatorOptions}>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen
                    name="SinglePlayerGame"
                    component={SinglePlayerGame}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        headerTitleAlign: "center"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
