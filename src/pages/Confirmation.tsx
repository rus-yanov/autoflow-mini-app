
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import Layout from '../components/Layout';
import { Car, Calendar, Clock, MapPin, Phone } from 'lucide-react';

const Confirmation = () => {
  const { selectedService, carDetails, appointmentDetails, phoneNumber } = useApp();
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/success');
  };

  return (
    <Layout title="Подтверждение записи" showBack backTo="/shops">
      <div className="autoflow-card mb-6">
        <h2 className="autoflow-subheading">Детали записи</h2>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-autoflow-light-bg text-autoflow-dark-green">
              <Car size={18} />
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Автомобиль</h3>
              <p className="text-autoflow-dark-green">
                {carDetails.brand} {carDetails.model}, {carDetails.year} г.
              </p>
              <p className="text-sm text-gray-500">Пробег: {carDetails.mileage} км</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-autoflow-light-bg text-autoflow-dark-green">
              <Phone size={18} />
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Телефон</h3>
              <p className="text-autoflow-dark-green">{phoneNumber}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-autoflow-light-bg text-autoflow-dark-green">
              <MapPin size={18} />
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Автосервис</h3>
              <p className="text-autoflow-dark-green">{appointmentDetails.shop?.name}</p>
              <p className="text-sm text-gray-500">{appointmentDetails.shop?.address}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-autoflow-light-bg text-autoflow-dark-green">
              <Calendar size={18} />
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Дата</h3>
              <p className="text-autoflow-dark-green">{appointmentDetails.date}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-autoflow-light-bg text-autoflow-dark-green">
              <Clock size={18} />
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Время</h3>
              <p className="text-autoflow-dark-green">{appointmentDetails.time}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="autoflow-card mb-6">
        <h2 className="autoflow-subheading">Услуга и стоимость</h2>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">{selectedService?.name}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-autoflow-green">{appointmentDetails.price} ₽</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <button
          className="autoflow-btn-primary"
          onClick={handleConfirm}
        >
          Записаться
        </button>
        <button
          className="autoflow-btn-secondary"
          onClick={() => navigate('/shops')}
        >
          Изменить
        </button>
      </div>
    </Layout>
  );
};

export default Confirmation;
