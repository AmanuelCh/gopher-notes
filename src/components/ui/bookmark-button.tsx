type Props = {
  text: string;
  onBookmark: () => void;
};

const BookmarkButton = ({ text, onBookmark }: Props) => {
  return (
    <button
      className='btn group bg-neutral-800 hover:bg-neutral-700'
      onClick={onBookmark}
    >
      <span className='absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-24'></span>
      <div className='flex items-center justify-center gap-3'>
        <svg
          viewBox='0 0 384 512'
          height='0.9em'
          className='icon'
          fill='white'
        >
          <path d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'></path>
        </svg>
        <span className='text-white text-[12px]'>{text}</span>
      </div>
    </button>
  );
};

export default BookmarkButton;
