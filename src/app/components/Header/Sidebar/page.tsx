import { NavList } from "../Nav-list/page";

interface IPropsSidebar {
  active: boolean;
}

const Sidebar = ({ active }: IPropsSidebar) => {
  if (!active) {
    return null;
  }

  return (
    <aside className="absolute text-white rounded-sm bg-quaternary top-[17%]  right-1 md:none z-10 shadow-2xl shadow-gray-950">
      <div className="p-4">
        <NavList className="flex flex-col divide-y-[1px]" />
      </div>
    </aside>
  );
};

export { Sidebar };