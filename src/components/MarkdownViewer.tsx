import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate, useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import CustomLink from './Link';
import SEO from './SEO';
import GitHubButton from './ui/github-button';
import BookmarkButton from './ui/bookmark-button';
import Breadcrumb from './ui/breadcrumb';
import BackToTop from './ui/back-to-top';
import checkRoute from '../utils/checkRoute';
import { capitalizeWords } from '../utils/capitalizedWord';

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

const MarkdownViewer = ({ bookmarkedTopics, setBookmarkedTopics }: Props) => {
  const { category, topic } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [bookmarkExists, setBookmarkExists] = useState(false);

  const navigate = useNavigate();

  // check if route is valid
  checkRoute();

  useEffect(() => {
    // fetch markdown file from "data" directory based on the route path
    const fetchMarkdown = async () => {
      try {
        const module = await import(`../data/${category}/${topic}.md`);
        // get raw content of the markdown file
        setMarkdown(module.default);
      } catch (error) {
        console.error('Error fetching markdown:', error);
        navigate('/error');
      }
    };

    fetchMarkdown();
  }, [category, topic]);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  // show back-to-top btn
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // create a link to store in bookmark and check if it's bookmarked already
  const link = `/${category}/${topic}`;
  useEffect(() => {
    setBookmarkExists(
      bookmarkedTopics.some((bookmark) => bookmark.link === link)
    );
  }, [link]);

  // handle bookmarking items
  const handleBookmark = () => {
    // if bookmark exists, remove it
    if (bookmarkExists) {
      setBookmarkedTopics((bookmarkTopics) =>
        bookmarkTopics.filter((bookmark) => bookmark.link !== link)
      );
      setBookmarkExists(false);
      return;
    }

    const bookmarkTopic = { link };

    // add new bookmark
    setBookmarkedTopics((bookmarkedTopics) => [
      bookmarkTopic,
      ...bookmarkedTopics,
    ]);
    setBookmarkExists(true);
  };

  return (
    <div className='min-h-[100vh]'>
      <SEO
        title={`${capitalizeWords(topic!)} | Gopher Notes`}
        description={`${topic} | Dive deep to ${topic} in go.`}
        name='Amanuel Chaka'
        type='article'
      />
      <div className='container mx-auto py-1 leading-relaxed px-4 pb-28 dark:text-neutral-300'>
        <div className='max-w-3xl mx-auto mt-12 markdown-file flex flex-col gap-8'>
          <div>
            <Breadcrumb
              category={category}
              topic={topic}
            />
          </div>

          {/* render markdown with syntax highlighting */}
          <ReactMarkdown
            remarkPlugins={[[remarkGfm]]}
            components={{
              // @ts-expect-error
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    // @ts-expect-error
                    style={dracula}
                    language={match[1]}
                    PreTag='div'
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    className={className}
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              // @ts-expect-error
              a: CustomLink,
            }}
          >
            {markdown}
          </ReactMarkdown>

          <div className='flex items-end justify-end w-full'>
            {!isLoading ? (
              <div className='flex gap-6'>
                <BookmarkButton
                  text={`${
                    bookmarkExists ? 'Remove bookmark' : 'Bookmark topic'
                  }`}
                  onBookmark={handleBookmark}
                />
                <GitHubButton
                  to={`https://github.com/AmanuelCh/gopher-notes/blob/main/src/data/${category}/${topic}.md`}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className='fixed bottom-8 right-4 lg:right-10'>
        {isVisible ? <BackToTop /> : null}
      </div>
    </div>
  );
};

export default MarkdownViewer;
