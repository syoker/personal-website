import { usePagesProvider } from 'src/hooks/pages';

import Wrapper from './components/Wrapper';
import Category from './components/Category/Category';

const Categories = () => {
	const { category: currentCategory, posts } = usePagesProvider();

	const categories = posts
		.filter((post) => post.category === currentCategory)
		.map((post) => {
			return post.tags;
		})
		.flat()
		.filter((tag, index, self) => {
			return index === self.findIndex((a) => a === tag);
		});

	const renderCategories = categories.map((category, index) => (
		<Category key={index} category={currentCategory || ''}>
			{category}
		</Category>
	));

	return (
		<Wrapper>
			<Category category={currentCategory || ''}>all</Category>
			{renderCategories}
		</Wrapper>
	);
};

export default Categories;
