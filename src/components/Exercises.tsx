import React from 'react';

import { exercises } from '../utils/lists';

type Props = {};

const Exercises = (props: Props) => {
  return (
    <div className='text-white'>
      {exercises.map((exercise) => (
        <p className='my-4'>{exercise.difficulty}</p>
      ))}
    </div>
  );
};

export default Exercises;
