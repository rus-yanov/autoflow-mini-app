
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [phone, setPhone] = useState('');
  const { setPhoneNumber } = useApp();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!phone || phone.length < 10) {
      toast({
        title: "Ошибка",
        description: "Введите корректный номер телефона",
        variant: "destructive",
      });
      return;
    }
    
    setPhoneNumber(phone);
    navigate('/services');
  };

  return (
    <Layout title="Вход" showBack>
      <div className="autoflow-card my-8">
        <h2 className="autoflow-subheading mb-6">Введите номер телефона</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Телефон
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone size={18} className="text-gray-400" />
              </div>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pl-10 autoflow-input"
              />
            </div>
          </div>
          
          <Button type="submit" className="autoflow-btn-primary">
            Продолжить
          </Button>
        </form>
      </div>
      
      <p className="text-sm text-center text-gray-500 mt-4">
        Нажимая кнопку "Продолжить", вы соглашаетесь с правилами сервиса и политикой конфиденциальности
      </p>
    </Layout>
  );
};

export default Login;
