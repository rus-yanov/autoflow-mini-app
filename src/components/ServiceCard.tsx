
import { Service } from '../contexts/AppContext';

interface ServiceCardProps {
  service: Service;
  selected: boolean;
  onClick: () => void;
}

const ServiceCard = ({ service, selected, onClick }: ServiceCardProps) => (
  <div 
    className={`autoflow-service-card ${selected ? 'border-autoflow-green bg-autoflow-light-bg' : ''}`}
    onClick={onClick}
  >
    <div className="w-12 h-12 flex items-center justify-center mb-2 text-autoflow-dark-green">
      <img src={service.icon} alt={service.name} className="w-8 h-8" />
    </div>
    <span className="text-sm font-medium">{service.name}</span>
  </div>
);

export default ServiceCard;
