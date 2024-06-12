// creates a 5x15 skeleton grid
const TableSkeleton = (): JSX.Element => (
  <div className="mx-auto my-1rem flex min-h-[600px] w-full items-center justify-center rounded-lg">
    <div className="flex animate-pulse flex-col md:flex-row">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <div key={i}>
            {Array(15)
              .fill(0)
              .map((_, j) => (
                <div key={j} className="m-25 w-200 rounded-lg bg-white-darker px-30 py-15" />
              ))}
          </div>
        ))}
    </div>
  </div>
);

export { TableSkeleton };
