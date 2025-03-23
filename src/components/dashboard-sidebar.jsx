import {
    BarChart3,
    FileText,
    Grid3X3,
    Home,
    LogOut,
    MessageSquare,
    Settings,
    ShieldCheck,
    Users,
} from "lucide-react";
import { Logo } from './ui/logo';
import { LightMode } from "./ui/light-mode";
import { DarkMode } from "./ui/dark-mode";
import useThemeToggle from "../hooks/useThemeToggle";

export const DashboardSidebar = ({ activeNav }) => {
    const { handleThemeChange, theme } = useThemeToggle();
  
    return (
      <div className="w-16 bg-white dark:bg-[#1F214A] border-r flex flex-col items-center py-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center mb-8">
            <Logo width={60} height={60}/>
          </div>

          <DashboardNavbar activeNav={activeNav}/>
          <UserSettingPanel/>
          <ThemeToggle 
            handleThemeChange={handleThemeChange} 
            theme={theme}
          />

        </div>
    )
  };

const DashboardNavbar = ({ activeNav }) => {
  const navItems = [
    { id: "grid", icon: Grid3X3 },
    { id: "dashboard", icon: BarChart3 },
    { id: "users", icon: Users },
    { id: "messages", icon: MessageSquare },
    { id: "files", icon: FileText },
    { id: "home", icon: Home },
  ];

  return (
    <nav className="flex flex-col items-center gap-6 flex-1">
      {navItems.map(({ id, icon: Icon }) => (
        <button
          key={id}
          className={`p-2 rounded-lg ${
            activeNav === id ? "bg-primary/10 text-primary" : "text-gray-500 hover:text-primary"
          }`}
          onClick={() => {}}
        >
          <Icon className="h-5 w-5" />
        </button>
      ))}
    </nav>
  )
};

const UserSettingPanel = () => {
  const actionButtons = [
    { icon: Settings },
    { icon: ShieldCheck },
    { icon: LogOut },
  ];
  
  return (
    <div className="flex flex-col items-center gap-6 mb-4">
      {actionButtons.map(({ icon: Icon }, index) => (
        <button key={index} className="p-2 rounded-lg text-gray-500 hover:text-primary">
          <Icon className="h-5 w-5" />
        </button>
      ))}
    </div>
  )
};

const ThemeToggle = ({ handleThemeChange, theme }) => {
  return (
    <div onClick={() => handleThemeChange()}>
        {theme ? <DarkMode/> : <LightMode/>}
    </div>
  )
};