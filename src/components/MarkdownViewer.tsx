import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate, useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import CustomLink from './Link';
import SEO from './SEO';
import GitHubButton from './ui/github-button';
import Breadcrumb from './ui/breadcrumb';
import BackToTop from './ui/back-to-top';
import checkRoute from '../utils/checkRoute';
import { capitalizeWords } from '../utils/capitalizedWord';

const MarkdownViewer = () => {
  const { category, topic } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  checkRoute();

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const module = await import(`../data/${category}/${topic}.md`);
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

  return (
    <div className='min-h-[100vh]'>
      <SEO
        title={`${capitalizeWords(topic)} | Gopher Notes`}
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

          <ReactMarkdown
            remarkPlugins={[[remarkGfm]]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
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
              a: CustomLink,
            }}
          >
            {markdown}
          </ReactMarkdown>

          <div className='flex items-end justify-end w-full'>
            {!isLoading ? (
              <GitHubButton
                to={`https://github.com/AmanuelCh/gopher-notes/blob/main/src/data/${category}/${topic}.md`}
              />
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
