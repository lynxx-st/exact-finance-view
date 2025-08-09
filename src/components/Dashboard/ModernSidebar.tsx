import { useState } from 'react'
import { LayoutDashboard, TrendingUp, CreditCard, Settings, LogOut, Plus, Wallet, PieChart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { toast } from '@/hooks/use-toast'

const ModernSidebar = () => {
  const [activeItem, setActiveItem] = useState('dashboard')
  const { user, signOut } = useAuth()

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'transactions', icon: CreditCard, label: 'Transactions' },
    { id: 'analytics', icon: PieChart, label: 'Analytics' },
    { id: 'budgets', icon: Wallet, label: 'Budgets' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ]

  const handleSignOut = async () => {
    const { error } = await signOut()
    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to sign out',
        variant: 'destructive'
      })
    }
  }

  return (
    <div className="w-72 h-screen bg-gradient-to-b from-background/90 to-background/80 backdrop-blur-xl border-r border-white/10 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center shadow-lg">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              FinanceFlow
            </h1>
            <p className="text-xs text-muted-foreground">Personal Finance</p>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20">
            <span className="text-primary font-semibold text-sm">
              {user?.user_metadata?.full_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-foreground truncate">
              {user?.user_metadata?.full_name || 'User'}
            </div>
            <div className="text-sm text-muted-foreground truncate">{user?.email}</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-b border-white/10">
        <Button 
          size="sm" 
          className="w-full bg-gradient-to-r from-success to-success/80 hover:from-success/90 hover:to-success/70 text-white shadow-lg transition-all duration-300 hover:scale-105"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Transaction
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
              activeItem === item.id
                ? 'bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-primary shadow-lg'
                : 'text-muted-foreground hover:text-foreground hover:bg-white/5 hover:backdrop-blur-sm'
            }`}
          >
            <item.icon className={`w-5 h-5 transition-transform duration-300 ${
              activeItem === item.id ? 'scale-110' : 'group-hover:scale-105'
            }`} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-white/10">
        <Button 
          variant="ghost" 
          onClick={handleSignOut}
          className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300"
        >
          <LogOut className="w-4 h-4 mr-3" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}

export default ModernSidebar