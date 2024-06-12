import { useCallback, useEffect, useState } from 'react';

const usePage = (tokenIds: string[] | null) => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    if (!tokenIds) {
      return;
    }

    const maxPage = Math.ceil(tokenIds.length / 20);
    setMaxPage(maxPage === 0 ? 1 : maxPage);
  }, [tokenIds]);

  const handlePageChange = useCallback(
    (action: 'prev' | 'next') => {
      if (!tokenIds) {
        return;
      }

      if (action === 'prev' && page - 1 > 0) {
        setPage((prev) => prev - 1);
      } else if (action === 'next' && page + 1 <= maxPage) {
        setPage((prev) => prev + 1);
      }
    },
    [maxPage, page, tokenIds]
  );

  return { page, maxPage, handlePageChange };
};

export { usePage };
