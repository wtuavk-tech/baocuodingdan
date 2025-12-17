import React, { useState } from 'react';
import { FilterBar } from './components/FilterBar';
import { Table } from './components/Table';
import { Pagination } from './components/Pagination';
import { MOCK_DATA } from './constants';
import { SystemNotice } from './components/SystemNotice';
import { DataOverview } from './components/DataOverview';

const App: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  // Slice data for current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = MOCK_DATA.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-[#f0f2f5] p-6 font-sans">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Scrolling System Notice */}
        <SystemNotice />
        
        {/* Data Overview & Filter Toggle */}
        <DataOverview 
            isFilterVisible={isFilterOpen} 
            onToggleFilter={() => setIsFilterOpen(!isFilterOpen)} 
        />
        
        {/* Filter Section (Conditionally rendered) */}
        {isFilterOpen && (
            <FilterBar onClose={() => setIsFilterOpen(false)} />
        )}

        {/* Main Content Area */}
        <div className="space-y-4 pt-2">
          <Table data={currentData} />
          <Pagination 
            total={MOCK_DATA.length} 
            pageSize={pageSize} 
            current={currentPage} 
            onChange={setCurrentPage}
          />
        </div>

      </div>
    </div>
  );
};

export default App;