import cn from 'classnames';
import { GenericObjectType, TableColumn } from './interface';

type HeaderProps<T = GenericObjectType> = {
  columns: TableColumn<T>[];
};

const Header = <T,>({ columns }: HeaderProps<T>) => (
  <div className="md:max-w-full flex w-60rem pb-20 md:w-full">
    {columns.map(({ align, width, title }, index) => (
      <div
        key={index}
        className={cn(
          'flex items-center text-gray',
          {
            'justify-start': !align || align === 'left',
            'justify-center': align === 'center',
            'justify-end': align === 'right',
          },
          width
        )}
      >
        {title}
      </div>
    ))}
  </div>
);

export default Header;
