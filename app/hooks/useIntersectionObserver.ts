import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';

export default function useIntersectionObserver(setState: Dispatch<SetStateAction<string>>) {
  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          setState(entry.target.id);
        }
      });
    },
    [setState],
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.4,
      rootMargin: '-76px 0px 0px 0px',
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const headings = Array.from(document.querySelectorAll('h2, h3, h4'));

    headings.forEach((heading) => observer.observe(heading));

    return () => observer && observer.disconnect();
  }, [observerCallback]);
}
