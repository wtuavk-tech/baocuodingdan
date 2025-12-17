import React from 'react';
import { ReportEntry } from '../types';
import { ArrowUpDown } from 'lucide-react';

interface TableProps {
  data: ReportEntry[];
}

export const Table: React.FC<TableProps> = ({ data }) => {
  // Helper to render sort icon
  const SortIcon = () => (
    <ArrowUpDown className="w-3 h-3 ml-1 inline-block text-gray-300 hover:text-gray-500 cursor-pointer" />
  );

  return (
    <div className="bg-white rounded-sm shadow-sm overflow-hidden border border-gray-200 min-h-[500px] flex flex-col relative">
      <div className="overflow-x-auto flex-1">
        <table className="min-w-full divide-y divide-gray-200 text-xs text-gray-600 border-separate border-spacing-0">
          <thead className="bg-[#f7f8fa]">
            <tr>
              <th className="px-3 py-3.5 text-left font-medium w-12 whitespace-nowrap">序号</th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">订单号 <SortIcon /></th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">提出报修时间 <SortIcon /></th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">手机号</th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">来源</th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">工作机</th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">客户名称 <SortIcon /></th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">状态</th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">录单人</th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">师傅</th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">派单员</th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">报修提出人</th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">报修类型</th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">报错详情</th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">处理详情</th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">处理时间</th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">解决方案</th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">解决人</th>
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap">解决时间</th>
              {/* Sticky Header for Action Column */}
              <th className="px-3 py-3.5 text-left font-medium whitespace-nowrap sticky right-0 bg-[#f7f8fa] z-10 shadow-[-5px_0_5px_-5px_rgba(0,0,0,0.1)] border-l border-gray-100">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {data.length > 0 ? (
              data.map((row, index) => (
                <tr 
                  key={row.id} 
                  className={`group transition-colors ${index % 2 === 1 ? 'bg-[#f0f7ff]' : 'bg-white'} hover:bg-[#f2f8ff]`}
                >
                  <td className="px-3 py-3.5 whitespace-nowrap">{index + 1}</td>
                  <td className="px-3 py-3.5 whitespace-nowrap">{row.orderNo}</td>
                  <td className="px-3 py-3.5 whitespace-nowrap">{row.reportTime}</td>
                  <td className="px-3 py-3.5 whitespace-nowrap">{row.phone}</td>
                  <td className="px-3 py-3.5 whitespace-nowrap">{row.source}</td>
                  <td className="px-3 py-3.5 whitespace-nowrap">{row.machine}</td>
                  <td className="px-3 py-3.5 whitespace-nowrap">{row.customerName}</td>
                  <td className="px-3 py-3.5 whitespace-nowrap">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                        row.status === '待处理' ? 'bg-red-100 text-red-600' :
                        row.status === '处理中' ? 'bg-blue-100 text-blue-600' :
                        row.status === '已解决' ? 'bg-green-100 text-green-600' :
                        'bg-gray-100 text-gray-600'
                    }`}>
                        {row.status}
                    </span>
                  </td>
                  <td className="px-3 py-3.5 whitespace-nowrap">{row.recorder}</td>
                  <td className="px-3 py-3.5 whitespace-nowrap">{row.worker}</td>
                  <td className="px-3 py-3.5 whitespace-nowrap">{row.dispatcher}</td>
                  <td className="px-3 py-3.5 whitespace-nowrap">{row.reporter}</td>
                  <td className="px-3 py-3.5 whitespace-nowrap">{row.reportType}</td>
                  <td className="px-3 py-3.5 max-w-[150px] truncate" title={row.errorDetails}>{row.errorDetails}</td>
                  <td className="px-3 py-3.5 max-w-[150px] truncate" title={row.handlingDetails}>{row.handlingDetails}</td>
                  <td className="px-3 py-3.5 whitespace-nowrap">{row.handlingTime}</td>
                  <td className="px-3 py-3.5 whitespace-nowrap">{row.solution}</td>
                  <td className="px-3 py-3.5 whitespace-nowrap">{row.resolver}</td>
                  <td className="px-3 py-3.5 whitespace-nowrap">{row.resolveTime}</td>
                  {/* Sticky Column for Actions */}
                  <td className={`px-3 py-3.5 whitespace-nowrap text-blue-500 cursor-pointer sticky right-0 z-10 shadow-[-5px_0_5px_-5px_rgba(0,0,0,0.1)] border-l border-gray-50 group-hover:bg-[#f2f8ff] ${index % 2 === 1 ? 'bg-[#f0f7ff]' : 'bg-white'}`}>
                    查看
                  </td>
                </tr>
              ))
            ) : (
                <tr>
                    <td colSpan={20} className="h-96 text-center">
                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                            <svg className="w-16 h-16 mb-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            </svg>
                            <span>暂无数据</span>
                        </div>
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};