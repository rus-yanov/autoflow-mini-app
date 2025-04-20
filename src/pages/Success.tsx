
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import Layout from '../components/Layout';
import { Check } from 'lucide-react';

const Success = () => {
  const { appointmentDetails } = useApp();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-autoflow-green rounded-full w-20 h-20 flex items-center justify-center mb-6 animate-fade-in">
          <Check size={40} className="text-white" />
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-2 text-autoflow-dark-green animate-slide-up">
          Запись подтверждена!
        </h1>
        
        <p className="text-center text-gray-600 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Вы успешно записались на сервис
        </p>
        
        <div className="autoflow-card w-full mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-center">
            <p className="font-medium mb-1">{appointmentDetails.shop?.name}</p>
            <p className="text-gray-500 mb-3">{appointmentDetails.shop?.address}</p>
            
            <div className="flex justify-center space-x-4 mb-2">
              <span className="font-bold">{appointmentDetails.date}</span>
              <span className="font-bold">{appointmentDetails.time}</span>
            </div>
            
            <p className="font-bold text-autoflow-green">{appointmentDetails.price} ₽</p>
          </div>
        </div>
        
        <div className="space-y-4 w-full animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <button
            className="autoflow-btn-primary"
            onClick={() => navigate('/')}
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
