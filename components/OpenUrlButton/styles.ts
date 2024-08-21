import {StyleSheet, TextStyle} from "react-native";
import colors from "@/constants/Colors";

type LinkStyle = {
    link: TextStyle
}

export const styles = StyleSheet.create<LinkStyle>({
    link: {
        fontSize: 12,
        color: colors.default.primary,
        marginLeft: 10
    },
})
