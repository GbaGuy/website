import { useEffect, useRef, MutableRefObject } from 'react';

export function useIntersectionObserver<T extends HTMLElement>(
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
): MutableRefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) callback(entry);
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [callback, options]);

  return ref;
}