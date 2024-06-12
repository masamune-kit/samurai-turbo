import Header from './headers';
import { GenericObjectType, TableColumn } from './interface';
import Row from './row';

type TableProps<T = GenericObjectType> = {
  rows: T[];
  columns: TableColumn<T>[];
};

const Table = <T,>({ rows, columns }: TableProps<T>) => (
  <div className="no-scrollbar flex w-full flex-col divide-y divide-white-darker overflow-x-scroll whitespace-nowrap md:overflow-x-hidden">
    <Header columns={columns} />
    {rows.map((singleRow, index) => (
      <Row key={index} rowData={singleRow} columns={columns} />
    ))}
  </div>
);

export { Table };
