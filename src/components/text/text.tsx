import React from "react";
import { Text as NativeText } from "react-native";

export default function Text({ children, style, ...props }: any) {
    return (
        <NativeText {...props} style={[{ fontSize: 25, fontFamily: "TicTacToe" }, style]}>
            {children}
        </NativeText>
    );
}
