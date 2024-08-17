import { Pressable, Text, View } from 'react-native';
import React, { useCallback, useContext } from 'react';
import Animated, {
	measure,
	runOnUI,
	useAnimatedRef,
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import { Chevron } from './Chevron';
import { styles } from '@/components/Accordion/styles';
import { Avatar } from '@/components/Avatar/Avatar';
import GlobalsStyles from '@/app/globals-styles';
import { OpenURLButton } from '@/components/OpenUrlButton/OpenUrlButton';
import { AccordionContent } from '@/components/Accordion/AccordionContent';
import { UsersRepositoriesContext } from '@/context/UserRepositoriesContext';

type AccordionProps = {
	avatarUrl?: string;
	name: string;
	url?: string;
	textUrl?: string;
	onPress?: () => Promise<void>;
};

export const Accordion = ({ avatarUrl, name, url, textUrl, onPress }: AccordionProps) => {
	const listRef = useAnimatedRef();
	const heightValue = useSharedValue(0);
	const open = useSharedValue(false);
	const progress = useDerivedValue(() => (open.value ? withTiming(1) : withTiming(0)));
	const { repositoriesCache, isLoading } = useContext(UsersRepositoriesContext);

	const heightAnimationStyle = useAnimatedStyle(() => ({
		height: heightValue.value,
	}));

	const handlePress = useCallback(async () => {
		if (heightValue.value === 0 && !isLoading) {
			runOnUI(() => {
				'worklet';
				const measuredHeight = measure(listRef)?.height || 0;
				heightValue.value = withTiming(measuredHeight);
			})();
		} else {
			heightValue.value = withTiming(0);
		}
		open.value = !open.value;
		if (onPress && !repositoriesCache[name]) {
			await onPress();
			setTimeout(() => {
				runOnUI(() => {
					'worklet';
					const measuredHeight = measure(listRef)?.height || 0;
					heightValue.value = withTiming(measuredHeight);
				})();
			}, 200);
		}
	}, [onPress, open, heightValue, repositoriesCache, name, isLoading, listRef]);

	return (
		<View style={styles.container}>
			<Pressable onPress={handlePress} style={styles.titleContainer}>
				{avatarUrl ? (
					<Avatar avatarUrl={avatarUrl} username={name} url={url} textUrl={textUrl} />
				) : (
					<View style={GlobalsStyles.flexDirectionColumn}>
						<Text style={styles.textTitle}>{name}</Text>
						{url && (
							<OpenURLButton
								url={url}
								stylesLinkText={GlobalsStyles.marginLeftNone}
								linkText={textUrl}
							/>
						)}
					</View>
				)}
				<Chevron progress={progress} />
			</Pressable>
			<Animated.View style={heightAnimationStyle}>
				<Animated.View style={styles.contentContainer} ref={listRef}>
					{isLoading ? (
						<View style={styles.titleContainer}>
							<Text style={styles.textTitle}>Loading...</Text>
						</View>
					) : repositoriesCache[name]?.length > 0 ? (
						repositoriesCache[name]?.map((item) => (
							<AccordionContent
								key={`${item.name}-${item.id}`}
								name={item.name}
								description={item.description}
								createdAt={item.created_at}
								hasRepoTags={true}
								visibility={item.visibility}
								defaultBranch={item.default_branch}
								watchers={item.watchers}
								repoUrl={item.html_url}
								forks={item.forks}
								starsCount={item.stargazers_count}
							/>
						))
					) : (
						<View style={styles.titleContainer}>
							<Text style={styles.textTitle}>No repositories</Text>
						</View>
					)}
				</Animated.View>
			</Animated.View>
		</View>
	);
};
