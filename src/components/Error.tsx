import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='flex items-center justify-center h-[90vh] text-white'>
      The requested page doesn't exist. Try searching for topics or navigate
      back to{' '}
      <Link
        className='ml-1 underline text-blue-400'
        to='/'
      >
        home
      </Link>
    </div>
  );
};

export default Error;
