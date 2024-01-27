import GameSingle from "@/components/GameSingle";
import MotionProvider from "@/providers/MotionProvider";

const ShopPage = () => {
  return (
    <MotionProvider>
      <div className="p-2 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="font-bold sm:text-2xl text-primary">All Games </h2>
          <div className="flex items-center gap-2">
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option defaultValue={"Choose a category"}>
                Choose a category
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option defaultValue={"Sort By"}>Sort By</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-7 gap-3">
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
        </div>
      </div>
    </MotionProvider>
  );
};

export default ShopPage;
