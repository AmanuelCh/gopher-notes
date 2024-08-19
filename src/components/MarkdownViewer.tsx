import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useParams } from 'react-router-dom';

import { HoverEffect } from './ui/card-hover-effect';

const MarkdownViewer = () => {
  const { category, topic } = useParams();
  const [markdown, setMarkdown] = useState('');

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

  return (
    <div className='bg-slate-900 min-h-[100vh]'>
      <div className='w-11/12 mx-auto py-4 leading-relaxed '>
        <ReactMarkdown
          children={markdown}
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
          }}
        />

        <div className='px-8'>
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
};

export const projects = [
  {
    title: 'Stripe',
    description:
      'A technology company that builds economic infrastructure for the internet.',
  },
  {
    title: 'Netflix',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
  },
  {
    title: 'Google',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
  },
  {
    title: 'Meta',
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
  },
  {
    title: 'Amazon',
    description:
      'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
  },
  {
    title: 'Microsoft',
    description:
      'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
  },
];

export default MarkdownViewer;
