import {StyleSheet, TextStyle, ViewStyle} from "react-native";
import colors from "@/constants/Colors";

type AccordionStyle = {
    container: ViewStyle;
    textTitle: TextStyle;
    titleContainer: ViewStyle;
    contentContainer: ViewStyle;
    content: ViewStyle;
    textContent: TextStyle;
    iconWrapper: ViewStyle;
}

export const styles = StyleSheet.create<AccordionStyle>({
    container: {
        backgroundColor: colors.default.black,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: colors.default.gray600,
        overflow: 'hidden',
    },
    textTitle: {
        fontSize: 16,
        color: colors.default.white,
    },
    titleContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contentContainer: {
        position: 'absolute',
        width: '100%',
        top: 0,
    },
    content: {
        padding: 20,
        backgroundColor: colors.default.black,
    },
    textContent: {
        fontSize: 14,
        color: colors.default.white,
    },
    iconWrapper: {
        width: 34,
        height: 34,
        borderRadius: 50,
        backgroundColor: colors.default.gray900,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
