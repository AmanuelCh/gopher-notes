import { Link, useParams } from 'react-router-dom';
import { topics } from '../utils/lists';
import Breadcrumb from './ui/breadcrumb';

const TopicList = () => {
  const { category } = useParams<{ category: string }>();
  const topicList =
    topics[category?.replaceAll('-', '_') as keyof typeof topics] || [];

  return (
    <div className='container mx-auto py-1 leading-relaxed pb-12 dark:text-neutral-300 max-w-3xl mt-12 w-11/12'>
      <div>
        {' '}
        <Breadcrumb category={category} />
      </div>

      <h1 className='my-6 z-50'>{category?.replaceAll('-', ' ')}</h1>
      <ul className='grid md:grid-cols-3 gap-6 list-none'>
        {topicList.map((topic) => (
          <li
            className='card'
            key={topic}
          >
            <Link to={`/${category}/${topic}`}>
              {topic.split('-').join(' ')}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
