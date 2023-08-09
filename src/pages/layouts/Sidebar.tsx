interface SidebarProps {
  children: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <aside className="mt-8 flex flex-col bg-white lg:mt-0 lg:shrink lg:grow-0 lg:basis-1/3">
      {children}
    </aside>
  );
}
