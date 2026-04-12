import ButtonOutline from '../components/ButtonOutline.tsx'

const SignUpPage = () => {
    return (
        <div className="w-screen h-screen bg-primary-clr grid grid-rows-[1fr_3fr]">
            <div className="w-full flex justify-center items-center">
                <h1 className="text-center font-medium text-secondary-clr">Create an <br /> account</h1>
            </div>
            <div className="w-full bg-secondary-clr rounded-t-[40px]">
                <div>
                    <ButtonOutline btnText='Continue with Google' btnIcon='src/assets/GoogleIcon.svg' btnIconSize={35} btnWidth={318} btnHeight={53} btnFontSize={16} />
                    <h4 className='font-medium'>or</h4>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default SignUpPage