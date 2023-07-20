export function Container({ children }) {
  return (
    <div className="mx-auto min-w-[320px] max-w-[1820px] lg:flex lg:gap-4 lg:p-4 xl:gap-8 xl:px-8 xl:py-8">
      {children}
    </div>
  );
}
