import React from 'react';

import './Button.css';

export function Button({click, children, refe, ...props}) {
  return (
    <button className="Button"  ref={refe} onClick={click} {...props}>
      {children}
    </button>
  );
}