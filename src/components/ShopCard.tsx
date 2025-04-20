
import { RepairShop } from '../contexts/AppContext';
import { Star } from 'lucide-react';

interface ShopCardProps {
  shop: RepairShop;
  selected: boolean;
  onClick: () => void;
}

const ShopCard = ({ shop, selected, onClick }: ShopCardProps) => (
  <div 
    className={`autoflow-radio-card mb-3 ${selected ? 'selected' : ''}`}
    onClick={onClick}
  >
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-medium text-autoflow-dark-green">{shop.name}</h3>
        <p className="text-sm text-gray-500">{shop.address}</p>
        <div className="flex items-center mt-1">
          <Star size={16} className="text-autoflow-orange fill-autoflow-orange" />
          <span className="text-sm ml-1">{shop.rating}</span>
          <span className="text-sm text-gray-500 ml-3">{shop.distance} км</span>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-autoflow-green">{shop.price} ₽</p>
      </div>
    </div>
  </div>
);

export default ShopCard;
