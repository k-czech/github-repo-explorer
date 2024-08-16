import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import React from 'react';
import { styles } from '@/components/Avatar/styles';
import { OpenURLButton } from '@/components/OpenUrlButton/OpenUrlButton';

type AvatarProps = {
	username: string;
	avatarUrl: string;
	textUrl?: string;
	url?: string;
};

const blurhash =
	'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const Avatar = ({ username, avatarUrl, url, textUrl }: AvatarProps) => {
	return (
		<View style={styles.container}>
			<Image
				source={{ uri: avatarUrl }}
				style={styles.avatar}
				placeholder={{ blurhash }}
				contentFit="cover"
				transition={1000}
			/>
			<View>
				<Text style={styles.textTitle}>{username}</Text>
				{url && <OpenURLButton url={url} linkText={textUrl} />}
			</View>
		</View>
	);
};
