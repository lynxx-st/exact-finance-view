import { LayoutDashboard, Users, FileText, Settings } from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Users, label: "Parties", active: false },
    { icon: FileText, label: "Reports", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div className="w-64 bg-primary h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-primary-foreground/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
            <span className="text-primary font-bold text-lg">K</span>
          </div>
          <span className="text-primary-foreground font-bold text-xl">Karobar</span>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-6 border-b border-primary-foreground/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-medium">HP</span>
          </div>
          <div>
            <div className="text-primary-foreground font-medium">Hamro Pasal</div>
            <div className="text-primary-foreground/70 text-sm">Business</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              item.active
                ? "bg-primary-foreground text-primary"
                : "text-primary-foreground/80 hover:bg-primary-foreground/10"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Profile Button */}
      <div className="p-4 border-t border-primary-foreground/10">
        <button className="w-full bg-success text-success-foreground py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2">
          <Users className="w-4 h-4" />
          Your Profile
        </button>
      </div>
    </div>
  );
};

export default Sidebar;