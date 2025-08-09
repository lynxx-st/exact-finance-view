import Header from "./Header";
import Sidebar from "./Sidebar";
import MetricCard from "./MetricCard";
import CashflowChart from "./CashflowChart";
import RecentTransactions from "./RecentTransactions";
import RightSidebar from "./RightSidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Welcome Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-foreground">Welcome Ram!</h1>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              <MetricCard
                title="To Receive"
                amount="Rs. 8,400"
                type="positive"
                trend="down"
              />
              <MetricCard
                title="To Give"
                amount="Rs. 1,530"
                type="negative"
                trend="up"
              />
              <MetricCard
                title="Sales (Month)"
                amount="Rs. 34,045"
                type="sales"
              />
              <MetricCard
                title="Purchase (Month)"
                amount="Rs. 45,000"
                type="purchase"
              />
              <MetricCard
                title="Expense (Month)"
                amount="Rs. 5,000"
                type="expense"
              />
            </div>

            {/* Charts and Tables Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CashflowChart />
              <RecentTransactions />
            </div>
          </div>
        </main>
      </div>

      <RightSidebar />
    </div>
  );
};

export default Dashboard;