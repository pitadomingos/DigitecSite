import React from 'react';

interface DigitecLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  light?: boolean;
}

const DigitecLogo: React.FC<DigitecLogoProps> = ({ className = '', size = 'md', light = false }) => {
  const sizeClasses = {
    sm: 'scale-75',
    md: 'scale-100',
    lg: 'scale-125',
    xl: 'scale-150'
  };

  const textColor = light ? 'text-white' : 'text-[#001A4D]';
  const iconBlue = light ? 'bg-white/90' : 'bg-[#001A4D]';
  const orangeColor = '#F07D31';
  const cyanColor = '#00A3C4';

  return (
    <div className={`flex items-center gap-2 select-none ${sizeClasses[size]} ${className}`}>
      {/* Abstract Squares Icon */}
      <div className="flex gap-0.5">
        <div className="flex flex-col gap-0.5">
          <div className="w-2 h-2 bg-[#00A3C4] rounded-[1px]"></div>
          <div className="w-2 h-2 bg-[#F07D31] rounded-[1px]"></div>
          <div className="w-2 h-2 bg-[#00A3C4] rounded-[1px]"></div>
        </div>
        <div className="flex flex-col gap-0.5 mt-2.5">
           <div className={`w-2 h-2 ${iconBlue} rounded-[1px]`}></div>
           <div className={`w-2 h-2 ${iconBlue} rounded-[1px]`}></div>
        </div>
      </div>

      <div className="flex items-baseline ml-1">
        <span className={`text-2xl font-black tracking-tighter ${textColor}`}>DIGITEC</span>
        <div className="flex flex-col items-center ml-0.5">
          <span className="text-[0.65rem] font-black text-[#F07D31] leading-none">Lda</span>
          <div className="w-full h-[2px] bg-[#F07D31] mt-[1px]"></div>
        </div>
      </div>
    </div>
  );
};

export default DigitecLogo;
