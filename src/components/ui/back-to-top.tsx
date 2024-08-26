type Props = {};

const BackToTop = (props: Props) => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <button className='back-btn w-[50px] h-[50px] bg-slate-700 font-semibold flex items-center justify-center shadow-[0px_0px_0px_4px_rgba(180,160,255,0.253)] cursor-pointer duration-[0.3s] overflow-hidden relative rounded-[50%] border-[none] hover:w-[140px] hover:duration-[0.3s] hover:bg-[rgb(181,160,255)] hover:items-center hover:rounded-[50px] before:absolute before:content-["Back_to_Top"] before:text-[white] before:text-[0px] before:-bottom-5 hover:before:text-[13px] hover:before:opacity-100 hover:before:duration-[0.3s] hover:before:bottom-[unset] group' onClick={handleScroll}>
      <svg
        className='w-[12px] duration-300 group-hover:duration-300 group-hover:translate-y-[-200%] animate-pulse'
        viewBox='0 0 384 512'
      >
        <path
          d='M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z'
          fill='white'
        ></path>
      </svg>
    </button>
  );
};

export default BackToTop;
