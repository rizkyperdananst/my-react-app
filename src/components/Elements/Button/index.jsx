const Button = (props) => {
     const {textButton, classname = 'bg-black'} = props;
     return (
       <button className={`rounded-none text-white ${props.classname} p-2`}>
         {/* {props.textButton} */}Login
         </button>
       
     );
   };

export default Button;