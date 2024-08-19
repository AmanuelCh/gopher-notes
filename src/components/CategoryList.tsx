import { Link } from 'react-router-dom';

const categories = [
  { name: 'Intro', path: '/intro' },
  { name: 'Variables', path: '/variables' },
];

const CategoryList = () => {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <Link to={category.path}>{category.name.split('-').join(' ')}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
