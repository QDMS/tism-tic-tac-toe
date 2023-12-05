import { ScrollView, TouchableOpacity, View, Switch, Alert } from "react-native";
import React, { ReactElement, useEffect, useState } from "react";
import { GradientBackground, Text } from "@components";
import styles from "./settings.styles";
import { colors } from "@utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { difficulties, useSettings } from "@contexts/settings-context";

export default function Settings(): ReactElement | null {
    const { settings, saveSetting } = useSettings();

    if (!settings) return null;

    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.field}>
                    <Text style={styles.label}>Bot Difficulty</Text>
                    <View style={styles.choices}>
                        {Object.keys(difficulties).map(level => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        saveSetting(
                                            "difficulty",
                                            level as keyof typeof difficulties
                                        );
                                    }}
                                    style={[
                                        styles.choice,
                                        {
                                            backgroundColor:
                                                settings.difficulty === level
                                                    ? colors.darkPurple
                                                    : colors.offwhite
                                        }
                                    ]}
                                    key={level}
                                >
                                    <Text
                                        style={[
                                            styles.choiceText,
                                            {
                                                color:
                                                    settings.difficulty === level
                                                        ? colors.pink
                                                        : colors.teal
                                            }
                                        ]}
                                    >
                                        {difficulties[level as keyof typeof difficulties]}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
                <View style={[styles.field, styles.switchField]}>
                    <Text style={styles.label2}>Sounds</Text>
                    <Switch
                        trackColor={{
                            false: colors.darkGreen,
                            true: colors.pink
                        }}
                        thumbColor={colors.pink}
                        ios_backgroundColor={colors.darkGreen}
                        value={settings.sounds}
                        onValueChange={() => {
                            saveSetting("sounds", !settings.sounds);
                        }}
                    />
                </View>
                <View style={[styles.field, styles.switchField]}>
                    <Text style={styles.label2}>Haptics/Vibrations</Text>
                    <Switch
                        trackColor={{
                            false: colors.darkGreen,
                            true: colors.pink
                        }}
                        thumbColor={colors.pink}
                        ios_backgroundColor={colors.darkGreen}
                        value={settings.haptics}
                        onValueChange={() => {
                            saveSetting("haptics", !settings.haptics);
                        }}
                    />
                </View>
            </ScrollView>
        </GradientBackground>
    );
}
