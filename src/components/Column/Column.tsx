import { ReactNode } from 'react';

interface ColumnProps {
  children: ReactNode;
  gap?: 'none' | 'small' | 'medium' | 'large'; 
  alignItems?: 'start' | 'center' | 'end'; 
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around'; 
}

const gapMap: Record<NonNullable<ColumnProps['gap']>, string> = {
  none: 'gap-0',
  small: 'gap-2',
  medium: 'gap-4',
  large: 'gap-6',
};

const alignItemsMap: Record<NonNullable<ColumnProps['alignItems']>, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
};

const justifyContentMap: Record<NonNullable<ColumnProps['justifyContent']>, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
};

function Column({
  children,
  gap = 'medium',
  alignItems = 'start',
  justifyContent = 'start',
}: ColumnProps) {
  return (
    <div
      className={`flex flex-col ${gapMap[gap]} ${alignItemsMap[alignItems]} ${justifyContentMap[justifyContent]} bg-gray-100`}
    >
      {children}
    </div>
  );
}

export default Column;