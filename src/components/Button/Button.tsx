export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'secondary' | 'link';
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded' | 'boxed';
  disabled?: boolean;
  className?: string;
  onClick: () => void;
}

function Button({
  label,
  variant = 'primary',
  size = 'medium',
  shape = 'rounded',
  disabled = false,
  className = '',
  onClick,
}: ButtonProps): JSX.Element {
  const buttonClass = `
    ${variant === 'primary' 
      ? 'bg-blue-500 text-white hover:bg-blue-600'
      : variant === 'success'
      ? 'bg-green-500 text-white hover:bg-green-600' 
      : variant === 'danger'
      ? 'bg-red-500 text-white hover:bg-red-600' 
      : variant === 'warning'
      ? 'bg-yellow-500 text-black hover:bg-yellow-600' 
      : variant === 'link'
      ? 'text-blue-500 hover:underline' 
      : 'bg-gray-500 text-white hover:bg-gray-600'} 
    ${size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base'}
    ${shape === 'rounded' ? 'rounded-full' : 'rounded-none'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    px-4 py-2 ${className}
  `;

  return (
    <button
      className={buttonClass}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;