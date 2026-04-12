interface ButtonProps {
  btnText: string;
  btnIcon?: string;
  btnIconSize?: number;
  btnWidth: number;
  btnHeight: number;
  btnFontSize: number;
  onClick?: () => void;
}

const ButtonPrimary = ({btnText, btnIcon = "", btnIconSize, btnWidth, btnHeight, btnFontSize}: ButtonProps) => {
    return (
        <button style={{width: btnWidth, height: btnHeight, fontSize: btnFontSize}}
                className="text-secondary-clr bg-primary-clr rounded-[10px] flex flex-row justify-center items-center gap-3">
            {btnIcon && <img src={btnIcon} alt="icon" style={{ width: btnIconSize }} />}
            {btnText}
        </button>
    )
}

export default ButtonPrimary