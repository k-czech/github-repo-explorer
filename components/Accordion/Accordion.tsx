import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { Category } from '@/data/data';
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

type AccordionProps = {
	value: Category;
};

export const Accordion = ({ value }: AccordionProps) => {
	const listRef = useAnimatedRef();
	const heightValue = useSharedValue(0);
	const open = useSharedValue(false);
	const progress = useDerivedValue(() => (open.value ? withTiming(1) : withTiming(0)));

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
				style={styles.titleContainer}
			>
				{value.avatar_url ? (
					<Avatar avatarUrl={value.avatar_url} username={value.login} url={value.html_url} />
				) : (
					<View style={GlobalsStyles.flexDirectionColumn}>
						<Text style={styles.textTitle}>{value.login}</Text>
						{value.html_url && (
							<OpenURLButton url={value.html_url} stylesLinkText={GlobalsStyles.marginLeftNone}>
								Go to github profile
							</OpenURLButton>
						)}
					</View>
				)}
				<Chevron progress={progress} />
			</Pressable>
			<Animated.View style={heightAnimationStyle}>
				<Animated.View style={styles.contentContainer} ref={listRef}>
					{value.content.map((v, i) => {
						return (
							<AccordionContent
								key={i}
								name={v.name}
								description={v.description}
								createdAt={v.created_at}
								hasRepoTags={true}
								visibility={v.visibility}
								defaultBranch={v.default_branch}
								watchers={v.watchers}
								repoUrl={v.html_url}
								forks={v.forks}
								starsCount={v.stargazers_count}
							/>
						);
					})}
				</Animated.View>
			</Animated.View>
		</View>
	);
};
