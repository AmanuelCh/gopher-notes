import { Link, useParams } from 'react-router-dom';
import { PlaceholdersAndVanishInput } from './ui/input-component';

type Props = {
  handleDarkToggle: () => void;
};

const Navbar = ({ handleDarkToggle }: Props) => {
  const placeholders = [
    'Which Type to Use',
    'Function Declaration Syntax',
    'Named Returns',
    'Nested Structs',
    'Type Assertion',
    'Formatting Strings',
    'Pointers',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
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
                  onClick={handleDarkToggle}
                />
                <span className='slider'></span>
              </label>
            </div>
          </div>
        </div>

        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />

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
                onClick={handleDarkToggle}
              />
              <span className='slider'></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
