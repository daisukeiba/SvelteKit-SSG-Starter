export interface MetaData {
	title: string;
	description?: string;
	image?: string;
	ogType?: 'website' | 'article';
}

export interface NavItem {
	href: string;
	id: string;
	label: string;
}

export interface PostData {
	slug: string;
	title: string;
	content: string;
	prev?: string;
	next?: string;
}

export interface ShareData {
	url: string;
	text: string;
	hash?: string;
}

export type SharePlatform = 'twitter' | 'facebook' | 'line';

export interface SummariesData {
	slug: string;
	title: string;
}