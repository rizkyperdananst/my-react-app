const Button = (props) => {
     const {textButton, classname = 'bg-black', onClick = () => {}, type="button"} = props;
     return (
       <button type={type} className={`rounded-none text-white ${props.classname} p-2`} onClick={onClick}>
         {/* {props.textButton} */}Login
         </button>
       
     );
   };

export default Button;