export interface ReportEntry {
  id: number;
  orderNo: string;        // 订单号
  reportTime: string;     // 提出报修时间
  phone: string;          // 手机号
  source: string;         // 来源
  machine: string;        // 工作机
  customerName: string;   // 客户名称
  status: string;         // 状态
  recorder: string;       // 录单人
  worker: string;         // 师傅
  dispatcher: string;     // 派单员
  reporter: string;       // 报修提出人
  reportType: string;     // 报修类型
  errorDetails: string;   // 报错详情
  handlingDetails: string; // 处理详情
  handlingTime: string;   // 处理时间
  solution: string;       // 解决方案
  resolver: string;       // 解决人
  resolveTime: string;    // 解决时间
}

export interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}