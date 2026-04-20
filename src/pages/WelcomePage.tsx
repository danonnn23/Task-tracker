import WelcomeBannerPic from '../assets/WelcomeBannerPic.png'
import ButtonPrimary from '../components/ButtonPrimary.tsx'
import ButtonOutline from '../components/ButtonOutline.tsx'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return (
        <div className='h-screen w-screen grid grid-rows-[1fr_max-content_300px]'> 
            <div className='w-full flex flex-col items-center'>
                <img src={WelcomeBannerPic} alt="Picture" className='w-92.5 mt-auto mb-10' />
            </div>
            <div className='w-full flex flex-col items-center justify-center'>
                <h1 className='text-[32px] font-medium text-primary-clr h-10.5'>Master your workflow</h1>
                <h4 className='text-[16px] font-medium text-sub-primary-clr h-17.75 w-85 text-center flex justify-center items-center'>Plan, track, and complete your tasks with ease. All your projects in one place.</h4>
            </div>
            <div className='w-full flex flex-col items-center justify-center gap-4.5'>
                <Link to='/sign-up'>
                    <ButtonPrimary btnText='Sign Up' btnWidth={318} btnHeight={53} btnFontSize={16}/>
                </Link>
                <Link to='/log-in'>
                    <ButtonOutline btnText='Log In' btnWidth={318} btnHeight={53} btnFontSize={16}/>
                </Link>
                <ButtonOutline btnText='Continue with Google' btnIcon='src/assets/GoogleIcon.svg' btnIconSize={35} btnWidth={318} btnHeight={53} btnFontSize={16}/>
            </div>
        </div>
    )
}

export default WelcomePage