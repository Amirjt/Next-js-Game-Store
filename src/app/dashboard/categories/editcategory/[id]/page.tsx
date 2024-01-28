import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EditCategoryPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-primary text-xl">Editing category</h2>
      <Input placeholder="Category name" type="text" required />
      <Button>Update</Button>
    </div>
  );
};

export default EditCategoryPage;
