import CartTable from "@/components/CartTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MotionProvider from "@/providers/MotionProvider";


const CartPage = () => {
  return (
    <MotionProvider>
      <div className="flex flex-col gap-6 p-2 mt-20 mb-40">
        <h2 className="text-xl text-primary font-bold">Your Cart</h2>
        <div className=" flex flex-col sm:flex-row gap-10 justify-center sm:gap-20 sm:items-center">
          <div className="sm:w-1/2">
            <CartTable />
          </div>
          <div className="sm:w-1/3 p-4 bg-secondary rounded-xl shadow-2xl shadow-primary/40">
            <div className="flex flex-col gap-5">
              <h2 className="font-bold text-primary text-xl">
                Order Information
              </h2>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Name..."
                  required
                  className="border border-primary"
                />
                <Input
                  placeholder="Email..."
                  required
                  className="border border-primary"
                />
              </div>
              <Button>Pay</Button>
            </div>
          </div>
        </div>
      </div>
    </MotionProvider>
  );
};

export default CartPage;
