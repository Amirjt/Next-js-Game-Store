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

const CartTable = () => {
  return (
    <>
      <Table>
        <TableCaption>A list of your products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Game</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium w-full">
              Rainbow Six Siege
            </TableCell>
            <TableCell className="text-right">$243</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium w-full">
              Rainbow Six Siege
            </TableCell>
            <TableCell className="text-right">$243</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium w-full">
              Spider Man Miles Morals
            </TableCell>
            <TableCell className="text-right">$23</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};

export default CartTable;
