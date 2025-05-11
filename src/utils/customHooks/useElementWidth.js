import { useEffect, useRef } from 'react';

function useTrackWidth(callback) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !callback) return;

    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      callback(width);
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [callback]);

  return ref;
}

export default useTrackWidth;
