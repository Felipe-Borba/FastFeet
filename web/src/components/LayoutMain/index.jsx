import Header from "../header";
import NavigationBar from "../NavigationBar";

const LayoutMain = ({ selected, children }) => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <div className="flex h-[85vh]">
        <NavigationBar selected={selected} />
        <main className="w-full min-h-full flex items-center justify-center">
          {children}
        </main>
      </div>
    </div>
  );
};

export default LayoutMain;
