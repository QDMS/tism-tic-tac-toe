import { colors } from "@utils";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 10
    },
    difficulty: {
        color: colors.offwhite,
        fontSize: 32,
        textAlign: "center",
        marginBottom: 20
    },
    results: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 80
    },
    resultsBox: {
        backgroundColor: colors.offwhite,
        borderWidth: 1,
        borderColor: colors.pink,
        alignItems: "center",
        padding: 15,
        marginHorizontal: 5
    },
    resultsTitle: {
        color: colors.darkGreen,
        fontSize: 27
    },
    resultsCount: {
        color: colors.darkGreen,
        fontSize: 30
    },
    modal: {
        position: "absolute",
        backgroundColor: colors.pink,
        bottom: 16,
        left: 30,
        right: 30,
        padding: 30,
        borderWidth: 3,
        borderRadius: 15,
        borderColor: colors.offwhite
    },
    modalText: {
        color: colors.darkGreen,
        fontSize: 28,
        textAlign: "center",
        marginBottom: 0,
        bottom: 15
    }
});

export default styles;
