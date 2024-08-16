import {SafeAreaView, View, ViewProps} from "react-native";
import React, {ReactNode} from "react";

type ContainerProps = ViewProps & {
    children: ReactNode
}

export const Container = ({children, ...props}: ContainerProps) => {
    return (
        <SafeAreaView style={{flex: 1}} {...props}>
            <View style={{flex: 1}}>{children}</View>
        </SafeAreaView>
    );
}
