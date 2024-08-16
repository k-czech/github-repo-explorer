import React from 'react';
import Animated, {SharedValue, useAnimatedStyle} from 'react-native-reanimated';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {View} from "react-native";
import {styles} from "@/components/Accordion/styles";

type Props = {
    progress: Readonly<SharedValue<0 | 1>>;
};

export const Chevron = ({progress}: Props) => {
    const iconStyle = useAnimatedStyle(() => ({
        transform: [{rotate: `${progress.value * -180}deg`}],
    }));
    return (
        <Animated.View style={iconStyle}>
            <View style={styles.iconWrapper}>
                <FontAwesome name="chevron-down" size={12} color="white"/>
            </View>
        </Animated.View>
    );
};
