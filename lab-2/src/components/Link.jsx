const Link = ({ href, target, children, ...props }) => {
  return <a href={href} target={target} {...props}>
    {children}
  </a>;
};

export default Link;
