import { ReactNode } from 'react';

interface RowProps {
  children: ReactNode;
  gap?: 'none' | 'small' | 'medium' | 'large'; 
  alignItems?: 'start' | 'center' | 'end'; 
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around'; 
}

const gapMap: Record<NonNullable<RowProps['gap']>, string> = {
  none: 'gap-0',
  small: 'gap-2',
  medium: 'gap-4',
  large: 'gap-6',
};

const alignItemsMap: Record<NonNullable<RowProps['alignItems']>, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
};

const justifyContentMap: Record<NonNullable<RowProps['justifyContent']>, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
};

function Row({
  children,
  gap = 'medium',
  alignItems = 'start',
  justifyContent = 'start',
}: RowProps) {
  return (
    <div
      className={`flex flex-row ${gapMap[gap]} ${alignItemsMap[alignItems]} ${justifyContentMap[justifyContent]} bg-gray-100`}
    >
      {children}
    </div>
  );
}

export default Row;