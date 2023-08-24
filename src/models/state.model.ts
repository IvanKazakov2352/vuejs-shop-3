import { Item } from "./item.model";

export interface State {
  items: Item[];
  cart: Item[];
  searchResult: Item[];
}
