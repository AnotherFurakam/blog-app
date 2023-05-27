import type { FC } from 'react';
import CategoryCard from './CategoryCard';

interface CategoryListProps {}

const CategoryList: FC<CategoryListProps> = ({}) => {
    return (
      <div className='flex flex-col gap-5 h-full'>
        <h3 className='text-xl font-semibold'>Categories</h3>
        <div className='flex flex-col gap-5 md:gap-0 md:justify-between h-full lg:gap-5'>
          <CategoryCard name='Culture' image='/img/categories/culture-card.jpg' />
          <CategoryCard name='Creativity' image='/img/categories/creativity-card.jpg' />
          <CategoryCard name='Technology' image='/img/categories/tech-card.jpg' />
          <CategoryCard name='Humor' image='/img/categories/humor-card.jpg' />
        </div>
      </div>
    );
}
export default CategoryList;