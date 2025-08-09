import { TrendingUp, Wallet, CreditCard, Target, DollarSign, PiggyBank } from 'lucide-react'
import ModernSidebar from './ModernSidebar'
import ModernHeader from './ModernHeader'
import GlassMetricCard from './GlassMetricCard'
import InteractiveCashflowChart from './InteractiveCashflowChart'
import ModernTransactionList from './ModernTransactionList'

const ModernDashboard = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <ModernSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <ModernHeader />
        
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Welcome Section */}
          <div className="space-y-2 animate-fade-in">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Good morning, John! 👋
            </h1>
            <p className="text-muted-foreground">Here's your financial overview for today</p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassMetricCard
              title="Total Balance"
              amount="$24,500"
              change="+12.5%"
              changeType="positive"
              icon={<Wallet className="w-5 h-5 text-white" />}
              gradient="from-primary to-primary/70"
            />
            <GlassMetricCard
              title="Monthly Income"
              amount="$8,200"
              change="+8.2%"
              changeType="positive"
              icon={<TrendingUp className="w-5 h-5 text-white" />}
              gradient="from-success to-success/70"
            />
            <GlassMetricCard
              title="Monthly Expenses"
              amount="$3,750"
              change="-5.1%"
              changeType="positive"
              icon={<CreditCard className="w-5 h-5 text-white" />}
              gradient="from-danger to-danger/70"
            />
            <GlassMetricCard
              title="Savings Goal"
              amount="$15,000"
              change="75%"
              changeType="positive"
              icon={<Target className="w-5 h-5 text-white" />}
              gradient="from-info to-info/70"
            />
          </div>

          {/* Charts and Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InteractiveCashflowChart />
            <ModernTransactionList />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl backdrop-blur-xl bg-card/30 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-success/20 to-success/10 border border-success/30">
                  <DollarSign className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-xl font-bold text-success">+$1,250</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl backdrop-blur-xl bg-card/30 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-info/20 to-info/10 border border-info/30">
                  <PiggyBank className="w-6 h-6 text-info" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Saved This Month</p>
                  <p className="text-xl font-bold text-info">$2,100</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl backdrop-blur-xl bg-card/30 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-warning/20 to-warning/10 border border-warning/30">
                  <Target className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Goal Progress</p>
                  <p className="text-xl font-bold text-warning">68%</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ModernDashboard