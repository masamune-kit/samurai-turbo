import { TableNavSkeleton } from '@samurai/ui';
import { ChevronLeftIcon, ChevronRightIcon } from '@samurai/ui/assets/icons';

type TableNavProps = {
  tokenIds: string[] | null;
  page: number;
  maxPage: number;
  handlePageChange: (action: 'prev' | 'next') => void;
};

const TableNav = ({ tokenIds, page, maxPage, handlePageChange }: TableNavProps): JSX.Element => {
  return (
    <>
      {tokenIds ? (
        <div className="mb-32 flex w-full items-center justify-between">
          <div className="text-16 font-bold text-secondary md:text-20">
            Your Nodes <span className="font-main text-gray">({tokenIds.length})</span>
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
