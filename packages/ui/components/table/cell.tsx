import cn from 'classnames';
import { GenericObjectType, TableColumn } from './interface';

type CellProps<T = GenericObjectType> = {
  column: TableColumn<T>;
  rowData: T;
};

const Cell = <T,>({ rowData, column }: CellProps<T>) => (
  <div
    className={cn(
      'no-scrollbar flex overflow-x-scroll whitespace-nowrap py-2',
      {
        'justify-start': !column.align || column.align === 'left',
        'justify-center': column.align === 'center',
        'justify-end': column.align === 'right',
      },
      column.width
    )}
  >
    {column.render(rowData)}
  </div>
);

export default Cell;
