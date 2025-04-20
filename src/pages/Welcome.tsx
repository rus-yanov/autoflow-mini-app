
import { useNavigate } from 'react-router-dom';
import { Car, Check } from 'lucide-react';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="autoflow-container flex flex-col items-center justify-center">
      <div className="my-8 animate-slide-up">
        <div className="bg-autoflow-green rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <Car size={40} className="text-white" />
        </div>
        <h1 className="text-3xl font-bold text-center text-autoflow-dark-green mb-2">
          AutoFlow
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Агрегатор автосервисов
        </p>
      </div>

      <div className="w-full autoflow-card mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="autoflow-subheading mb-5">Возможности:</h2>
        <ul className="space-y-4">
          {[
            'Быстрый расчёт стоимости ремонта',
            'Выбор из проверенных автосервисов',
            'Онлайн-запись на удобное время',
            'История обслуживания вашего авто'
          ].map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-autoflow-green flex items-center justify-center mr-3">
                <Check size={14} className="text-white" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button 
        className="autoflow-btn-primary mt-4 animate-slide-up"
        style={{ animationDelay: '0.2s' }}
        onClick={() => navigate('/login')}
      >
        Начать
      </button>
    </div>
  );
};

export default Welcome;
