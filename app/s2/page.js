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
          <div className="bg-[#004b66] text-white px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">98 - Ozone Depleting Chemicals (ODCs)</h2>
            <div className="text-right">
              <div className="text-sm">Tax End Month and Tax Year:</div>
              <div className="text-lg font-semibold">March 2025</div>
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
              <table className="w-full">
                <thead>
                  <tr className="bg-[#004b66] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Tax Date</th>
                    <th className="px-4 py-3 text-left font-semibold">ODCs Name</th>
                    <th className="px-4 py-3 text-left font-semibold">No.of Pounds</th>
                    <th className="px-4 py-3 text-left font-semibold">Tax Rate</th>
                    <th className="px-4 py-3 text-left font-semibold">Tax Amount</th>
                    <th className="px-4 py-3 text-left font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={row.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3">
                        <input
                          type="date"
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#004b66]"
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
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#004b66] text-gray-500"
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
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#004b66]"
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
                          className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-600"
                          value={row.taxRate}
                          readOnly
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-600"
                          value={row.taxAmount}
                          readOnly
                        />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => deleteRow(row.id)}
                          className="text-white bg-[#004b66] hover:bg-[#005a7a] p-2 rounded transition-colors"
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
                <button className="flex items-center gap-2 bg-[#004b66] text-white px-6 py-2.5 rounded-lg hover:bg-[#005a7a] transition-colors shadow-md font-medium">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"/>
                  </svg>
                  Save
                </button>
                <button className="flex items-center gap-2 bg-white text-[#004b66] border-2 border-[#004b66] px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Proceed to Summary
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
                <button className="flex items-center gap-2 bg-white text-[#004b66] border-2 border-[#004b66] px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Proceed to Deposit
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
