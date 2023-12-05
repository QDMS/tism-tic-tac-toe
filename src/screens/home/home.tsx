import React, { ReactElement } from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "./home.styles";
import { Button, GradientBackground } from "@components";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";

type HomeProps = {
    navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

export default function Home({ navigation }: HomeProps): ReactElement {
    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <Image style={styles.logo} source={require("@assets/images/logo.png")} />
                <View style={styles.button}>
                    <Button
                        onPress={() => {
                            navigation.navigate("SinglePlayerGame");
                        }}
                        style={styles.button}
                        title="SINGLE PLAYER"
                    />
                    <Button style={styles.button} title="MULTIPLAYER" />
                    <Button style={styles.button} title="LOGIN" />
                    <Button
                        onPress={() => {
                            navigation.navigate("Settings");
                        }}
                        style={styles.button}
                        title="SETTINGS"
                    />
                </View>
            </ScrollView>
        </GradientBackground>
    );
}
