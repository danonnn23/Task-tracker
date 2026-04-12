interface ButtonProps {
  btnText: string;
  btnIcon?: string;
  btnIconSize?: number;
  btnWidth: number;
  btnHeight: number;
  btnFontSize: number;
  onClick?: () => void;
}

const ButtonOutline = ({btnText, btnIcon = "", btnIconSize, btnWidth, btnHeight, btnFontSize}: ButtonProps) => {
    return (
        <button style={{width: btnWidth, height: btnHeight, fontSize: btnFontSize}}
                className="text-primary-clr border-2 border-primary-clr rounded-[10px] flex flex-row justify-center items-center gap-3">
            {btnIcon && <img src={btnIcon} alt="icon" style={{ width: btnIconSize }} />}
            {btnText}
        </button>
    )
}

export default ButtonOutline