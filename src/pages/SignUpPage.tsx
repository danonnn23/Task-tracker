import ButtonOutline from '../components/ButtonOutline.tsx'
import ButtonPrimary from '../components/ButtonPrimary.tsx'
import LoginInput from '../components/LoginInput.tsx'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
    return (
        <div className="w-screen h-screen bg-primary-clr grid grid-rows-[1fr_3fr]">
            <div className="w-full flex justify-center items-center">
                <h1 className="text-center font-medium text-secondary-clr">Create an <br /> account</h1>
            </div>
            <div className="w-full bg-secondary-clr rounded-t-[40px] flex flex-col gap-12">
                <div className='w-full flex flex-col gap-6.25 items-center mt-10'>
                    <ButtonOutline btnText='Continue with Google' btnIcon='src/assets/GoogleIcon.svg' btnIconSize={35} btnWidth={334} btnHeight={53} btnFontSize={16} />
                    <h4 className='font-medium'>or</h4>
                    <div className='w-max flex flex-col gap-2.75'>
                        <div className='grid grid-cols-2 w-full'>
                            <div className="justify-self-start">
                                <LoginInput placeholder='First name' width={160} height={51} roundedOption='left' maxChars={30} />
                            </div>
                            <div className="justify-self-end">
                                <LoginInput placeholder='Last name' width={160} height={51} roundedOption='right' maxChars={30} />
                            </div>
                        </div>
                        <LoginInput placeholder='Email' width={334} height={51} roundedOption='both' />
                        <LoginInput placeholder='Password' width={334} height={51} roundedOption='both' isPassword maxChars={16} />
                    </div>  
                </div>
                <div className='w-full flex flex-col items-center gap-6.25'>
                    <ButtonPrimary btnText='Create account' btnWidth={334} btnHeight={56} btnFontSize={22} />
                    <p className='text-sm text-center w-83.5 text-[#464646] mt-3.5'>Signing up for a Task tracker account means you agree to the <button className='underline font-medium text-black'>Privacy Policy</button> and <button className='underline font-medium text-black'>Terms of Service</button></p>
                    <h4 className='font-medium text-center w-83.5'>Already have an account? <Link to='/log-in'><button className='font-normal underline'>Log in here</button></Link></h4>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage