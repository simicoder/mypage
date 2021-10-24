import React, { useEffect, useState, RefObject } from 'react';

export function useOnScreen(ref: RefObject<HTMLElement>, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      },
    );

    if (ref?.current) {
      observer.observe(ref.current);
      var observerRefValue = ref.current;
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}
