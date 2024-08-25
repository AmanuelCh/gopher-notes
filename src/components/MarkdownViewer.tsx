import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import CustomLink from './Link';
import GitHubButton from './ui/github-button';

const MarkdownViewer = () => {
  const { category, topic } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const module = await import(`../data/${category}/${topic}.md`);
        setMarkdown(module.default);
      } catch (error) {
        console.error('Error fetching markdown:', error);
      }
    };

    fetchMarkdown();
  }, [category, topic]);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <div className='min-h-[100vh]'>
      <div className='container mx-auto py-1 leading-relaxed px-4 pb-12 dark:text-neutral-300'>
        <div className='max-w-3xl mx-auto mt-12 markdown-file flex flex-col gap-8'>
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
                to={`https://github.com/AmanuelCh/gopher-notes/src/data/${category}/${topic}.md`}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownViewer;
