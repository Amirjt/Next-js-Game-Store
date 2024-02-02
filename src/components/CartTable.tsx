"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Context } from "@/context/MainContext";
import { useContext } from "react";

const CartTable = () => {
  const { cart, setCart } = useContext(Context);

  const removeHandler = (id: any) => {
    setCart(cart.filter((item: any) => item._id !== id));
  };

  const total = cart?.reduce(
    (acc: any, product: any) => acc + +product.price,
    0
  );

  return (
    <>
      <Table>
        <TableCaption>A list of your products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Game</TableHead>
            <TableHead className="text-center">Amount</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart?.map((product: any) => (
            <TableRow>
              <TableCell className="font-medium w-full">
                {product.title}
              </TableCell>
              <TableCell className="text-center">${product.price}</TableCell>
              <TableCell
                className="text-center cursor-pointer"
                onClick={() => removeHandler(product._id)}
              >
                Remove
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">${total}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};

export default CartTable;
