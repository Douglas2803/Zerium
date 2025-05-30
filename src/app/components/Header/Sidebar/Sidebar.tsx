import NavList from "../Hamburguer/Nav-list/NavList";

interface IPropsSidebar {
  active: boolean;
}

const Sidebar = ({ active }: IPropsSidebar) => {
  if (!active) {
    return null;
  }

  return (
<<<<<<< HEAD:src/app/components/Header/Sidebar/page.tsx
    <aside className="absolute w-60 top-8 right-8 text-white rounded-sm bg-black_1  shadow-2xl shadow-gray-950 z-10">
=======
    <aside className="absolute text-white rounded-sm bg-black_1 top-[1%] right-[2%] md:right-[10%] xl:right-[10%] 8xl:right-[15%] md:none shadow-2xl shadow-gray-950 z-10">
>>>>>>> develop:src/app/components/Header/Sidebar/Sidebar.tsx
      <div className="p-4">
        <NavList className="flex flex-col divide-y-[1px]" />
      </div>
    </aside>
  );
};

export { Sidebar };
