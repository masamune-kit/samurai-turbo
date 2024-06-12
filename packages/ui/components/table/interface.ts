export interface TableColumn<RowKey> {
  icon?: JSX.Element;
  align?: 'left' | 'center' | 'right';
  width: string;
  title: string;
  render: (selectedRowKey: RowKey) => React.ReactNode;
}

export type GenericObjectType = Record<string, unknown>;
