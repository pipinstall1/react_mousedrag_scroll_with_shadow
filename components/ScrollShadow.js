import React from 'react';
// import './ScrollShadow.css';
import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import { clsx } from 'clsx';

const ScrollShadow = ({ children, direction }) => {
  const scrollClass = `scrollcontainer scrollcontainer--${direction}`;
  const ref = useRef();
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  });

  return (
    <div
      {...events}
      ref={ref}
      className={clsx(
        scrollClass,
        'scrollbar-hide select-none',
        direction == 'vertical' ? 'w-max' : ''
      )}
    >
      <div className="scrollcontainer__content">{children}</div>
    </div>
  );
};

export default ScrollShadow;
