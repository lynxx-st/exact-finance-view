import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MoreHorizontal, ArrowUpRight, ArrowDownLeft, Repeat, FileText } from 'lucide-react'

const ModernTransactionList = () => {
  const [hoveredTransaction, setHoveredTransaction] = useState<number | null>(null)

  const transactions = [
    {
      id: 1,
      type: 'income',
      category: 'Salary',
      description: 'Monthly Salary Payment',
      amount: 5500,
      date: '2025-01-14',
      time: '09:30 AM',
      status: 'completed',
    },
    {
      id: 2,
      type: 'expense',
      category: 'Food & Dining',
      description: 'Lunch at Downtown Cafe',
      amount: 45,
      date: '2025-01-14',
      time: '12:15 PM',
      status: 'completed',
    },
    {
      id: 3,
      type: 'transfer',
      category: 'Savings',
      description: 'Transfer to Emergency Fund',
      amount: 1000,
      date: '2025-01-13',
      time: '03:45 PM',
      status: 'pending',
    },
    {
      id: 4,
      type: 'expense',
      category: 'Transportation',
      description: 'Uber ride to airport',
      amount: 78,
      date: '2025-01-13',
      time: '06:20 AM',
      status: 'completed',
    },
    {
      id: 5,
      type: 'income',
      category: 'Freelance',
      description: 'Web Development Project',
      amount: 2200,
      date: '2025-01-12',
      time: '11:00 AM',
      status: 'completed',
    },
  ]

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'income':
        return <ArrowDownLeft className="w-4 h-4 text-success" />
      case 'expense':
        return <ArrowUpRight className="w-4 h-4 text-danger" />
      case 'transfer':
        return <Repeat className="w-4 h-4 text-info" />
      default:
        return <FileText className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getAmountColor = (type: string) => {
    switch (type) {
      case 'income':
        return 'text-success'
      case 'expense':
        return 'text-danger'
      case 'transfer':
        return 'text-info'
      default:
        return 'text-foreground'
    }
  }

  const getTypeGradient = (type: string) => {
    switch (type) {
      case 'income':
        return 'from-success/20 to-success/10 border-success/30'
      case 'expense':
        return 'from-danger/20 to-danger/10 border-danger/30'
      case 'transfer':
        return 'from-info/20 to-info/10 border-info/30'
      default:
        return 'from-muted/20 to-muted/10 border-muted/30'
    }
  }

  return (
    <Card className="p-6 backdrop-blur-xl bg-card/30 border border-white/10 hover:border-white/20 transition-all duration-500">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
              <p className="text-sm text-muted-foreground">Last 5 transactions</p>
            </div>
          </div>
          
          <Button variant="outline" size="sm" className="bg-white/5 border-white/10">
            View All
          </Button>
        </div>

        <div className="space-y-3">
          {transactions.map((transaction, index) => (
            <div
              key={transaction.id}
              className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                hoveredTransaction === index
                  ? 'bg-white/10 border-white/20 scale-105 shadow-lg'
                  : 'bg-white/5 border-white/10 hover:bg-white/8'
              }`}
              onMouseEnter={() => setHoveredTransaction(index)}
              onMouseLeave={() => setHoveredTransaction(null)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br border ${getTypeGradient(transaction.type)}`}>
                    {getTransactionIcon(transaction.type)}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-foreground">{transaction.description}</h4>
                      {transaction.status === 'pending' && (
                        <Badge variant="outline" className="text-xs bg-warning/20 text-warning border-warning/30">
                          Pending
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{transaction.category}</span>
                      <span>•</span>
                      <span>{transaction.date}</span>
                      <span>{transaction.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className={`font-semibold ${getAmountColor(transaction.type)}`}>
                      {transaction.type === 'expense' ? '-' : '+'}${transaction.amount.toLocaleString()}
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">
            Load More Transactions
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default ModernTransactionList