export const getPath = (tag: string) => {
	return tag === 'all' ? '/blog' : '/blog' + '/' + tag;
};

export const getTextColor = (path: string, currentPath: string) => {
	return path === currentPath ? 'var(--color-on-background)' : 'var(--color-on-background)';
};

export const getBorderColor = (path: string, currentPath: string) => {
	return path === currentPath ? 'transparent' : 'var(--color-outline)';
};

export const getBackgroundColor = (path: string, currentPath: string) => {
	return path === currentPath ? 'rgba(var(--color-primary-rgb), 0.3)' : 'transparent';
};
