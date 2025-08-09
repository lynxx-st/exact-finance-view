import { Search, Moon, Sun, Bell, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search or create anything..."
              className="pl-10 pr-12 bg-muted/50"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm">⌘K</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Sales
          </Button>
          
          <Button size="sm" className="bg-purchase text-purchase-foreground hover:bg-purchase/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Purchase
          </Button>

          <Button variant="ghost" size="sm">
            Add More
          </Button>

          <div className="flex items-center gap-2 ml-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-4 h-4" />
            </Button>
            
            <Button variant="ghost" size="icon">
              <Moon className="w-4 h-4" />
            </Button>

            <div className="flex items-center gap-2 ml-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-medium">RK</span>
              </div>
              <span className="font-medium">Ram Karki</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;