import { Link, useParams } from 'react-router-dom';
import SEO from './SEO';
import { categories, topics } from '../utils/lists';
import Breadcrumb from './ui/breadcrumb';
import checkRoute from '../utils/checkRoute';
import { capitalizeWords } from '../utils/capitalizedWord';

const TopicList = () => {
  const { category } = useParams<{ category: string }>();

  checkRoute();

  const topicList =
    topics[category?.replaceAll('-', '_') as keyof typeof topics] || [];

  const descSEO = categories.filter((prevCategory) =>
    prevCategory.link.replace('/', '') === category
      ? prevCategory.description
      : null
  )[0].description;

  return (
    <div className='container mx-auto py-1 leading-relaxed pb-12 dark:text-neutral-300 max-w-3xl mt-12 w-11/12'>
      <SEO
        title={`${capitalizeWords(category!)} | Gopher notes`}
        description={descSEO}
        name='Amanuel Chaka'
        type='article'
      />

      <div>
        {' '}
        <Breadcrumb category={category} />
      </div>

      <h1 className='my-10 z-50'>{category?.replaceAll('-', ' ')}</h1>
      <ul className='grid md:grid-cols-2 gap-6 list-none'>
        {topicList.map((topic) => (
          <Link
            className='card'
            to={`/${category}/${topic}`}
            key={topic}
          >
            {topic.split('-').join(' ')}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
