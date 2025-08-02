'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, LayoutGrid } from 'lucide-react';

const menuItems = [
  { title: "Home", link: "/" },
  {
    title: "About Us",
    submenus: [{ name: "About Sanstha", link: "/sanstha" }],
  },
  {
    title: "Science Gallery",
    submenus: [{ name: "Rolling Ball Sculpture", link: "/gallery1" }],
  },
  {
    title: "Innovation Activity Laboratory",
    submenus: [
      { name: "Projects", link: "#" },
      { name: "Resources", link: "#" },
      { name: "Success Stories", link: "#" },
    ],
  },
  {
    title: "Education Activities",
    submenus: [{ name: "National Science day", link: "/scienceday" }],
  },
  {
    title: "Other Activities",
    submenus: [{ name: "Science Competition", link: "/com" }],
  },
  { title: "Photo Gallery", link: "/photogallery" },
  {
    title: "Notice",
    submenus: [{ name: "Latest Notice", link: "#" }],
  },
  { title: "Event", link: "/photoworkshop" },
  { title: "Contact", link: "/contact" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAllMenus, setShowAllMenus] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const VISIBLE_COUNT = 6;
  const visibleMenus = menuItems.slice(0, VISIBLE_COUNT);
  const hiddenMenus = menuItems.slice(VISIBLE_COUNT);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null);
  };

  const toggleSidebarMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  useEffect(() => {
    document.body.style.overflow = showAllMenus ? 'hidden' : '';
  }, [showAllMenus]);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-[#024357] text-white px-4 py-1 relative shadow-md z-50">
        <div className="flex justify-between items-center md:hidden">
          <span className="font-bold text-xl">MENU</span>
          <button onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className={`${mobileMenuOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row md:justify-center gap-3 mt-3 md:mt-0`}>
          {visibleMenus.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => {
                if (!mobileMenuOpen) setOpenDropdown(index);
              }}
              onMouseLeave={() => {
                if (!mobileMenuOpen) setOpenDropdown(null);
              }}
            >
              {item.submenus ? (
                <>
                  <div
                    className="flex items-center cursor-pointer hover:underline px-2 py-1"
                    onClick={() => {
                      if (mobileMenuOpen) {
                        setOpenDropdown(openDropdown === index ? null : index);
                      }
                    }}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </div>
                  {openDropdown === index && (
                    <ul className="md:absolute bg-white text-black mt-1 shadow-lg rounded w-56 z-50 animate-fade-in-down">
                      {item.submenus.map((submenu, i) => (
                        <li key={i}>
                          <Link
                            href={submenu.link}
                            className="block px-4 py-2 hover:bg-gray-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {submenu.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.link}
                  className="hover:underline block px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}

          {hiddenMenus.length > 0 && (
            <li>
              <button onClick={() => setShowAllMenus(true)} className="flex items-center gap-1 hover:underline px-2 py-1">
                <LayoutGrid size={18} />
                <span>All Menus</span>
              </button>
            </li>
          )}
        </ul>
      </nav>

      {/* Dark Shadow */}
      {showAllMenus && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/60 z-40 transition-opacity"
          onClick={() => setShowAllMenus(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[500px] bg-[#236f84] text-white z-50 p-6 overflow-y-auto 
        transform transition-transform duration-500 ease-in-out 
        ${showAllMenus ? 'translate-x-0' : 'translate-x-full'} 
        shadow-2xl rounded-l-xl animate-slide-in-right`}>

        <div className="flex justify-between items-center mb-4 animate-fade-in-down">
          <h2 className="text-xl font-bold">All Menus</h2>
          <button onClick={() => setShowAllMenus(false)}>
            <X size={24} />
          </button>
        </div>

        {hiddenMenus.map((item, idx) => (
          <div key={idx} className="mb-4">
            <button
              className="w-full text-left font-semibold flex justify-between items-center py-2 border-b border-white/20"
              onClick={() => toggleSidebarMenu(idx)}
            >
              {item.title}
              {item.submenus && (
                <ChevronDown className={`transition-transform ${activeMenu === idx ? 'rotate-180' : ''}`} />
              )}
            </button>
            {activeMenu === idx && item.submenus && (
              <ul className="bg-white/10 text-sm ml-2 mt-1 rounded px-3 py-2 space-y-1 animate-fade-in-up">
                {item.submenus.map((sub, subIdx) => (
                  <li key={subIdx}>
                    <Link
                      href={sub.link}
                      className="block hover:underline hover:text-yellow-200 transition"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
