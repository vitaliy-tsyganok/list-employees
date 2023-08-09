interface MainProps {
  children: React.ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <main className="flex flex-col bg-white lg:shrink-[2] lg:grow lg:basis-2/3">
      {children}
    </main>
  );
}
