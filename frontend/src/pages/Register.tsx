import RegisterForm from "../components/RegisterForm";
import Header from "../components/Header";

function Register() {
  return (
    <div className="bg-background">
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
