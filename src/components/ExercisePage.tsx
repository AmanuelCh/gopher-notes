import { useParams } from 'react-router-dom';
import SEO from './SEO';
import Breadcrumb from './ui/breadcrumb';
import { capitalizeWords } from '../utils/capitalizedWord';
import checkRoute from '../utils/checkRoute';
import { exercises } from '../utils/lists';

const ExercisePage = () => {
  const { difficulty } = useParams();

  checkRoute([difficulty!]);

  // get exercise of the chosen type
  const exercise = exercises.filter(
    (exercise) => exercise.difficulty.toLowerCase() === difficulty
  )[0];

  return (
    <div className='wrapper'>
      {' '}
      <SEO
        title={`${capitalizeWords(difficulty!)} Go Exercises | Gopher notes`}
        description={`${capitalizeWords(
          difficulty!
        )} Go programming language exercises. These exercises are for ${difficulty} Go programmers looking to enhance their skill or solidify ${difficulty} topics of the Go programming language.`}
        name='Amanuel Chaka'
        type='article'
      />
      <div>
        <Breadcrumb
          category='exercises'
          topic={difficulty}
        />
      </div>
      <h1 className='my-10'>{difficulty} Exercises</h1>
      <p className='mb-10'>{exercise.message}</p>
      <ol className='list-decimal list-inside space-y-6'>
        {exercise.exercises.map((levelExercise, idx) => (
          <li key={idx}>{levelExercise}</li>
        ))}
      </ol>
    </div>
  );
};

export default ExercisePage;
