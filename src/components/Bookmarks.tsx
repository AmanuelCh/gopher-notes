import { Link, useNavigate } from 'react-router-dom';
import SEO from './SEO';
import Breadcrumb from './ui/breadcrumb';

type Props = {
  bookmarkedTopics: { link: string }[];
  setBookmarkedTopics: React.Dispatch<
    React.SetStateAction<
      {
        link: string;
      }[]
    >
  >;
};

const Bookmarks = ({ bookmarkedTopics, setBookmarkedTopics }: Props) => {
  const navigate = useNavigate();

  // handle clearing bookmark
  const handleClearBookmark = () => {
    if (!bookmarkedTopics.length) {
      navigate('/');
    }

    setBookmarkedTopics([]);
  };

  return (
    <div className='container mx-auto py-1 leading-relaxed pb-12 dark:text-neutral-300 max-w-3xl mt-12 w-11/12'>
      <SEO
        title='Bookmarks | Gopher notes'
        description='View your bookmarks | Gopher notes'
        name='Amanuel Chaka'
        type='article'
      />
      <div>
        <Breadcrumb category='bookmarks' />
      </div>

      <div className='my-10 z-50 flex items-center justify-between'>
        <h1 className='mt-0'>Bookmarks</h1>
        <p
          className='py-2 px-4 btn'
          onClick={() => handleClearBookmark()}
        >
          {bookmarkedTopics.length ? 'Clear' : 'Add bookmarks'}
        </p>
      </div>

      <ul className='grid md:grid-cols-2 gap-6 list-none'>
        {bookmarkedTopics.length
          ? bookmarkedTopics.map((bookmark, idx) => (
              <Link
                className='capitalize text-xl py-5 group card'
                to={bookmark.link}
                key={idx}
              >
                <span>
                  {' '}
                  {bookmark.link
                    .replace('/', '')
                    .slice(bookmark.link.indexOf('/', 1))
                    .replaceAll('-', ' ')}
                </span>
                <Link
                  to={`/${bookmark.link
                    .replace('/', '')
                    .slice(0, bookmark.link.indexOf('/', 1))
                    .replaceAll('/', '')}`}
                  className='block mt-5 text-sm text-blue-700 dark:text-blue-300 cursor-pointer w-max'
                >
                  #
                  {bookmark.link
                    .replace('/', '')
                    .slice(0, bookmark.link.indexOf('/', 1))
                    .replaceAll('/', '')
                    .replaceAll('-', ' ')}
                </Link>
              </Link>
            ))
          : null}
      </ul>
      {!bookmarkedTopics.length ? (
        <p className='flex items-center justify-center mt-24 w-full text-center'>
          You don't have any bookmarks yet.{' '}
        </p>
      ) : null}
    </div>
  );
};

export default Bookmarks;
