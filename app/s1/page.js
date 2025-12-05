'use client';

import { useRouter } from 'next/navigation';

export default function TaxYearQuarter() {
  const router = useRouter();

  const handleProceed = () => {
    router.push('/s2');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#004b66] text-white py-3 px-6 flex items-center justify-between shadow-md">
        <div className="flex items-center">
          <div className="bg-white text-[#004b66] px-4 py-1 rounded-md font-semibold text-sm">
            EXCISE 720
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:bg-[#005a7a] p-2 rounded">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
            </svg>
          </button>
          <button className="hover:bg-[#005a7a] p-2 rounded">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="hover:bg-[#005a7a] p-2 rounded">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="hover:bg-[#005a7a] p-2 rounded">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-[#1a6b82] text-white shadow-lg">
        <div className="flex">
          <button className="flex items-center gap-2 px-6 py-4 hover:bg-[#145566] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
            </svg>
            <span className="font-medium">My Filing</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-4 hover:bg-[#145566] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
            </svg>
            <span className="font-medium">My Business</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-4 bg-white text-[#004b66] hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd"/>
            </svg>
            <span className="font-medium">Add Filing</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-[#0d1a2b]">Tax Year & Quarter Ending</h1>
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 bg-[#004b66] text-white px-6 py-2.5 rounded-lg hover:bg-[#005a7a] transition-colors shadow-md font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
            </svg>
            Back
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-lg font-semibold text-[#004b66] mb-6">Tax Year</h2>
          
          <div className="space-y-6">
            {/* Business Name */}
            <div>
              <label className="block text-[#0d1a2b] font-medium mb-2">
                Business Name<span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-3 border-2 border-[#1a6b82] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a6b82] text-gray-500">
                <option>Select Business</option>
              </select>
            </div>

            {/* Form Type */}
            <div>
              <label className="block text-[#0d1a2b] font-medium mb-2">
                Form Type<span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-3 border-2 border-[#1a6b82] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a6b82] text-gray-500">
                <option>Select Form Type</option>
              </select>
            </div>

            {/* Tax Year */}
            <div>
              <label className="block text-[#0d1a2b] font-medium mb-2">
                Tax Year<span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-3 border-2 border-[#1a6b82] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a6b82] text-gray-500">
                <option>Select Tax Year</option>
              </select>
            </div>

            {/* Tax Quarter */}
            <div>
              <label className="block text-[#0d1a2b] font-medium mb-2">
                Tax Quarter
              </label>
              <select className="w-full px-4 py-3 border-2 border-[#1a6b82] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a6b82] text-gray-500">
                <option>Select Quarter</option>
              </select>
            </div>
          </div>

          {/* Proceed Button */}
          <div className="mt-8 flex justify-end">
            <button 
              onClick={handleProceed}
              className="bg-[#004b66] text-white px-8 py-3 rounded-lg hover:bg-[#005a7a] transition-colors shadow-md font-medium"
            >
              Proceed
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
