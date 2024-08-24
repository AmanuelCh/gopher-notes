import { Link, useParams } from 'react-router-dom';
import { topics } from '../utils/lists';

const TopicList = () => {
  const { category } = useParams<{ category: string }>();
  const topicList =
    topics[category?.replaceAll('-', '_') as keyof typeof topics] || [];

  return (
    <div className='container mx-auto px-4 py-1 dark:text-neutral-200'>
      <h1 className='z-50'>{category}</h1>
      <ul className='list-none'>
        {topicList.map((topic) => (
          <li key={topic}>
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
