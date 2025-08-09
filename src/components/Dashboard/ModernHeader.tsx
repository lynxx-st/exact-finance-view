import { Search, Bell, Plus, Command } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const ModernHeader = () => {
  return (
    <header className="bg-card/30 backdrop-blur-xl border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search transactions, categories..."
              className="pl-10 pr-16 bg-white/5 backdrop-blur-sm border-white/10 focus:border-primary/50 transition-all duration-300"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
              <Command className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">K</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-success/30 transition-all duration-300"
          >
            <Plus className="w-4 h-4 mr-2" />
            Income
          </Button>
          
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-danger to-danger/80 hover:from-danger/90 hover:to-danger/70 text-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Plus className="w-4 h-4 mr-2" />
            Expense
          </Button>

          <div className="flex items-center gap-2 ml-4">
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-white/5 transition-all duration-300"
              >
                <Bell className="w-4 h-4" />
              </Button>
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs animate-glow"
              >
                3
              </Badge>
            </div>

            <div className="flex items-center gap-3 ml-2 p-2 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-medium text-sm">John Doe</div>
                <div className="text-xs text-muted-foreground">Premium User</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default ModernHeader