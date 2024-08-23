import { HoverEffect } from './ui/card-hover-effect';

const CategoryList = () => {
  return (
    <div className='container mx-auto px-4 py-1 dark:text-neutral-200'>
      <div className='mt-4 md:mt-10'>
        <HoverEffect items={categories} />
      </div>
    </div>
  );
};

export const categories = [
  {
    title: 'Intro',
    description:
      'A technology company that builds economic infrastructure for the internet.',
    link: '/intro',
  },
  {
    title: 'Setting Up Environment',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: '/setting-up-environment',
  },
  {
    title: 'Variables and Types',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    link: '/variables-and-types',
  },
  {
    title: 'Functions',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: '/functions',
  },
  {
    title: 'Structs',
    description:
      'A technology company that builds economic infrastructure for the internet.',
    link: '/structs',
  },
  {
    title: 'Interfaces',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    link: '/interfaces',
  },
  {
    title: 'Errors',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: '/errors',
  },
  {
    title: 'Loops',
    description:
      'A technology company that builds economic infrastructure for the internet.',
    link: '/loops',
  },
  {
    title: 'Slices',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    link: '/slices',
  },
  {
    title: 'Maps',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: '/maps',
  },
  {
    title: 'Advanced Functions',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: '/advanced-functions',
  },
  {
    title: 'Pointers',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: '/pointers',
  },
  {
    title: 'Channels',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: '/channels',
  },
  {
    title: 'Mutexes',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: '/mutexes',
  },
  {
    title: 'Generics',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: '/generics',
  },
  {
    title: 'Go Facts',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: '/go-facts',
  },
];

export default CategoryList;
