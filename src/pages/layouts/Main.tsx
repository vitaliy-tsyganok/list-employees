export function Main({ children }) {
  return (
    <main className="flex flex-col bg-white lg:shrink-[2] lg:grow lg:basis-2/3">
      {children}
    </main>
  );
}
