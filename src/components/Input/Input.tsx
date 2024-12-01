import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isRequired?: boolean;
}

function Input({ type = 'text', isRequired, ...props }: InputProps) {
  return (
    <div className="flex flex-col mb-4">
      <input
        type={type}
        className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          isRequired ? 'border-red-500' : 'border-gray-300'
        } w-full max-w-xs`} 
        required={isRequired}
        {...props}
      />
    </div>
  );
}

export default Input;