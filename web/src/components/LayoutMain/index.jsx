import Header from "../header";
import NavigationBar from "../NavigationBar";

const LayoutMain = ({ selected, children }) => {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex">
        <NavigationBar selected={selected} />
        <main className="w-full h-full">{children}</main>
      </div>
    </div>
  );
};

export default LayoutMain;
