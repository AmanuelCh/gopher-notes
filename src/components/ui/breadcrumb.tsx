import { Link } from 'react-router-dom';

type Props = {
  category: string | undefined;
  topic?: string;
};

const Breadcrumb = ({ category, topic }: Props) => {
  return (
    <nav className='flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-slate-200 md:w-max dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex flex-col gap-4 md:space-x-2 list-none pr-3 md:flex-row md:items-center md:gap-0'>
        <li className='flex items-center ml-[3px] md:ml-0'>
          <Link
            className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
            to='/'
          >
            <svg
              className='w-3 h-3 me-2.5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' />
            </svg>
            Home
          </Link>
        </li>
        <li>
          <div className='flex items-center'>
            <svg
              className='rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 9 4-4-4-4'
              />
            </svg>
            <Link
              className='ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white capitalize'
              to={`/${category}`}
            >
              {category?.replaceAll('-', ' ')}
            </Link>
          </div>
        </li>
        {topic ? (
          <li
            className='block md:flex'
            aria-current='page'
          >
            <div className='flex items-center'>
              <svg
                className='rtl:rotate-180  w-3 h-3 mx-1 text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 9 4-4-4-4'
                />
              </svg>
              <span className='ms-1 text-sm font-medium text-neutral-900 capitalize md:ms-2 dark:text-neutral-100'>
                {topic?.replaceAll('-', ' ')}
              </span>
            </div>
          </li>
        ) : null}
      </div>
    </nav>
  );
};

export default Breadcrumb;
