import { useMemo } from 'react';
import { TableColumn } from '../components';

const useTableColumns = <T,>(columns: TableColumn<T>[]) => {
  const memoized = useMemo(() => {
    return columns;
  }, [columns]);

  return memoized;
};

export { useTableColumns };
