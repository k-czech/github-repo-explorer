import React from 'react';
import {Text, View} from '@/components/Themed';
import {styles} from "@/app/(tabs)/styles";
import {Container} from "@/components/Container/Container";

export default function TabTwoScreen() {
    return (
        <Container style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
        </Container>
    );
}
