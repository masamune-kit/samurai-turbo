import { useCallback, useEffect, useRef, useState } from 'react';

export const useComponentVisible = (initialState: boolean) => {
  const [isVisible, setIsVisible] = useState(initialState);
  const ref = useRef<HTMLDivElement>(null);

  const toggleVisible = useCallback((value?: boolean) => {
    setIsVisible(value ?? ((visibility) => !visibility));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { ref, isVisible, toggleVisible };
};
