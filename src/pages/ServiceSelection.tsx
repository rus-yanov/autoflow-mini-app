
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/mockData';
import { Service } from '../contexts/AppContext';

const ServiceSelection = () => {
  const { setSelectedService } = useApp();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Service | null>(null);

  const handleSelect = (service: Service) => {
    setSelected(service);
  };

  const handleContinue = () => {
    if (selected) {
      setSelectedService(selected);
      navigate('/calculator');
    }
  };

  return (
    <Layout title="Выбор услуги" showBack>
      <div className="mb-6">
        <p className="text-gray-600">Выберите тип услуги для вашего автомобиля:</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            selected={selected?.id === service.id}
            onClick={() => handleSelect(service)}
          />
        ))}
      </div>

      <button
        className="autoflow-btn-primary"
        onClick={handleContinue}
        disabled={!selected}
      >
        Далее
      </button>
    </Layout>
  );
};

export default ServiceSelection;
