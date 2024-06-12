import {
  RowDataType,
  Table,
  TableSkeleton,
  usePage,
  useParseRowData,
  useTableColumns,
  useTableStats,
} from '@samurai/ui';
import { ethers } from 'ethers';
import React from 'react';
import RpcModal from './rpcModal';
import TableNav from './tableNav';

type TableSectionProps = {
  contract: ethers.Contract;
  tokenIds: string[] | null;
};

const TableSection: React.FC<TableSectionProps> = ({ contract, tokenIds }) => {
  const { page, maxPage, handlePageChange } = usePage(tokenIds);
  const { tableStats, loading } = useTableStats(contract, tokenIds, page, 20);
  const { rowData, rpcIndex, hideRpcIndex } = useParseRowData(tableStats, contract);
  const columns = useTableColumns<RowDataType>([
    {
      title: 'Node Name',
      width: 'w-20rem',
      render: (row) => <span className="text-secondary">{row.name}</span>,
    },
    {
      title: 'Node Tier',
      width: 'w-10rem',
      align: 'center',
      render: (row) => row.tier,
    },
    {
      title: 'Rewards',
      width: 'w-20rem',
      align: 'right',
      render: (row) => row.rewards,
    },
    {
      title: 'Tax Rate',
      width: 'w-20rem',
      align: 'center',
      render: (row) => row.tax,
    },
    {
      title: 'Options',
      width: 'w-15rem',
      align: 'right',
      render: (row) => row.options,
    },
  ]);

  return (
    <div className="stat-box flex flex-col items-center justify-center p-48">
      <TableNav tokenIds={tokenIds} page={page} maxPage={maxPage} handlePageChange={handlePageChange} />
      {loading ? <TableSkeleton /> : rowData && <Table columns={columns} rows={rowData} />}
      {rowData && rpcIndex > -1 && <RpcModal tokenId={rowData[rpcIndex].id} hideRpcIndex={hideRpcIndex} />}
    </div>
  );
};

export default TableSection;
