import ICONS from './brand-icons.constant';

interface BrandIconsProps {
	icon: 'github' | 'youtube' | 'envelope' | 'twitter';
}

const BrandIcons = ({ icon }: BrandIconsProps) => {
	return ICONS[icon];
};

export default BrandIcons;
