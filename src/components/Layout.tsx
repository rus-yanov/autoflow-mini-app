
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  showBack?: boolean;
  backTo?: string;
}

const Layout = ({ children, title, showBack, backTo }: LayoutProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (backTo) {
      navigate(backTo);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="autoflow-container animate-fade-in">
      <header className="mb-6 flex items-center">
        {showBack && (
          <button 
            onClick={handleBack}
            className="p-2 mr-2 rounded-full hover:bg-gray-100 text-autoflow-dark-green"
          >
            <ArrowLeft size={20} />
          </button>
        )}
        {title && <h1 className="autoflow-heading">{title}</h1>}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
