
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import Layout from '../components/Layout';
import ShopCard from '../components/ShopCard';
import { shops, timeSlots } from '../data/mockData';
import { Calendar } from '@/components/ui/calendar';
import { RepairShop } from '../contexts/AppContext';
import { useToast } from '@/hooks/use-toast';

const ShopSelection = () => {
  const { calculatedPrice, setAppointmentDetails } = useApp();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [selectedShop, setSelectedShop] = useState<RepairShop | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleSelectShop = (shop: RepairShop) => {
    setSelectedShop(shop);
  };

  const handleContinue = () => {
    if (!selectedShop || !selectedDate || !selectedTime) {
      toast({
        title: "Недостаточно данных",
        description: "Выберите сервис, дату и время",
        variant: "destructive",
      });
      return;
    }

    const formattedDate = selectedDate.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    setAppointmentDetails({
      shop: selectedShop,
      date: formattedDate,
      time: selectedTime,
      price: selectedShop.price,
    });

    navigate('/confirmation');
  };

  return (
    <Layout title="Выбор сервиса" showBack backTo="/calculator">
      <div className="mb-6">
        <p className="text-gray-600 mb-2">Примерная стоимость:</p>
        <h2 className="text-2xl font-bold text-autoflow-green">{calculatedPrice} ₽</h2>
      </div>

      <div className="autoflow-card mb-6">
        <h2 className="autoflow-subheading">Выберите автосервис</h2>
        <div className="space-y-2">
          {shops.map((shop) => (
            <ShopCard
              key={shop.id}
              shop={shop}
              selected={selectedShop?.id === shop.id}
              onClick={() => handleSelectShop(shop)}
            />
          ))}
        </div>
      </div>

      <div className="autoflow-card mb-6">
        <h2 className="autoflow-subheading">Выберите дату</h2>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="border rounded-md p-1"
          disabled={(date) => {
            const day = date.getDay();
            return day === 0; // Disable Sundays
          }}
        />
      </div>

      <div className="autoflow-card mb-6">
        <h2 className="autoflow-subheading">Выберите время</h2>
        <div className="grid grid-cols-4 gap-2">
          {timeSlots.map((time) => (
            <button
              key={time}
              className={`py-2 px-1 rounded-md text-sm border ${
                selectedTime === time
                  ? 'bg-autoflow-green text-white border-autoflow-green'
                  : 'bg-white border-gray-200 hover:border-autoflow-green'
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <button
        className="autoflow-btn-primary"
        onClick={handleContinue}
        disabled={!selectedShop || !selectedDate || !selectedTime}
      >
        Далее
      </button>
    </Layout>
  );
};

export default ShopSelection;
