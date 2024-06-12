import Cell from './cell';
import { GenericObjectType, TableColumn } from './interface';

type RowProps<T = GenericObjectType> = {
  columns: TableColumn<T>[];
  rowData: T;
};

const Row = <T,>({ columns, rowData }: RowProps<T>) => (
  <div className="md:max-w-full flex w-60rem items-center py-15 md:w-full">
    {columns.map((column, index) => (
      <Cell key={index} rowData={rowData} column={column} />
    ))}
  </div>
);

export default Row;
