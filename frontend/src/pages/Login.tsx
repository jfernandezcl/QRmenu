import LoginForm from "../components/LoginForm";
import Header from "../components/Header";

function Login() {
  return (
    <div className="bg-background">
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
