import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useClickAway } from '@uidotdev/usehooks';
import { PlaceholdersAndVanishInput } from './ui/input-component';
import { topics as topicsData } from '../utils/lists';
import {
  AlignRight,
  LucideBookCheck,
  BookmarkCheckIcon,
  User,
  X,
} from 'lucide-react';
import { useKey } from '../hooks/useKey';

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
  const [searchIndex, setSearchIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
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

    // keep search results to show more results
    setSearchResults(filteredTopics);
    setDisplayedResults(filteredTopics.slice(0, maximumSearchResult)); // Limit results to specified max search result
    setSearchIndex(0);
  };
  // handle input submit
  const onLinkClick = (e: FormEvent) => {
    e.preventDefault();

    // navigate to the first search result
    navigate(
      `${displayedResults[searchIndex].category.replaceAll('_', '-')}/${
        displayedResults[searchIndex].topic
      }`
    );

    setSearchTerm('');
    setSearchResults([]);
    setSearchIndex(0);
    setMaximumSearchResult(8);
  };
  const handleShowMore = () => {
    // increase displayed search result
    setMaximumSearchResult(maximumSearchResult + 5);
    setDisplayedResults(searchResults.slice(0, maximumSearchResult));
  };
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  // close modal and search window when clicked outside
  const modalRef = useClickAway(() => {
    setIsModalOpen(false);
  });
  const searchRef = useClickAway(() => {
    setSearchTerm('');
    setSearchResults([]);
    setSearchIndex(0);
  });

  // handle interaction on search window
  useKey('arrowdown', () => {
    if (searchIndex > displayedResults.length - 2) {
      setSearchIndex(0);
      return;
    }
    if (searchTerm) setSearchIndex(searchIndex + 1);
  });
  useKey('arrowup', () => {
    if (searchIndex < 1) {
      setSearchIndex(displayedResults.length - 1);
      return;
    }
    if (searchTerm) setSearchIndex(searchIndex - 1);
  });

  // document.addEventListener('keydown', (e) => {
  //   console.log(e.code.toLowerCase());
  // });

  return (
    <div className='container mx-auto px-4 py-1 relative'>
      <div className='flex flex-col justify-between mt-6 gap-12 md:flex-row md:items-center md:gap-24 dark:text-neutral-300'>
        <div className='flex items-center justify-between'>
          <Link
            to='/'
            className='text-xl'
          >
            Gopher.
          </Link>

          <div className='flex items-center gap-8 md:hidden'>
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
            <div>
              {!isModalOpen ? (
                <AlignRight
                  className='cursor-pointer'
                  onClick={handleModalOpen}
                />
              ) : (
                <X className='cursor-pointer' />
              )}
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
            <div
              className='text-white absolute left-1/2 -translate-x-1/2 mt-3 py-5 px-8 tracking-wide leading-loose w-11/12 rounded-md z-40 bg-zinc-800'
              // @ts-expect-error
              ref={searchRef}
            >
              {displayedResults.length > 0 ? (
                <div>
                  <ul>
                    {displayedResults.map((result, idx) => (
                      <li
                        className={`${
                          searchIndex === idx ? 'text-blue-400' : ''
                        }`}
                        onClick={(e: FormEvent) => onLinkClick(e)}
                        key={idx}
                      >
                        <Link
                          className='font-mono'
                          to={`/${result.category.replaceAll('_', '-')}/${
                            result.topic
                          }`}
                        >
                          <span>{result.category.replaceAll('_', ' ')}</span> /{' '}
                          <span>{result.topic.replaceAll('-', ' ')}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {searchResults.length > 7 ? (
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
        <div className='gap-8 hidden md:flex items-center'>
          <div>
            {' '}
            <Link
              className='flex items-center gap-2 group'
              to='/exercises'
            >
              <span className=''>Exercises</span>{' '}
              <span className='text-sm group-hover:animate-spin'>📚</span>
            </Link>
          </div>
          <div>
            {' '}
            <Link
              className='flex items-center gap-2 group'
              to='/about'
            >
              <span className=''>About</span>{' '}
              <span className='text-sm mt-[1px] group-hover:animate-spin'>
                💡
              </span>
            </Link>
          </div>

          <div>
            <Link
              className='bookmarkBtn'
              to='/bookmarks'
            >
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
            </Link>
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

        {isModalOpen ? (
          <div
            className='absolute right-4 mx-auto top-20 py-4 px-6 z-50  rounded-lg w-[60%] bg-slate-800 text-slate-50 dark:bg-slate-900 dark:text-slate-200 drop-shadow-xl md:hidden'
            // @ts-expect-error
            ref={modalRef}
          >
            <div className='flex flex-col gap-6'>
              <Link
                className='flex gap-3'
                to='/exercises'
                onClick={handleModalOpen}
              >
                <span>
                  <LucideBookCheck className='text-slate-400 w-5' />
                </span>{' '}
                Exercises
              </Link>
              <Link
                className='flex gap-3'
                to='/bookmarks'
                onClick={handleModalOpen}
              >
                <span>
                  <BookmarkCheckIcon className='text-slate-400 w-5' />
                </span>
                Saved
              </Link>
              <Link
                className='flex gap-3'
                to='/about'
                onClick={handleModalOpen}
              >
                <span>
                  <User className='text-slate-400 w-5' />
                </span>
                About
              </Link>
            </div>
          </div>
        ) : null}
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
