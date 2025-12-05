'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function EnvironmentalTaxes() {
  const router = useRouter();
  const [rows, setRows] = useState([
    { id: 1, taxDate: '', odcName: '', pounds: '', taxRate: '0.000', taxAmount: '0.00' }
  ]);
  const [noExcise, setNoExcise] = useState(false);

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      taxDate: '',
      odcName: '',
      pounds: '',
      taxRate: '0.000',
      taxAmount: '0.00'
    };
    setRows([...rows, newRow]);
  };

  const deleteRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleBack = () => {
    router.push('/s1');
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
      <nav className="bg-[#1a6b82] text-white shadow-lg">
        <div className="flex justify-center">
          <button className="flex items-center gap-3 px-8 py-4 hover:bg-[#004b66] transition-colors border-b-4 border-transparent hover:border-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
            </svg>
            <span className="font-medium text-base">My Filing</span>
          </button>
          <button className="flex items-center gap-3 px-8 py-4 hover:bg-[#004b66] transition-colors border-b-4 border-transparent hover:border-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
            </svg>
            <span className="font-medium text-base">My Business</span>
          </button>
          <button className="flex items-center gap-3 px-8 py-4 bg-white/70 text-[#1a6b82] hover:bg-white/90 transition-colors border-b-4 border-white shadow-sm">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd"/>
            </svg>
            <span className="font-bold text-base">Add Filing</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-16 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#0d1a2b]">Environmental Taxes</h1>
            <div className="text-[#004b66] text-sm mt-2 flex items-center gap-2">
              <span className="hover:underline cursor-pointer">Tax Year / Form 720</span>
              <span>✓</span>
              <span className="hover:underline cursor-pointer">/ Environmental Taxes</span>
              <span>✓</span>
              <span>/ 98 - Ozone Depleting Chemicals (ODCs)</span>
            </div>
          </div>
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

        {/* Card Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Card Header */}
          <div className="bg-[#1a5566] text-white px-8 py-5 flex items-center justify-between rounded-t-lg">
            <h2 className="text-3xl font-semibold">98 - Ozone Depleting Chemicals (ODCs)</h2>
            <div className="text-right">
              <div className="text-xl font-normal">Tax End Month and Tax Year: <span className="font-bold">March 2025</span></div>
            </div>
          </div>

          {/* Checkbox */}
          <div className="px-6 py-4 bg-gray-50 border-b">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={noExcise}
                onChange={(e) => setNoExcise(e.target.checked)}
                className="w-5 h-5 border-2 border-[#004b66] rounded focus:ring-2 focus:ring-[#004b66] cursor-pointer"
              />
              <span className="text-[#0d1a2b] font-medium">
                The Business has no excise - taxable activity (file as "None")
              </span>
            </label>
          </div>

          {/* Table */}
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#1a6b82] text-white">
                    <th className="px-4 py-3 text-left font-semibold border-r border-white first:rounded-tl-lg">Tax Date</th>
                    <th className="px-4 py-3 text-left font-semibold border-r border-white">ODCs Name</th>
                    <th className="px-4 py-3 text-left font-semibold border-r border-white">No.of Pounds</th>
                    <th className="px-4 py-3 text-left font-semibold border-r border-white">Tax Rate</th>
                    <th className="px-4 py-3 text-left font-semibold border-r border-white">Tax Amount</th>
                    <th className="px-4 py-3 text-left font-semibold last:rounded-tr-lg">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {rows.map((row, index) => (
                    <tr key={row.id} className="border-b border-gray-200 last:border-b-0">
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder=""
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1a6b82] focus:border-[#1a6b82]"
                          value={row.taxDate}
                          onChange={(e) => {
                            const newRows = [...rows];
                            newRows[index].taxDate = e.target.value;
                            setRows(newRows);
                          }}
                        />
                      </td>
                      <td className="px-4 py-3">
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1a6b82] focus:border-[#1a6b82] text-gray-500 bg-white"
                          value={row.odcName}
                          onChange={(e) => {
                            const newRows = [...rows];
                            newRows[index].odcName = e.target.value;
                            setRows(newRows);
                          }}
                        >
                          <option value="">select ODC name</option>
                          <option value="odc1">ODC Type 1</option>
                          <option value="odc2">ODC Type 2</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder=""
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1a6b82] focus:border-[#1a6b82]"
                          value={row.pounds}
                          onChange={(e) => {
                            const newRows = [...rows];
                            newRows[index].pounds = e.target.value;
                            setRows(newRows);
                          }}
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50 text-gray-700 text-center"
                          value={row.taxRate}
                          readOnly
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50 text-gray-700 text-center"
                          value={row.taxAmount}
                          readOnly
                        />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => deleteRow(row.id)}
                          className="text-white bg-[#1a6b82] hover:bg-[#145566] p-2 rounded transition-colors inline-flex items-center justify-center"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-3">
                <button className="flex items-center gap-2 bg-[#1a5566] text-white px-5 py-2 rounded hover:bg-[#145566] transition-colors font-medium text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                  Save
                </button>
                <button className="flex items-center gap-2 bg-white text-[#1a5566] border-2 border-[#1a6b82] px-5 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium text-sm">
                  Proceed to Summary
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
                <button className="flex items-center gap-2 bg-white text-[#1a5566] border-2 border-[#1a6b82] px-5 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium text-sm">
                  Proceed to Deposit
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
              <button
                onClick={addRow}
                className="flex items-center gap-2 bg-[#004b66] text-white px-6 py-2.5 rounded-lg hover:bg-[#005a7a] transition-colors shadow-md font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"/>
                </svg>
                Add Row
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
