import { twMerge } from "tailwind-merge";
import Header from "../header";
import NavigationBar from "../NavigationBar";

const LayoutMain = ({ selected, children, className }) => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <div className="flex h-[85vh]">
        <NavigationBar selected={selected} />
        <main
          className={twMerge(
            "w-full min-h-full flex flex-col items-center justify-center p-10 gap-3",
            className
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default LayoutMain;
