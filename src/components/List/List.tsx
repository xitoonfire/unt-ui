export interface ListProps {
  items: string[];
  type?: 'ordered' | 'unordered'; 
  className?: string;
  itemClassName?: string; 
}

function List({ items, type = 'unordered', className = '', itemClassName = '' }: ListProps) {
  const ListTag = type === 'ordered' ? 'ol' : 'ul'; 
  const listStyle = type === 'ordered' ? 'list-decimal' : 'list-disc'; 

  return (
    <ListTag className={`pl-5 ${listStyle} ${className}`}>
      {items.map((item, index) => (
        <li key={index} className={`${itemClassName}`}>
          {item}
        </li>
      ))}
    </ListTag>
  );
}

export default List;