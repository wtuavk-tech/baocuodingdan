import React from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

interface PaginationProps {
  total: number;
  pageSize: number;
  current: number;
  onChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ total, pageSize, current, onChange }) => {
  const totalPages = Math.ceil(total / pageSize);

  // Generate page numbers (simplified window logic to match screenshot style roughly)
  const renderPageNumbers = () => {
    const pages = [];
    let start = Math.max(1, current - 3);
    let end = Math.min(totalPages, start + 6);
    
    // Adjust if we are near the end to always show 7 items if possible
    if (end - start < 6) {
        start = Math.max(1, end - 6);
    }

    for (let i = start; i <= end; i++) {
        pages.push(
            <button
                key={i}
                onClick={() => onChange(i)}
                className={`w-8 h-8 rounded border text-sm font-medium flex items-center justify-center transition-colors
                    ${current === i 
                        ? 'bg-[#1890FF] text-white border-[#1890FF]' 
                        : 'bg-white text-[#000000A6] border-[#D9D9D9] hover:border-[#1890FF] hover:text-[#1890FF]'
                    }`}
            >
                {i}
            </button>
        );
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-end gap-3 text-[14px] text-[#000000A6] py-4 mt-2 select-none">
      <span>共 {total} 条</span>
      
      <div className="relative">
        <select 
            className="appearance-none border border-[#D9D9D9] rounded px-3 py-1.5 pr-8 bg-white hover:border-[#1890FF] focus:outline-none focus:border-[#1890FF] cursor-pointer"
            value={`${pageSize}条/页`}
            readOnly
        >
          <option value="20条/页">20条/页</option>
        </select>
         <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#00000040]">
            <ChevronDown className="w-4 h-4" />
         </div>
      </div>

      <button 
        onClick={() => onChange(Math.max(1, current - 1))}
        disabled={current === 1}
        className="w-8 h-8 flex items-center justify-center rounded border border-[#D9D9D9] bg-white hover:border-[#1890FF] disabled:opacity-50 disabled:hover:border-[#D9D9D9] disabled:cursor-not-allowed text-[#00000040]"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {renderPageNumbers()}

      <button 
        onClick={() => onChange(Math.min(totalPages, current + 1))}
        disabled={current === totalPages}
        className="w-8 h-8 flex items-center justify-center rounded border border-[#D9D9D9] bg-white hover:border-[#1890FF] disabled:opacity-50 disabled:hover:border-[#D9D9D9] disabled:cursor-not-allowed text-[#00000040]"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-2 ml-2">
        <span>前往</span>
        <input 
          type="number" 
          value={current}
          min={1}
          max={totalPages}
          onChange={(e) => {
              const val = parseInt(e.target.value);
              if (!isNaN(val)) onChange(val);
          }}
          className="w-12 h-8 border border-[#D9D9D9] rounded text-center focus:outline-none focus:border-[#1890FF] hover:border-[#1890FF]"
        />
        <span>页</span>
      </div>
    </div>
  );
};