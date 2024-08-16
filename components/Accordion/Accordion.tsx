import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {Category} from '@/data/data';
import Animated, {
    measure,
    runOnUI,
    useAnimatedRef,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import {Chevron} from './Chevron';
import {styles} from "@/components/Accordion/styles";
import {Avatar} from "@/components/Avatar/Avatar";

type AccordionProps = {
    value: Category;
};

export const Accordion = ({value}: AccordionProps) => {
    const listRef = useAnimatedRef();
    const heightValue = useSharedValue(0);
    const open = useSharedValue(false);
    const progress = useDerivedValue(() =>
        open.value ? withTiming(1) : withTiming(0),
    );

    const heightAnimationStyle = useAnimatedStyle(() => ({
        height: heightValue.value,
    }));

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {
                    if (heightValue.value === 0) {
                        runOnUI(() => {
                            'worklet';
                            heightValue.value = withTiming(measure(listRef)!.height);
                        })();
                    } else {
                        heightValue.value = withTiming(0);
                    }
                    open.value = !open.value;
                }}
                style={styles.titleContainer}>
                <Avatar username={value.login} avatarUrl={value.avatar_url} url={value.html_url}/>
                <Chevron progress={progress}/>
            </Pressable>
            <Animated.View style={heightAnimationStyle}>
                <Animated.View style={styles.contentContainer} ref={listRef}>
                    {
                        value.content.map((v, i) => {
                            return (
                                <View key={i} style={styles.content}>
                                    <Text style={styles.textContent}>{v}</Text>
                                </View>
                            );
                        })}
                </Animated.View>
            </Animated.View>
        </View>
    );
};


