import { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import {
  useTableStats,
  useParseRowData,
  useTableColumns,
  RowDataType,
  Table,
  TableSkeleton,
  usePage,
} from '@samurai/ui';
import { ethers } from 'ethers';
import TableNav from './tableNav';
import toast from 'react-hot-toast';

type TableSectionProps = {
  contract: ethers.Contract;
  tokenIds: string[] | null;
  selectedTokenIds: string[];
  setSelectedTokenIds: Dispatch<SetStateAction<string[]>>;
  mode: 'BUY' | 'SELL';
  handleSetMode: (mode: 'BUY' | 'SELL') => void;
};

const TableSection = ({
  tokenIds,
  contract,
  selectedTokenIds,
  setSelectedTokenIds,
  mode,
  handleSetMode,
}: TableSectionProps): JSX.Element => {
  const { page, maxPage, handlePageChange } = usePage(tokenIds);
  const { tableStats, loading } = useTableStats(contract, tokenIds, page, 20);
  const { rowData } = useParseRowData(tableStats, contract);
  const columns = useTableColumns<RowDataType>([
    {
      title: 'Node Name',
      width: 'w-20rem',
      render: (row) => row.name,
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
      title: 'Select',
      width: 'w-5rem',
      align: 'center',
      render: (row) => row.options,
    },
  ]);

  const handleCheckTokenId = useCallback(
    (checked: boolean, id: string) => {
      checked
        ? setSelectedTokenIds((oldArr) => [...oldArr, id])
        : setSelectedTokenIds((oldArr) => oldArr.filter((value) => value != id));
    },
    [setSelectedTokenIds]
  );

  const handleSelectAll = useCallback(() => {
    if (!tableStats.tokenIds) {
      return;
    }

    const uniqueIds = new Set([...selectedTokenIds, ...tableStats.tokenIds]);

    selectedTokenIds.length === 0
      ? setSelectedTokenIds(tableStats.tokenIds)
      : setSelectedTokenIds(Array.from(uniqueIds));

    toast.success('All NFTs in the current table are selected!');
  }, [selectedTokenIds, setSelectedTokenIds, tableStats.tokenIds]);

  const adjustedRowData = useMemo(() => {
    return rowData?.map((row) => {
      row.options = (
        <input
          type="checkbox"
          className="h-20 w-20 rounded border border-primary bg-primary bg-opacity-30 text-primary"
          onClick={(e) => handleCheckTokenId((e.target as any).checked, row.id)}
          checked={selectedTokenIds.includes(row.id)}
          // this is just to please the compiler
          onChange={() => {}}
        />
      );

      return row;
    });
  }, [handleCheckTokenId, rowData, selectedTokenIds]);

  return (
    <div className="stat-box flex flex-col items-center justify-center space-y-1rem p-20">
      <TableNav
        tokenIds={tokenIds}
        page={page}
        maxPage={maxPage}
        handlePageChange={handlePageChange}
        mode={mode}
        handleSetMode={handleSetMode}
        handleSelectAll={handleSelectAll}
      />
      {loading ? <TableSkeleton /> : adjustedRowData && <Table columns={columns} rows={adjustedRowData} />}
    </div>
  );
};

export default TableSection;
