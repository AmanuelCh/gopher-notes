import { Link, useParams } from 'react-router-dom';

const topics = {
  intro: ['what-is-go', 'setting-up-go', 'basic-syntax'],
  variables: ['declaring-variables', 'variable-types', 'constants'],
};

const TopicList = () => {
  const { category } = useParams<{ category: string }>();
  const topicList = topics[category as keyof typeof topics] || [];

  return (
    <div>
      <h1>{category}</h1>
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

export default TopicList;
