import React from 'react';

import './Button.css';

export function Button({click, children, ...props}) {
  return (
    <button className="Button"  onClick={click} {...props}>
      {children}
    </button>
  );
}