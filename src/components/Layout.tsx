import React from 'react';
import { Menu, LogOut, BookOpen, Users, BarChart2, Settings } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const navItems = [
    { path: '/dashboard', icon: <BarChart2 />, label: 'Dashboard' },
    { path: '/students', icon: <Users />, label: 'Students' },
    { path: '/disciplines', icon: <BookOpen />, label: 'Disciplines' },
    { path: '/settings', icon: <Settings />, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <div className="flex items-center justify-between mb-5 text-white">
            <h1 className="text-xl font-bold">AcadPerform</h1>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 text-white rounded-lg hover:bg-gray-700 ${
                  location.pathname === item.path ? 'bg-gray-700' : ''
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-4 w-full px-3">
            <button className="flex items-center w-full px-4 py-3 text-white rounded-lg hover:bg-gray-700">
              <LogOut className="w-5 h-5" />
              <span className="ml-3">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className={`p-4 ${isSidebarOpen ? 'ml-64' : ''}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;