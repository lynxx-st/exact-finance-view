import { ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface GlassMetricCardProps {
  title: string
  amount: string
  change: string
  changeType: 'positive' | 'negative'
  icon: React.ReactNode
  gradient: string
}

const GlassMetricCard = ({ title, amount, change, changeType, icon, gradient }: GlassMetricCardProps) => {
  return (
    <Card className="p-6 backdrop-blur-xl bg-card/30 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group animate-slide-up">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
            {icon}
          </div>
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
            changeType === 'positive' 
              ? 'bg-success/20 text-success border border-success/30' 
              : 'bg-danger/20 text-danger border border-danger/30'
          }`}>
            {changeType === 'positive' ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            {change}
          </div>
        </div>
        
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {amount}
          </p>
        </div>
      </div>
    </Card>
  )
}

export default GlassMetricCard