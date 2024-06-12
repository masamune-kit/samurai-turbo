import { useEffect, useState } from 'react';

const useCountdown = (initial: number) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    const interval = setInterval(() => {
      const newCount = count - 1;

      setCount(newCount === 0 ? 60 : newCount);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return count;
};

export { useCountdown };
