import { colors } from "@utils";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 40
    },
    field: {
        marginBottom: 30
    },
    label: {
        color: colors.offwhite,
        fontSize: 28
    },
    label2: {
        color: colors.offwhite,
        fontSize: 28
    },
    choices: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10
    },
    choice: {
        backgroundColor: colors.offwhite,
        padding: 5,
        margin: 5
    },
    choiceText: {
        color: colors.teal,
        fontSize: 26
    },
    switchField: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

export default styles;
