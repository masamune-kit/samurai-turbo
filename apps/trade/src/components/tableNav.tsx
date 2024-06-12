import { TableNavSkeleton } from '@samurai/ui';
import { ChevronLeftIcon, ChevronRightIcon } from '@samurai/ui/assets/icons';
import cn from 'classnames';

type TableNavProps = {
  tokenIds: string[] | null;
  page: number;
  maxPage: number;
  handlePageChange: (action: 'prev' | 'next') => void;
  mode: 'BUY' | 'SELL';
  handleSetMode: (mode: 'BUY' | 'SELL') => void;
  handleSelectAll: () => void;
};

const TableNav = ({
  tokenIds,
  page,
  maxPage,
  handlePageChange,
  mode,
  handleSetMode,
  handleSelectAll,
}: TableNavProps): JSX.Element => {
  return (
    <>
      {tokenIds ? (
        <div className="flex w-full flex-col items-center justify-between space-y-2rem py-20 md:flex-row md:space-y-0 md:px-20">
          <div className="w-full max-w-300 text-16 font-bold text-secondary md:text-20">
            {mode === 'SELL' ? 'Your Nodes' : 'Available Nodes'}{' '}
            <span className="text-gray">
              ({tokenIds.length}
              {mode === 'BUY' && '+'})
            </span>
          </div>

          <div className="flex space-x-1rem md:space-x-3rem">
            <div className="flex space-x-10 divide-x font-bold">
              <div
                className={cn('cursor-pointer', {
                  'text-secondary': mode === 'BUY',
                })}
                onClick={() => handleSetMode('BUY')}
              >
                BUY
              </div>
              <div
                className={cn('cursor-pointer pl-10', {
                  'text-secondary': mode === 'SELL',
                })}
                onClick={() => handleSetMode('SELL')}
              >
                SELL
              </div>
            </div>
            <div
              className="cursor-pointer font-bold transition duration-500 ease-in-out hover:text-secondary"
              onClick={handleSelectAll}
            >
              SELECT ALL
            </div>
          </div>

          <div className="flex items-center space-x-1rem">
            <div
              className="cursor-pointer p-3 transition duration-300 hover:text-secondary"
              onClick={() => handlePageChange('prev')}
            >
              <ChevronLeftIcon />
            </div>
            <div className="font-bold text-secondary">
              {page}/{maxPage}
            </div>
            <div
              className="cursor-pointer p-3 transition duration-300 hover:text-secondary"
              onClick={() => handlePageChange('next')}
            >
              <ChevronRightIcon />
            </div>
          </div>
        </div>
      ) : (
        <TableNavSkeleton />
      )}
    </>
  );
};

export default TableNav;
