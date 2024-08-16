import React, {useCallback} from "react";
import {Alert, Linking, Pressable, Text} from "react-native";
import {styles} from "@/components/OpenUrlButton/styles";

type OpenURLButtonProps = {
    url: string;
    children: string;
};

export const OpenURLButton = ({url, children}: OpenURLButtonProps) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return <Pressable onPress={handlePress}><Text style={styles.link}>{children}</Text></Pressable>;
};
