
import LoginForm from "@/components/auth/LoginForm";

const AdminLoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <LoginForm isAdmin={true} />
    </div>
  );
};

export default AdminLoginPage;
