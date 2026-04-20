import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react';

interface InputProps {
  placeholder: string;
  width: number;
  height: number;
  roundedOption: 'left' | 'both' | 'right' | 'none';
  isPassword?: boolean;
  maxChars?: number;
}

const LoginInput = ({placeholder, width, height, roundedOption, isPassword, maxChars}: InputProps) => {
    const roundedClasses = {
        left: 'rounded-l-full',
        right: 'rounded-r-full',
        both: 'rounded-full',
        none: 'rounded-none'
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
        <div className='relative flex items-center' style={{ width: width }}>
            <input 
                type={isPassword ? (isPasswordVisible ? "text" : "password") : "text"} 
                placeholder={placeholder} 
                className={`text-[16px] bg-light-gray px-4 outline-none w-full ${roundedClasses[roundedOption]} ring-primary-clr focus:ring-2`}
                style={{ height: height }} 
                maxLength={maxChars}
            />
            {isPassword && (
                <button 
                    type="button"
                    className='absolute right-4 text-slate-400 hover:text-primary-clr transition-colors' 
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                    {isPasswordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
            )}
            
        </div>
    )
}

export default LoginInput