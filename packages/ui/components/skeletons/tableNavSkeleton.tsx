const TableNavSkeleton = (): JSX.Element => (
  <div className="flex w-full animate-pulse items-center justify-between py-20 md:px-20">
    <div className="h-30 w-190 rounded-md bg-white-darker" />
    <div className="h-30 w-120 rounded-md bg-white-darker" />
  </div>
);

export { TableNavSkeleton };
