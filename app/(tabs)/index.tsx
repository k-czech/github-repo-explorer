import React from 'react';
import {styles} from "@/app/(tabs)/styles";
import {InputText} from "@/components/InputText/InputText";
import {Container} from "@/components/Container/Container";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {FlashList} from "@shopify/flash-list";
import {data} from "@/data/data";
import {Accordion} from "@/components/Accordion/Accordion";

export default function HomeScreen() {
    return (
        <Container style={styles.container}>
            <InputText placeholder="Search" onChangeText={val => console.log(val)} returnKeyType="search"
                       keyboardType="web-search" icon={<FontAwesome name="search" size={14} color="white"/>}/>
            <FlashList data={data} keyExtractor={item => item.id.toString()} renderItem={({item}) => {
                return <Accordion value={item}/>;
            }} estimatedItemSize={50}/>
        </Container>
    );
}
