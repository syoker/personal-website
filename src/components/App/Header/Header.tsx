import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

export default function Header({ pathname }: { pathname: string }) {
	if (pathname === '/' || pathname === '/blog' || pathname === '/projects') {
		return <HeaderDesktop pathname={pathname} />;
	}

	return (
		<>
			<HeaderMobile pathname={pathname} />
			<HeaderDesktop pathname={pathname} />
		</>
	);
}
