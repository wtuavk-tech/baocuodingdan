import { ReportEntry } from './types';

// Helper to generate random data
const generateMockData = (): ReportEntry[] => {
  const count = 300; // 15 pages * 20 items per page = 300 items
  const data: ReportEntry[] = [];
  
  const sources = ['400电话', '小程序', 'APP', '后台录入'];
  const machines = ['A-001', 'B-102', 'C-305', 'D-550', 'E-201', 'F-888', 'G-777'];
  const statuses = ['待处理', '处理中', '已解决', '已取消'];
  const types = ['硬件故障', '软件报错', '网络故障', '机械故障', '屏幕故障', '电源故障'];
  const recorders = ['客服A', '客服B', '客服C', '系统自动'];
  
  for (let i = 0; i < count; i++) {
    // Weighted status generation to ensure we have enough "Pending"
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    // Make first 30% items likely to be '待处理' for sorting demonstration
    if (i < 80) status = '待处理';
    
    data.push({
      id: i + 1,
      orderNo: `BX20251217${String(i + 1).padStart(3, '0')}`,
      reportTime: `2025-12-17 ${String(Math.floor(Math.random() * 12) + 8).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:00`,
      phone: `1${Math.floor(Math.random() * 6 + 3)}${Math.floor(Math.random() * 10)}****${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
      source: sources[Math.floor(Math.random() * sources.length)],
      machine: machines[Math.floor(Math.random() * machines.length)],
      customerName: `客户${String.fromCharCode(65 + (i % 26))}${i}店`,
      status: status,
      recorder: recorders[Math.floor(Math.random() * recorders.length)],
      worker: Math.random() > 0.3 ? '张师傅' : '-',
      dispatcher: Math.random() > 0.3 ? '调度员A' : '-',
      reporter: '店员',
      reportType: types[Math.floor(Math.random() * types.length)],
      errorDetails: '设备运行异常，请尽快处理',
      handlingDetails: status === '待处理' ? '-' : '已安排人员上门',
      handlingTime: status === '待处理' ? '-' : '2025-12-17 10:00:00',
      solution: status === '已解决' ? '更换配件' : '-',
      resolver: status === '已解决' ? '张师傅' : '-',
      resolveTime: status === '已解决' ? '2025-12-17 12:00:00' : '-',
    });
  }

  // Sort by Status: 待处理 -> 处理中 -> 已解决 -> 已取消
  const statusOrder: Record<string, number> = {
    '待处理': 1,
    '处理中': 2,
    '已解决': 3,
    '已取消': 4
  };

  return data.sort((a, b) => {
    return (statusOrder[a.status] || 99) - (statusOrder[b.status] || 99);
  });
};

export const MOCK_DATA: ReportEntry[] = generateMockData();