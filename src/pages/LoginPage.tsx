import ButtonOutline from '../components/ButtonOutline.tsx'
import ButtonPrimary from '../components/ButtonPrimary.tsx'
import LoginInput from '../components/LoginInput.tsx'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <div className="w-screen h-screen bg-primary-clr grid grid-rows-[1fr_2fr]">
            <div className="w-full flex justify-center items-center">
                <h1 className="text-center font-medium text-secondary-clr">Task tracker</h1>
            </div>
            <div className="w-full bg-secondary-clr rounded-t-[40px] flex flex-col gap-12">
                <div className='w-full flex flex-col items-center mt-10'>
                    <h1 className="font-medium">Login</h1>
                </div>
                <div className='w-full flex flex-col items-center gap-6.25'>
                    <ButtonOutline btnText='Continue with Google' btnIcon='src/assets/GoogleIcon.svg' btnIconSize={35} btnWidth={334} btnHeight={53} btnFontSize={16} />
                    <h4 className='font-medium'>or</h4>
                    <div className='flex flex-col gap-2'>
                        <LoginInput placeholder='Email' width={334} height={51} roundedOption='both' />
                        <LoginInput placeholder='Password' width={334} height={51} roundedOption='both' isPassword maxChars={16} />
                    </div> 
                </div>
                <div className='w-full flex flex-col items-center gap-6.25'>
                    <ButtonPrimary btnText='Create account' btnWidth={334} btnHeight={56} btnFontSize={22} />
                    <h4 className='font-medium text-center w-83.5'>Don't have any account?<Link to='/sign-up'><button className='font-normal underline'>Sign Up</button></Link></h4>
                </div>
            </div>
        </div>
    )
}

export default LoginPage