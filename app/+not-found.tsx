import {Link, Stack} from 'expo-router';
import React from 'react';

import {Text, View} from '@/components/Themed';
import {styles404screen} from "@/app/globals-styles";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{title: 'Oops!'}}/>
            <View style={styles404screen.container}>
                <Text style={styles404screen.title}>This screen doesn&apos;t exist.</Text>

                <Link href="/" style={styles404screen.link}>
                    <Text style={styles404screen.linkText}>Go to home screen!</Text>
                </Link>
            </View>
        </>
    );
}
