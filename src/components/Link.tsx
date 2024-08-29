const CustomLink = ({ className, ...props }) => {
  return (
    // adds custom "links" class for all links rendered in "MarkdownViewer" component
    <a
      className={`links ${className}`}
      {...props}
    />
  );
};

export default CustomLink;
