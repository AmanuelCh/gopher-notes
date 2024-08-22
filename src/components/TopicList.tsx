import { Link, useParams } from 'react-router-dom';

const TopicList = () => {
  const { category } = useParams<{ category: string }>();
  const topicList =
    topics[category?.replaceAll('-', '_') as keyof typeof topics] || [];

  return (
    <div className='container mx-auto px-4 py-1 dark:text-neutral-200'>
      {/* <Navbar /> */}

      <h1 className='z-50'>{category}</h1>
      <ul>
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

const topics = {
  intro: [
    'go-introduction',
    'compiling',
    'compiled-vs-interpreted',
    'go-memory-usage',
    'go-is-strongly-typed',
  ],
  setting_up_environment: ['installing-go-tools', 'packages', 'modules'],
  variables: ['basic-types', 'variable-types', 'constants'],
};

export default TopicList;
