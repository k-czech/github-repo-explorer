import { Image } from 'expo-image';
import { View } from 'react-native';
import React from 'react';
import { styles } from '@/components/Avatar/styles';
import { OpenURLButton } from '@/components/OpenUrlButton/OpenUrlButton';
import { blurhash } from '@/constants/Const';
import { StyledText } from '@/components/StyledText';

type AvatarProps = {
	username: string;
	avatarUrl: string;
	textUrl?: string;
	url?: string;
};

export const Avatar = ({ username, avatarUrl, url, textUrl }: AvatarProps) => {
	return (
		<View style={styles.container}>
			<Image
				source={{ uri: avatarUrl }}
				style={styles.avatar}
				placeholder={{ blurhash }}
				contentFit="cover"
				transition={1000}
				testID="avatar-image"
			/>
			<View>
				<StyledText style={styles.textTitle}>{username}</StyledText>
				{url && <OpenURLButton url={url} linkText={textUrl} />}
			</View>
		</View>
	);
};
