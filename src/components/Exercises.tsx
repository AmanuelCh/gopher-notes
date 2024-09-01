import { Link } from 'react-router-dom';
import SEO from './SEO';
import Breadcrumb from './ui/breadcrumb';
import { exercises } from '../utils/lists';

type Props = {};

const Exercises = (props: Props) => {
  return (
    <div className='wrapper'>
      <SEO
        title='Exercises | Gopher notes'
        description='Go programming language exercises categorized based on a skill level.'
        name='Amanuel Chaka'
        type='article'
      />

      <div>
        <Breadcrumb category='exercises' />
      </div>

      <h1 className='my-10'>Exercises</h1>

      <div className='grid md:grid-cols-2 gap-6'>
        {exercises.map((exercise, idx) => (
          <Link
            to={exercise.difficulty.toLowerCase()}
            className='card'
            key={idx}
          >
            {exercise.difficulty}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
