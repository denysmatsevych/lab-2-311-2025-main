import React from 'react'

const Typography = ({ variant, title, ...props }) => {
  const variants = {
    h1: <h1 {...props}>{title}</h1>,
    h2: <h2 {...props}>{title}</h2>,
    h3: <h3 {...props}>{title}</h3>,
    h4: <h4 {...props}>{title}</h4>,
    h5: <h5 {...props}>{title}</h5>,
    h6: <h6 {...props}>{title}</h6>,
    span: <span {...props}>{title}</span>,
    p: <p {...props}>{title}</p>,
    div: <div {...props}>{title}</div>,
  };

  if (variants[variant]) {
    return variants[variant];
  }

  return <>{variants['p']}</>;
}

export default Typography;