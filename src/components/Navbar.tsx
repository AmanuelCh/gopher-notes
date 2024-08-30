import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlaceholdersAndVanishInput } from './ui/input-component';
import { topics as topicsData } from '../utils/lists';

type Props = {
  isDark: boolean;
  handleDarkToggle: () => void;
};

const Navbar = ({ isDark, handleDarkToggle }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<
    { category: string; topic: string }[]
  >([]);
  const [displayedResults, setDisplayedResults] = useState<
    { category: string; topic: string }[]
  >([]);
  const [maximumSearchResult, setMaximumSearchResult] = useState(8);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    !searchTerm && setMaximumSearchResult(8);

    const searchQuery = e.target.value.toLowerCase();

    // Perform search
    const filteredTopics: { category: string; topic: string }[] = [];

    for (const category in topicsData) {
      // @ts-expect-error
      const topics = topicsData[category];
      for (const topic of topics) {
        if (topic.toLowerCase().includes(searchQuery)) {
          filteredTopics.push({ category, topic });
        }
      }
    }

    setSearchResults(filteredTopics);
    setDisplayedResults(filteredTopics.slice(0, maximumSearchResult)); // Limit results to specified max search result
  };
  const onLinkClick = (e: FormEvent) => {
    e.preventDefault();
    setSearchTerm('');
    setSearchResults([]);
    setMaximumSearchResult(8);
  };
  const handleShowMore = () => {
    setMaximumSearchResult(maximumSearchResult + 5);
    setDisplayedResults(searchResults.slice(0, maximumSearchResult));
  };

  return (
    <div className='container mx-auto px-4 py-1'>
      <div className='flex flex-col justify-between mt-6 gap-12 md:flex-row md:items-center md:gap-24 dark:text-neutral-300'>
        <div className='flex items-center justify-between'>
          <Link
            to='/'
            className='text-xl'
          >
            Gopher.
          </Link>

          <div className='flex items-center gap-8 md:hidden'>
            <button className='bookmarkBtn'>
              <span className='IconContainer'>
                <svg
                  viewBox='0 0 384 512'
                  height='0.9em'
                  className='icon'
                >
                  <path d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'></path>
                </svg>
              </span>
              <p className='text'>Saved</p>
            </button>

            <div className='md:hidden'>
              <label className='switch'>
                <input
                  type='checkbox'
                  checked={isDark}
                  onChange={handleDarkToggle}
                />
                <span className='slider'></span>
              </label>
            </div>
          </div>
        </div>

        <div className='w-full relative'>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onLinkClick}
          />
          {searchTerm ? (
            <div className='text-white absolute left-1/2 -translate-x-1/2 mt-3 py-5 px-8 tracking-wide leading-loose w-11/12 lg:w-[70%] rounded-md z-40 bg-zinc-800'>
              {displayedResults.length > 0 ? (
                <div>
                  <ul>
                    {displayedResults.map((result) => (
                      <li
                        key={`${result.category}-${result.topic}`}
                        onClick={(e: FormEvent) => onLinkClick(e)}
                      >
                        <Link
                          to={`/${result.category.replaceAll('_', '-')}/${
                            result.topic
                          }`}
                        >
                          <span>{result.category.replaceAll('_', '-')}</span>/
                          <span>{result.topic.replaceAll('-', ' ')}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {searchResults.length > 9 ? (
                    <button
                      className='mt-2 text-blue-400 underline'
                      onClick={handleShowMore}
                    >
                      Show more
                    </button>
                  ) : null}
                </div>
              ) : (
                <p>No matching topics found.</p>
              )}
            </div>
          ) : null}
        </div>

        <div className='gap-8 hidden md:flex'>
          <div>
            <button className='bookmarkBtn'>
              <span className='IconContainer'>
                <svg
                  viewBox='0 0 384 512'
                  height='0.9em'
                  className='icon'
                >
                  <path d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'></path>
                </svg>
              </span>
              <p className='text'>Saved</p>
            </button>
          </div>

          <div className='hidden md:block'>
            <label className='switch'>
              <input
                type='checkbox'
                checked={isDark}
                onChange={handleDarkToggle}
              />
              <span className='slider'></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export const placeholders = [
  'Which Type to Use',
  'Function Declaration Syntax',
  'Nested Structs',
  'Type Assertion',
  'Formatting Strings',
  'Pointers',
  'Mutexes',
];

export default Navbar;
