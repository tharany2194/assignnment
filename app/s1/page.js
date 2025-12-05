'use client';

import { useRouter } from 'next/navigation';

export default function TaxYearQuarter() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/s2');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#004b66] text-white py-2 px-6 flex items-center justify-between shadow-md">
        <div className="flex items-center">
          <div className="bg-white text-[#004b66] px-4 py-1 rounded-md font-semibold text-sm">
            EXCISE 720
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="hover:bg-[#005a7a] p-2 rounded" title="User Profile">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="hover:bg-[#005a7a] p-2 rounded" title="Help">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="hover:bg-[#005a7a] p-2 rounded" title="Settings">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="hover:bg-[#005a7a] p-2 rounded" title="Logout">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-[#0C688D] text-white shadow-lg">
        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-6 py-3 hover:bg-[#145566] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
            </svg>
            <span className="font-medium">My Filing</span>
          </button>
          <button className="flex items-center gap-3 px-8 py-3 hover:bg-[#004b66] transition-colors border-b-4 border-transparent hover:border-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
            </svg>
            <span className="font-medium text-base">My Business</span>
          </button>
          <button className="flex items-center gap-3 px-8 py-3 bg-white/50 text-white hover:bg-white/70 transition-colors border-b-4 border-white shadow-sm">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd"/>
            </svg>
            <span className="font-bold text-base">Add Filing</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-[90%] mx-auto py-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-[#004B66]">Tax Year & Quarter Ending</h1>
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 bg-[#004b66] text-white px-6 py-2.5 rounded-lg hover:bg-[#005a7a] transition-colors shadow-md font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
            </svg>
            Back
          </button>
        </div>

        <h2 className="text-base font-semibold text-[#004b66] mt-1 mb-12">Tax Year</h2>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-5">
            {/* Business Name */}
            <div>
              <label className="block text-[#0C688D] font-bold mb-2">
                Business Name<span className="text-[#004b66] text-lg ml-1">*</span>
              </label>
              <div className="relative">
              <select className="w-full px-4 py-2 border-3 border-[#1a6b82] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a6b82] text-gray-500 appearance-none bg-white pr-10">
                <option>Select Business</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                <svg className="fill-current h-5 w-5" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                </svg>
              </div>
              </div>
            </div>

            {/* Form Type */}
            <div>
              <label className="block text-[#0C688D] font-bold mb-2">
                Form Type<span className="text-[#004b66] text-lg ml-1">*</span>
              </label>
              <div className="relative">
              <select className="w-full px-4 py-2 border-3 border-[#1a6b82] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a6b82] text-gray-500 appearance-none bg-white pr-10">
                <option>Select Form Type</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                <svg className="fill-current h-5 w-5" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                </svg>
              </div>
              </div>
            </div>

            {/* Tax Year */}
            <div>
              <label className="block text-[#0C688D] font-bold mb-2">
                Tax Year<span className="text-[#004b66] text-lg ml-1">*</span>
              </label>
              <div className="relative">
              <select className="w-full px-4 py-2 border-3 border-[#1a6b82] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a6b82] text-gray-500 appearance-none bg-white pr-10">
                <option>Select Tax Year</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                <svg className="fill-current h-5 w-5" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                </svg>
              </div>
              </div>
            </div>

            {/* Tax Quarter */}
            <div>
              <label className="block text-[#0C688D] font-bold mb-2">
                Tax Quarter
              </label>
              <div className="relative">
              <select className="w-full px-4 py-2 border-3 border-[#1a6b82] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a6b82] text-gray-500 appearance-none bg-white pr-10">
                <option>Select Quarter</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                <svg className="fill-current h-5 w-5" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                </svg>
              </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
