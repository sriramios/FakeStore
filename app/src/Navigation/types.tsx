import {Product} from '../Interfaces/Products';

export type RootStackParamList = {
  Landing: undefined;
  Detail: {product: Product};
  Cart: undefined;
};
