import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CashflowChart = () => {
  const chartData = [
    { day: "Jan 1", moneyIn: 12, moneyOut: 8 },
    { day: "Jan 2", moneyIn: 8, moneyOut: 5 },
    { day: "Jan 3", moneyIn: 6, moneyOut: 4 },
    { day: "Jan 4", moneyIn: 18, moneyOut: 12 },
    { day: "Jan 5", moneyIn: 4, moneyOut: 15 },
    { day: "Jan 6", moneyIn: 14, moneyOut: 8 },
    { day: "Jan 7", moneyIn: 12, moneyOut: 6 },
  ];

  const maxValue = Math.max(...chartData.flatMap(d => [d.moneyIn, d.moneyOut]));

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">
          Cashflow <span className="text-muted-foreground text-sm">(Last 7 Days)</span>
        </h3>
        <Select defaultValue="daily">
          <SelectTrigger className="w-20">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {/* Y-axis labels */}
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          <span>0k</span>
          <span>5k</span>
          <span>10k</span>
          <span>15k</span>
          <span>20k</span>
        </div>

        {/* Chart */}
        <div className="flex items-end justify-between h-64 gap-4">
          {chartData.map((data, index) => (
            <div key={index} className="flex flex-col items-center gap-2 flex-1">
              <div className="flex items-end gap-1 h-48">
                <div
                  className="bg-success rounded-t w-4"
                  style={{ height: `${(data.moneyIn / maxValue) * 100}%` }}
                />
                <div
                  className="bg-danger rounded-t w-4"
                  style={{ height: `${(data.moneyOut / maxValue) * 100}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{data.day}</span>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span className="text-sm text-muted-foreground">Total Money In</span>
            <span className="text-sm font-medium text-success">Rs. 2,000</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-danger rounded-full"></div>
            <span className="text-sm text-muted-foreground">Total Money Out</span>
            <span className="text-sm font-medium text-danger">Rs. 1,000</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CashflowChart;