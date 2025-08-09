import { ArrowDown, ArrowUp, Tag, Filter, Square } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  amount: string;
  type: "positive" | "negative" | "sales" | "purchase" | "expense";
  trend?: "up" | "down";
}

const MetricCard = ({ title, amount, type, trend }: MetricCardProps) => {
  const getIcon = () => {
    switch (type) {
      case "positive":
        return <ArrowDown className="w-4 h-4" />;
      case "negative":
        return <ArrowUp className="w-4 h-4" />;
      case "sales":
        return <Tag className="w-4 h-4" />;
      case "purchase":
        return <Filter className="w-4 h-4" />;
      case "expense":
        return <Square className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getColors = () => {
    switch (type) {
      case "positive":
        return "bg-success-light text-success border-success/20";
      case "negative":
        return "bg-danger-light text-danger border-danger/20";
      case "sales":
        return "bg-success-light text-success border-success/20";
      case "purchase":
        return "bg-purchase-light text-purchase border-purchase/20";
      case "expense":
        return "bg-danger-light text-danger border-danger/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getAmountColor = () => {
    switch (type) {
      case "positive":
      case "sales":
        return "text-success";
      case "negative":
      case "expense":
        return "text-danger";
      case "purchase":
        return "text-purchase";
      default:
        return "text-foreground";
    }
  };

  return (
    <Card className="p-6 border border-border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-2">{title}</p>
          <p className={`text-2xl font-semibold ${getAmountColor()}`}>{amount}</p>
        </div>
        <div className={`p-3 rounded-xl ${getColors()}`}>
          {getIcon()}
        </div>
      </div>
    </Card>
  );
};

export default MetricCard;