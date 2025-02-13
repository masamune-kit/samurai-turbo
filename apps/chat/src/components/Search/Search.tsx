import { IconX } from '@tabler/icons-react';
import { FC } from 'react';

interface Props {
  placeholder: string;
  searchTerm: string;
  onSearch: (searchTerm: string) => void;
}
const Search: FC<Props> = ({ placeholder, searchTerm, onSearch }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const clearSearch = () => {
    onSearch('');
  };

  return (
    <div className="relative flex items-center">
      <input
        className="w-full flex-1 rounded-md border border-secondary/30 bg-white-dark px-10 py-8 pr-10 text-[14px] leading-3 text-secondary"
        type="text"
        placeholder={placeholder || ''}
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {searchTerm && (
        <IconX
          className="text-neutral-300 hover:text-neutral-400 absolute right-4 cursor-pointer"
          size={18}
          onClick={clearSearch}
        />
      )}
    </div>
  );
};

export default Search;
