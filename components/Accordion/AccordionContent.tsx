import { styles } from '@/components/Accordion/styles';
import { LayoutChangeEvent, Text, View } from 'react-native';
import GlobalsStyles from '@/app/globals-styles';
import { convertDateToDateString } from '@/lib/utils';
import { Tag } from '@/components/Tag/Tag';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import colors from '@/constants/Colors';
import { OpenURLButton } from '@/components/OpenUrlButton/OpenUrlButton';
import React from 'react';
import { Repos } from '@/types/Repos';
import { spacing } from '@/constants/Spacing';

type AccordionContentProps = {
	name: Repos['name'];
	description: Repos['description'];
	createdAt: Repos['created_at'];
	hasRepoTags: boolean;
	visibility: Repos['visibility'];
	defaultBranch: Repos['default_branch'];
	watchers: Repos['watchers'];
	repoUrl: Repos['html_url'];
	forks: Repos['forks'];
	starsCount: Repos['stargazers_count'];
	handleLayout?: (event: LayoutChangeEvent) => void;
};

export const AccordionContent = ({
	name,
	description,
	createdAt,
	hasRepoTags,
	visibility,
	defaultBranch,
	watchers,
	repoUrl,
	forks,
	starsCount,
	handleLayout,
}: AccordionContentProps) => {
	return (
		<View style={styles.content} onLayout={handleLayout}>
			<View style={GlobalsStyles.flexContainerRowSpaceBetween}>
				<View style={GlobalsStyles.flex}>
					<Text style={[styles.textContent, styles.textContentTitle]}>{name}</Text>
					{description && (
						<Text
							style={[styles.textContent, styles.textContentDescription]}
							numberOfLines={4}
							ellipsizeMode="tail"
						>
							{description}
						</Text>
					)}
				</View>
				{createdAt && (
					<View
						style={[GlobalsStyles.flexContainerRowSpaceBetween, { marginLeft: spacing.medium }]}
					>
						<View style={GlobalsStyles.bulet} />
						<Text style={[styles.textContent, styles.textContentTitle]}>
							{convertDateToDateString(new Date(createdAt))}
						</Text>
					</View>
				)}
			</View>
			{hasRepoTags && (
				<>
					<View style={styles.tagContainer}>
						<Tag title={visibility} />
						<Tag title={defaultBranch} />
						<Tag
							icon={<FontAwesome name="eye" size={14} color={colors.default.white} />}
							title={`${watchers}`}
						/>
						<Tag
							icon={<FontAwesome name="code-fork" size={14} color={colors.default.white} />}
							title={`${forks}`}
						/>
						<Tag
							icon={<FontAwesome name="star-o" size={14} color={colors.default.white} />}
							title={`${starsCount}`}
						/>
					</View>
					{repoUrl && (
						<OpenURLButton
							url={repoUrl}
							stylesOpenUrlButton={styles.linkButton}
							stylesLinkText={styles.linkButtonText}
							linkText="Go to repository"
						/>
					)}
				</>
			)}
		</View>
	);
};
