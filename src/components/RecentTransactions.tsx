import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const RecentTransactions = () => {
  const transactions = [
    {
      date: "Oct 24, 2018",
      type: "Sales #1",
      party: "Sabin Thapa",
      amount: "Rs. 70,000",
      positive: true,
    },
    {
      date: "Oct 23, 2018",
      type: "Purchase #2",
      party: "ABC Suppliers",
      amount: "Rs. 25,000",
      positive: false,
    },
    {
      date: "Oct 22, 2018",
      type: "Sales #2",
      party: "John Doe",
      amount: "Rs. 15,000",
      positive: true,
    },
  ];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Recent Transaction</h3>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-muted-foreground">Date</TableHead>
            <TableHead className="text-muted-foreground">Transaction Type</TableHead>
            <TableHead className="text-muted-foreground">Party Name</TableHead>
            <TableHead className="text-muted-foreground">Total Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell className="text-sm">{transaction.date}</TableCell>
              <TableCell className="text-sm font-medium">{transaction.type}</TableCell>
              <TableCell className="text-sm">{transaction.party}</TableCell>
              <TableCell className={`text-sm font-semibold ${
                transaction.positive ? "text-success" : "text-danger"
              }`}>
                {transaction.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default RecentTransactions;