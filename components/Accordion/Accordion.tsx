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
	avatarUrl?: string;
	name: string;
	url?: string;
	textUrl?: string;
	content?: Category['content'];
};

export const Accordion = ({ avatarUrl, name, url, textUrl, content }: AccordionProps) => {
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
					{content?.map((v, i) => {
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
