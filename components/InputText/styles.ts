import {StyleSheet, TextStyle, ViewStyle} from "react-native";
import {spacing} from "@/constants/Spacing";
import colors from "@/constants/Colors";

type InputStyle = {
    error: ViewStyle;
    component: ViewStyle;
    border: ViewStyle;
    border_error: ViewStyle;
    input: TextStyle;
    label: TextStyle;
    focused: ViewStyle;
    iconWrapper: ViewStyle;
}

export default StyleSheet.create<InputStyle>({
    component: {
        paddingBottom: spacing.small,
        maxHeight: 70,
        minHeight: 40,
        marginBottom: spacing.medium,
    },
    label: {
        marginLeft: spacing.semiMedium,
        marginBottom: spacing.veryTiny,
    },
    border: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.default.gray900,
    },
    border_error: {
        borderColor: colors.default.alert,
    },
    input: {
        borderRadius: 24,
        minHeight: 48,
        width: "100%",
        backgroundColor: colors.default.black,
        color: colors.default.white,
        paddingHorizontal: spacing.medium,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: colors.default.black,
    },
    error: {
        paddingTop: spacing.veryTiny,
        paddingLeft: spacing.small,
        paddingBottom: spacing.tiny,
        minHeight: 44,
    },
    focused: {
        borderColor: colors.default.white,
    },
    iconWrapper: {
        position: "absolute",
        top: 8,
        right: 9,
        backgroundColor: colors.default.gray900,
        borderRadius: 24,
        width: 34,
        height: 34,
        justifyContent: "center",
        alignItems: "center",
    },
});
