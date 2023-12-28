import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { login } from "../../services/auth.service";
import { useState } from "react";

const FormLogin = () => {
     const [loginFailed, setLoginFailed] = useState("");
     const handleLogin = (event) => {
          event.preventDefault();
          // fungsi event.preventDefault yaitu menghandle agar eventnya agar tida bertabrakan.
          // localStorage.setItem('email', event.target.email.value);
          // localStorage.setItem('password', event.target.password.value);
          // console.log(event.target.email.value);
          // console.log(event.target.password.value);
          // console.log('Anda berhasil login');
          // window.location.href="/products";
          const data  = {
               username: event.target.username.value,
               password: event.target.password.value,
          }
          login(data, (status, res) => {
               if (status) {
                    localStorage.setItem("token", res);
                    window.location.href="/products";
               } else {
                    setLoginFailed(res.response.data);
                    // console.log(res.response.data);
               }
          });
          // login(event.target.email.value, event.target.password.value)
     };

     return (
          <form onSubmit={handleLogin}>
               {loginFailed && <p className="text-red-500">{loginFailed}</p>}
               <InputForm label="username" type="username" placeholder="jhon doe" name="username" />
               <InputForm label="Password" type="password" placeholder="*****" name="password" />
               <Button type="submit" classname="bg-blue-600 w-full">Login</Button>
          </form>
     )
}

export default FormLogin;