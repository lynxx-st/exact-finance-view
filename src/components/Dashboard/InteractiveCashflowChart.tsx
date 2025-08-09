import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { CalendarDays, BarChart3 } from 'lucide-react'

const InteractiveCashflowChart = () => {
  const [timeRange, setTimeRange] = useState('7d')
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)

  const chartData = [
    { day: 'Mon', income: 2500, expense: 1200, date: 'Jan 8' },
    { day: 'Tue', income: 1800, expense: 800, date: 'Jan 9' },
    { day: 'Wed', income: 3200, expense: 1500, date: 'Jan 10' },
    { day: 'Thu', income: 2100, expense: 900, date: 'Jan 11' },
    { day: 'Fri', income: 4100, expense: 2200, date: 'Jan 12' },
    { day: 'Sat', income: 1600, expense: 600, date: 'Jan 13' },
    { day: 'Sun', income: 2800, expense: 1100, date: 'Jan 14' },
  ]

  const maxValue = Math.max(...chartData.flatMap(d => [d.income, d.expense]))
  const totalIncome = chartData.reduce((sum, d) => sum + d.income, 0)
  const totalExpense = chartData.reduce((sum, d) => sum + d.expense, 0)

  return (
    <Card className="p-6 backdrop-blur-xl bg-card/30 border border-white/10 hover:border-white/20 transition-all duration-500">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Cash Flow</h3>
              <p className="text-sm text-muted-foreground">Income vs Expenses</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-24 bg-white/5 border-white/10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">7D</SelectItem>
                <SelectItem value="30d">30D</SelectItem>
                <SelectItem value="90d">90D</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="sm" className="bg-white/5 border-white/10">
              <CalendarDays className="w-4 h-4 mr-2" />
              Custom
            </Button>
          </div>
        </div>

        {/* Chart */}
        <div className="space-y-4">
          <div className="flex items-end justify-between h-64 gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
            {chartData.map((data, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 flex-1 cursor-pointer"
                onMouseEnter={() => setHoveredBar(index)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <div className="flex items-end gap-1 h-48 relative">
                  {/* Income Bar */}
                  <div
                    className={`bg-gradient-to-t from-success to-success/70 rounded-t-md w-6 transition-all duration-300 ${
                      hoveredBar === index ? 'shadow-lg shadow-success/50 scale-110' : ''
                    }`}
                    style={{ height: `${(data.income / maxValue) * 100}%` }}
                  />
                  {/* Expense Bar */}
                  <div
                    className={`bg-gradient-to-t from-danger to-danger/70 rounded-t-md w-6 transition-all duration-300 ${
                      hoveredBar === index ? 'shadow-lg shadow-danger/50 scale-110' : ''
                    }`}
                    style={{ height: `${(data.expense / maxValue) * 100}%` }}
                  />
                  
                  {/* Hover Tooltip */}
                  {hoveredBar === index && (
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 p-3 bg-background/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl animate-scale-in z-10">
                      <div className="text-xs text-center space-y-1">
                        <div className="font-medium">{data.date}</div>
                        <div className="text-success">Income: ${data.income.toLocaleString()}</div>
                        <div className="text-danger">Expense: ${data.expense.toLocaleString()}</div>
                      </div>
                    </div>
                  )}
                </div>
                <span className="text-xs text-muted-foreground font-medium">{data.day}</span>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gradient-to-br from-success to-success/70 rounded-full shadow-sm"></div>
              <span className="text-sm text-muted-foreground">Total Income</span>
              <span className="text-sm font-semibold text-success">${totalIncome.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gradient-to-br from-danger to-danger/70 rounded-full shadow-sm"></div>
              <span className="text-sm text-muted-foreground">Total Expense</span>
              <span className="text-sm font-semibold text-danger">${totalExpense.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default InteractiveCashflowChart