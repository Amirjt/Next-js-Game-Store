import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AddNewUserPage = () => {
  return (
    <div>
      <h2 className="font-bold text-xl text-primary">Add new User</h2>
      <div className="mt-5 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Input placeholder="Name" type="text" required />
          <Input placeholder="Username" type="number" required />
        </div>
        <div className="flex items-center gap-3">
          <Input type="email" placeholder="Email" max={5} min={0} />
          <Input type="password" placeholder="Password" max={5} min={0} />
        </div>
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option defaultValue={"Role"}>Role</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <div className="flex flex-col gap-2">
          <label htmlFor="picture" className="text-sm pl-1">
            Select a Picture
          </label>
          <Input id="picture" type="file" max={5} min={0} />
        </div>
        <Button>Add</Button>
      </div>
    </div>
  );
};

export default AddNewUserPage;
