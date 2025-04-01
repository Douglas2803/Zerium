import NavList from "../Hamburguer/Nav-list/NavList";

interface IPropsSidebar {
  active: boolean;
}

const Sidebar = ({ active }: IPropsSidebar) => {
  if (!active) {
    return null;
  }

  return (
    <aside className="absolute text-white rounded-sm bg-black_1 top-[17%]  right-[2%] md:right-[10%] xl:right-[10%] 8xl:right-[15%]  md:none z-10 shadow-2xl shadow-gray-950">
      <div className="p-4">
        <NavList className="flex flex-col divide-y-[1px]" />
      </div>
    </aside>
  );
};

export { Sidebar };
