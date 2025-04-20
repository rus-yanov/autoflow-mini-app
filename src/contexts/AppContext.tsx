
import { createContext, useContext, useState, ReactNode } from 'react';

export type Service = {
  id: string;
  name: string;
  icon: string;
};

export type CarDetails = {
  brand?: string;
  model?: string;
  year?: string;
  mileage?: string;
};

export type RepairShop = {
  id: string;
  name: string;
  address: string;
  rating: number;
  price: number;
  distance: number;
};

export type AppointmentDetails = {
  date?: string;
  time?: string;
  shop?: RepairShop;
  service?: Service;
  price?: number;
};

interface AppContextType {
  phoneNumber: string;
  setPhoneNumber: (phone: string) => void;
  selectedService: Service | null;
  setSelectedService: (service: Service | null) => void;
  carDetails: CarDetails;
  setCarDetails: (details: CarDetails) => void;
  appointmentDetails: AppointmentDetails;
  setAppointmentDetails: (details: AppointmentDetails) => void;
  calculatedPrice: number | null;
  setCalculatedPrice: (price: number | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [carDetails, setCarDetails] = useState<CarDetails>({});
  const [appointmentDetails, setAppointmentDetails] = useState<AppointmentDetails>({});
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  return (
    <AppContext.Provider value={{
      phoneNumber,
      setPhoneNumber,
      selectedService,
      setSelectedService,
      carDetails,
      setCarDetails,
      appointmentDetails,
      setAppointmentDetails,
      calculatedPrice,
      setCalculatedPrice
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
