import { OrderItem } from './order-item';
export interface Order {

  id: number;
  date: Date;
  amount: number;
  items: Array<OrderItem>[];

}
