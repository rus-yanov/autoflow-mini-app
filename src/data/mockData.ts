
import { Service, RepairShop } from "../contexts/AppContext";

// Mock services data
export const services: Service[] = [
  { id: '1', name: 'ТО', icon: '/service-maintenance.svg' },
  { id: '2', name: 'Шиномонтаж', icon: '/service-tire.svg' },
  { id: '3', name: 'Диагностика', icon: '/service-diagnostic.svg' },
  { id: '4', name: 'Мойка', icon: '/service-wash.svg' },
  { id: '5', name: 'Кузовной ремонт', icon: '/service-body.svg' },
  { id: '6', name: 'Электрика', icon: '/service-electric.svg' },
  { id: '7', name: 'Двигатель', icon: '/service-engine.svg' },
  { id: '8', name: 'Тормоза', icon: '/service-brakes.svg' },
];

// Mock shop data
export const shops: RepairShop[] = [
  { 
    id: '1', 
    name: 'АвтоЭксперт', 
    address: 'ул. Ленина, 45', 
    rating: 4.8, 
    price: 3500, 
    distance: 1.2 
  },
  { 
    id: '2', 
    name: 'ГаражПро', 
    address: 'ул. Гагарина, 12', 
    rating: 4.6, 
    price: 3200, 
    distance: 2.4 
  },
  { 
    id: '3', 
    name: 'МастерСервис', 
    address: 'пр. Мира, 78', 
    rating: 4.9, 
    price: 4100, 
    distance: 3.7 
  },
  { 
    id: '4', 
    name: 'АвтоДоктор', 
    address: 'ул. Пушкина, 23', 
    rating: 4.5, 
    price: 2900, 
    distance: 1.8 
  },
];

// Available time slots
export const timeSlots = [
  "9:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"
];

// Car brands
export const carBrands = [
  "Audi", "BMW", "Ford", "Honda", "Hyundai", "Kia", "Lada", "Mazda", 
  "Mercedes-Benz", "Mitsubishi", "Nissan", "Renault", "Skoda", "Toyota", "Volkswagen"
];
