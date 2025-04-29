
import Layout from "@/components/layout/Layout";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <Layout>
      <div className="container-custom py-12">
        <LoginForm />
      </div>
    </Layout>
  );
};

export default LoginPage;
