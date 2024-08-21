import {StyleSheet} from "react-native";
import colors from "@/constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    textTitle: {
        fontSize: 16,
        marginLeft: 10,
        color: colors.default.white,
    },
})
