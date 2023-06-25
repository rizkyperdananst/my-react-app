import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
     const handleLogin = (event) => {
          event.preventDefault();
          // fungsi event.preventDefault yaitu menghandle agar eventnya agar tida bertabrakan.
          localStorage.setItem('email', event.target.email.value);
          localStorage.setItem('password', event.target.password.value);
          console.log(event.target.email.value);
          console.log(event.target.password.value);
          console.log('Anda berhasil login');
          window.location.href="/products";
     };

     return (
          <form onSubmit={handleLogin}>
               <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email" />
               <InputForm label="Password" type="password" placeholder="*****" name="password" />
               <Button type="submit" classname="bg-blue-600 w-full">Login</Button>
          </form>
     )
}

export default FormLogin;