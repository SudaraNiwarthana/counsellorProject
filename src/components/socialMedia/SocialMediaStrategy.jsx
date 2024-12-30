import React from 'react';
import { Search, Bell, User, ChevronRight } from 'lucide-react';

const ServiceListingPage = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold">SLTMOBITEL</h1>
          <nav className="flex gap-6">
            <a href="#" className="hover:text-emerald-600">Home</a>
            <a href="#" className="hover:text-emerald-600">Categories</a>
            <a href="#" className="hover:text-emerald-600">Dashboard</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <input 
              type="search" 
              placeholder="Search" 
              className="px-4 py-2 rounded-lg bg-gray-100"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
          <Bell className="text-gray-600" size={20} />
          <User className="text-gray-600" size={20} />
        </div>
      </header>

      {/* Banner */}
      <div className="relative h-64 bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
        <img 
          src="/api/placeholder/800/300" 
          alt="Digital Art Banner"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Service Title Card */}
      <div className="bg-white -mt-6 mx-4 rounded-lg shadow-lg p-6 relative">
        <div className="space-y-2">
          <div className="flex gap-2">
            <span className="text-red-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-green-500">★</span>
          </div>
          <h2 className="text-2xl font-bold">Photoshop & Illustrator</h2>
          <p className="text-gray-600">Social Media Strategy</p>
        </div>
      </div>

      {/* Service Listings */}
      <div className="p-4 space-y-4">
        {/* Web Design Service */}
        <div className="border rounded-lg p-4 flex items-center justify-between">
          <div className="flex gap-4"> 
            <img 
              src="/api/placeholder/48/48" 
              alt="Provider"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">Web Design (UI/UX)</h3>
              <p className="text-gray-500">Mark Zuckerberg</p>
              <p className="text-sm text-gray-600 mt-2 max-w-xl">
                Web design (UI/UX) focuses on creating visually appealing, user-friendly, 
                and functional websites that provide a seamless user experience. UI (User Interface) 
                design involves crafting the layout, colors....
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="font-bold">$10</span>
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              Request a call
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* API Integration Service */}
        <div className="border rounded-lg p-4 flex items-center justify-between">
          <div className="flex gap-4">
            <img 
              src="/api/placeholder/48/48" 
              alt="Provider"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">API Integration</h3>
              <p className="text-gray-500">Mark Zuckerberg</p>
              <p className="text-sm text-gray-600 mt-2 max-w-xl">
                API Integration involves connecting two or more software systems through an Application Programming 
                Interface (API), enabling them to communicate and share data seamlessly....
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="font-bold">$10</span>
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              Request a call
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceListingPage;