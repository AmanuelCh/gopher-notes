import SEO from './SEO';
import Breadcrumb from './ui/breadcrumb';

type Props = {};

const About = (props: Props) => {
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
    </div>
  );
};

export default About;
