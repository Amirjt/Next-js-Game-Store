import { Button } from "@/components/ui/button";

const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-primary">Featured Product</h2>
      <select className="bg-gray-50 w-1/2 sm:w-full border border-gray-300 text-gray-900 text-sm rounded-xl block  p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue={"Category"}>Category</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
      <Button className="w-1/3">Save</Button>
    </div>
  );
};

export default SettingsPage;
