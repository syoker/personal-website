export const getPath = (tag: string) => {
	return tag === 'all' ? '/blog' : '/blog' + '/' + tag;
};

export const getTextColor = (path: string, currentPath: string) => {
	return path === currentPath ? 'var(--color-primary)' : 'var(--color-on-background)';
};

export const getBorderColor = (path: string, currentPath: string) => {
	return path === currentPath ? 'var(--color-primary)' : 'var(--color-outline)';
};
