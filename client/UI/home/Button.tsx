
interface ButtonProps{
    className:string;
    text:string;
    onClick?:() => void
}

const Button = ({className, text, onClick}:ButtonProps) => {
  return (
    <button className={`border rounded-md my-[2%] py-[1%] ${className}`} onClick={onClick}> {text}</button>
  )
}

export default Button