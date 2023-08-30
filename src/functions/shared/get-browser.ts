const getBrowser = () => {
	const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase() : '';

	if (userAgent.includes('chrome')) return 'Chrome';

	if (userAgent.includes('firefox')) return 'Firefox';

	if (userAgent.includes('safari')) return 'Safari';

	if (userAgent.includes('opera') || userAgent.includes('opr')) return 'Opera';

	if (userAgent.includes('edge')) return 'Microsoft Edge';

	if (userAgent.includes('trident')) return 'Internet Explorer';

	return undefined;
};

export default getBrowser;
