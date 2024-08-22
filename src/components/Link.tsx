const CustomLink = ({ className, ...props }) => {
  return (
    <a
      className={`links ${className}`}
      {...props}
    />
  );
};

export default CustomLink;
