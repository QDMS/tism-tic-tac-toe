import Navigator from "@config/navigator";
import { SettingsProvider } from "@contexts/settings-context";
import { useFonts } from "expo-font";
import { ReactElement } from "react";

export default function App(): ReactElement {
    const [fontsLoaded] = useFonts({
        TicTacToe: require("@assets/fonts/TicTacToe.ttf")
    });
    if (!fontsLoaded) {
        return <></>;
    }
    return (
        <SettingsProvider>
            <Navigator />
        </SettingsProvider>
    );
}
