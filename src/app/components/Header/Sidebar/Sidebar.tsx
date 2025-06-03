import NavList from "../Hamburguer/Nav-list/NavList";

interface IPropsSidebar {
  active: boolean;
}

const Sidebar = ({ active }: IPropsSidebar) => {
  if (!active) {
    return null;
  }

  return (
    <aside className="absolute w-60 top-8 right-8 text-white rounded-sm bg-black_1  shadow-2xl shadow-gray-950 z-10">
      <div className="p-4">
        <NavList className="flex flex-col divide-y-[1px]" />
      </div>
    </aside>
  );
};

export { Sidebar };
