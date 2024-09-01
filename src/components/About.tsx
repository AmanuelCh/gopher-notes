import { Link } from 'react-router-dom';
import SEO from './SEO';
import Breadcrumb from './ui/breadcrumb';

const About = () => {
  return (
    <div className='wrapper'>
      <SEO
        title='About | Gopher notes'
        description='About gopher notes website. Gopher notes provide go programming language notes and exercises.'
        name='Amanuel Chaka'
        type='article'
      />

      <div>
        <Breadcrumb category='about' />
      </div>

      <h1 className='my-10'>About</h1>

      <div className='space-y-8'>
        <p>
          Gopher notes is an archive of Go notes found online and across open
          source materials. It's developed under the intention of helping
          aspiring Go developers. If it's your first time using the guide, read
          the{' '}
          <Link
            to='/intro/requirements'
            className='underline text-blue-300'
          >
            requirements section
          </Link>{' '}
          and go over the{' '}
          <Link
            to='/intro'
            className='underline text-blue-300'
          >
            intro part
          </Link>
          .
        </p>
        <p>
          The contents may subject to the respective authors and License. It's
          free for personal use but prohibited to publish the contents neither
          for commercial use nor if it falls outside of the original authors'
          permission.
        </p>
        <p className='text-center text-sm pt-4'>
          Developed with ♥ by{' '}
          <a
            href='https://github.com/AmanuelCh'
            className='text-blue-300'
            target='_blank'
          >
            Amanuel Chaka
          </a>
          . <span className='block pt-2'>Gopher Notes, 2024</span>
        </p>
      </div>
    </div>
  );
};

export default About;
