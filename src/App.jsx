import React from "react";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

// const Button = (props) => {
//   const {children, variant = 'bg-black'} = props;
//   return (
//     <button className={`rounded-none text-white ${props.variant} p-2`}>
//       {props.textButton}
//       {/* {children} */}
//       </button>

//   );
// };
// Kodingan di atas sudah di pindahkan ke components/Elements/Button

/*
<div className="flex gap-x-3">
        <Button variant="bg-red-700" textButton="Button First"/>
        <Button variant="bg-slate-700">Login</Button>
        <Button variant="bg-black" textButton="Button Last"/>
</div>
*/
// Kodingan di atas seharusnya berada di dalam function App()

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      {/* <LoginPage/> */}
      <RegisterPage/>
    </div>
  )
}

export default App;