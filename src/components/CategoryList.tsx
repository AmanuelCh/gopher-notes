import { categories } from '../utils/lists';
import { HoverEffect } from './ui/card-hover-effect';

const CategoryList = () => {
  return (
    <div className='container mx-auto px-4 py-1 dark:text-neutral-200'>
      <div className='mt-4 md:mt-10'>
        <HoverEffect items={categories} />
      </div>
    </div>
  );
};

export default CategoryList;
