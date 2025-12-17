import React from 'react';
import { Bell, Flame, Trophy, Megaphone } from 'lucide-react';

export const SystemNotice: React.FC = () => {
  return (
    <div className="bg-[#FFFBE6] border border-[#FFE58F] text-[#FA8C16] text-sm py-2 px-4 rounded-sm flex items-center overflow-hidden mb-3">
      <div className="flex-shrink-0 mr-4 font-bold flex items-center gap-1">
        <Bell className="w-4 h-4" />
        系统公告
      </div>
      <div className="flex-1 overflow-hidden relative h-6">
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
            <div className="animate-marquee flex items-center gap-12 text-[#595959]">
              <span className="flex items-center gap-1">
                <Flame className="w-4 h-4 text-red-500" />
                <span className="font-medium text-red-500">紧急通知：</span>
                系统将于今晚 02:00 进行例行维护，预计耗时 15 分钟，请提前保存数据。
              </span>
              <span className="flex items-center gap-1">
                <Trophy className="w-4 h-4 text-yellow-600" />
                <span className="font-medium text-blue-600">喜报：</span>
                恭喜上海浦东区张师傅获得本月“服务之星”称号，奖励现金 500 元！
              </span>
              <span className="flex items-center gap-1">
                <Megaphone className="w-4 h-4 text-green-600" />
                <span className="font-medium text-green-600">新功能上线：</span>
                “一键报表”功能已上线，欢迎各位前往数据中心体验。
              </span>
            </div>
        </div>
      </div>
    </div>
  );
};