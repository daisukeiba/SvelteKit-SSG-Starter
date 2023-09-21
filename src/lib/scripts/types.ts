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