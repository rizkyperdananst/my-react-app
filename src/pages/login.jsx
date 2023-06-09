import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
     return (
          <AuthLayouts title="Login" type="login">
               <FormLogin />
               {/* <p className="text-sm mt-5 text-center">Don't have an account? <a href="/register" className="font-bold text-blue-600">Sign up</a></p> */}
               
          </AuthLayouts>
     )
}

export default LoginPage;