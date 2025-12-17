import React from 'react';
import { ChevronDown, Clock, Download } from 'lucide-react';

interface FilterBarProps {
    onClose?: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ onClose }) => {
  // Common styles for consistency
  const labelStyle = "whitespace-nowrap w-24 text-right text-gray-600";
  const inputContainerStyle = "flex items-center gap-2";
  const inputStyle = "border border-gray-300 rounded px-3 py-1.5 w-60 text-sm focus:outline-none focus:border-blue-500 placeholder-gray-300 h-8";
  const selectStyle = "appearance-none border border-gray-300 rounded px-3 py-1.5 w-60 bg-white focus:outline-none focus:border-blue-500 text-gray-600 pr-8 h-8 text-sm";
  
  return (
    <div className="bg-white p-5 rounded-sm border-b border-gray-200 relative mb-4 shadow-sm">
      <div className="flex items-center gap-6">
        
        {/* Filter Inputs Grid: 4 Columns x 2 Rows */}
        <div className="grid grid-cols-4 gap-x-4 gap-y-4 flex-1">
            
            {/* Row 1, Item 1 */}
            <div className={inputContainerStyle}>
                <label className={labelStyle}>订单号/手机号</label>
                <input 
                    type="text" 
                    placeholder="请输入内容" 
                    className={inputStyle}
                />
            </div>

            {/* Row 1, Item 2 */}
            <div className={inputContainerStyle}>
                <label className={labelStyle}>录单人</label>
                <input 
                    type="text" 
                    placeholder="请输入内容" 
                    className={inputStyle}
                />
            </div>

            {/* Row 1, Item 3 */}
            <div className={inputContainerStyle}>
                <label className={labelStyle}>派单员</label>
                <input 
                    type="text" 
                    placeholder="请输入内容" 
                    className={inputStyle}
                />
            </div>

             {/* Row 1, Item 4: Report Time (Date Range) */}
             <div className={inputContainerStyle}>
                <label className={labelStyle}>报错发起时间</label>
                <div className="flex items-center border border-gray-300 rounded overflow-hidden w-60 h-8">
                    <div className="px-2 text-gray-400 border-r border-gray-100 bg-gray-50 h-full flex items-center">
                        <Clock className="w-3.5 h-3.5" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="开始日期" 
                        className="px-1 py-1 w-full focus:outline-none placeholder-gray-300 text-center text-xs h-full"
                    />
                    <span className="text-gray-400 px-0.5">-</span>
                    <input 
                        type="text" 
                        placeholder="结束日期" 
                        className="px-1 py-1 w-full focus:outline-none placeholder-gray-300 text-center text-xs h-full"
                    />
                </div>
            </div>

            {/* Row 2, Item 5 */}
            <div className={inputContainerStyle}>
                <label className={labelStyle}>状态</label>
                <div className="relative w-60">
                    <select className={selectStyle}>
                        <option value="">请选择</option>
                        <option value="pending">待处理</option>
                        <option value="processing">处理中</option>
                        <option value="resolved">已解决</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-2.5 w-3 h-3 text-gray-400 pointer-events-none" />
                </div>
            </div>

            {/* Row 2, Item 6 */}
            <div className={inputContainerStyle}>
                <label className={labelStyle}>报错类型</label>
                <div className="relative w-60">
                    <select className={selectStyle}>
                        <option value="">请选择</option>
                        <option value="hardware">硬件故障</option>
                        <option value="software">软件报错</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-2.5 w-3 h-3 text-gray-400 pointer-events-none" />
                </div>
            </div>

            {/* Row 2, Item 7 */}
            <div className={inputContainerStyle}>
                <label className={labelStyle}>订单来源</label>
                <div className="relative w-60">
                    <select className={selectStyle}>
                        <option value="">请选择</option>
                        <option value="phone">400电话</option>
                        <option value="app">APP</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-2.5 w-3 h-3 text-gray-400 pointer-events-none" />
                </div>
            </div>

            {/* Row 2, Item 8 */}
            <div className={inputContainerStyle}>
                <label className={labelStyle}>工作机</label>
                <input 
                    type="text" 
                    placeholder="请输入关键词搜索" 
                    className={inputStyle}
                />
            </div>
        </div>

        {/* Action Buttons Section - Vertically Centered */}
        <div className="flex items-center gap-2 pl-4 border-l border-gray-100 h-16">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-1.5 rounded text-sm transition-colors shadow-sm whitespace-nowrap h-8 flex items-center">
                搜索
            </button>
            <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-600 px-5 py-1.5 rounded text-sm transition-colors shadow-sm whitespace-nowrap h-8 flex items-center">
                重置
            </button>
            <button className="flex items-center gap-1 bg-white border border-[#1890FF] text-[#1890FF] hover:bg-blue-50 px-4 py-1.5 rounded text-sm transition-colors shadow-sm whitespace-nowrap h-8">
                <Download className="w-4 h-4" />
                一键导出
            </button>
        </div>

      </div>
      
      {/* The "Collapse" Tab hanging from the bottom right */}
      {onClose && (
        <div className="absolute -bottom-6 right-4">
            <div 
                onClick={onClose}
                className="bg-blue-50 text-blue-500 text-xs px-4 py-0.5 rounded-b-lg cursor-pointer flex items-center shadow-sm border border-t-0 border-blue-100 hover:bg-blue-100 transition-colors"
            >
                收起
                <ChevronDown className="w-3 h-3 ml-1 transform rotate-180" />
            </div>
        </div>
      )}
    </div>
  );
};