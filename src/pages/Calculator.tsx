
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import Layout from '../components/Layout';
import { carBrands } from '../data/mockData';
import { Select } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Calculator = () => {
  const { selectedService, setCarDetails, setCalculatedPrice } = useApp();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');

  const calculatePrice = () => {
    // Simple validation
    if (!brand || !model || !year || !mileage) {
      toast({
        title: "Недостаточно данных",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive",
      });
      return;
    }

    // This would be a more complex calculation in a real app
    // For now, we'll use a simple algorithm based on the inputs
    const basePrice = 2500;
    const brandMultiplier = brand === 'Audi' || brand === 'BMW' || brand === 'Mercedes-Benz' ? 1.5 : 1.2;
    const yearFactor = 1 + (2023 - parseInt(year)) * 0.05;
    const mileageFactor = 1 + parseInt(mileage) / 50000 * 0.1;
    
    const finalPrice = Math.round(basePrice * brandMultiplier * yearFactor * mileageFactor);
    
    // Save car details
    setCarDetails({
      brand,
      model,
      year,
      mileage
    });
    
    // Save calculated price
    setCalculatedPrice(finalPrice);
    
    // Navigate to shop selection
    navigate('/shops');
  };

  return (
    <Layout title="Калькулятор стоимости" showBack backTo="/services">
      {selectedService && (
        <div className="mb-6">
          <p className="text-gray-600">Выбранная услуга: <strong>{selectedService.name}</strong></p>
        </div>
      )}
      
      <div className="autoflow-card mb-6">
        <h2 className="autoflow-subheading">Информация об автомобиле</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
              Марка
            </label>
            <select
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="autoflow-input"
            >
              <option value="">Выберите марку</option>
              {carBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
              Модель
            </label>
            <Input
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Модель автомобиля"
              className="autoflow-input"
            />
          </div>
          
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
              Год выпуска
            </label>
            <Input
              id="year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Например: 2018"
              className="autoflow-input"
              min="1990"
              max="2023"
            />
          </div>
          
          <div>
            <label htmlFor="mileage" className="block text-sm font-medium text-gray-700 mb-1">
              Пробег (км)
            </label>
            <Input
              id="mileage"
              type="number"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              placeholder="Например: 75000"
              className="autoflow-input"
            />
          </div>
        </div>
      </div>
      
      <Button
        onClick={calculatePrice}
        className="autoflow-btn-primary"
      >
        Рассчитать стоимость
      </Button>
    </Layout>
  );
};

export default Calculator;
