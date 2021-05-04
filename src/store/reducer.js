import { ITEM_ADDED } from './actions';

let id = 1;

export const initialState = [
  { itemId: id++, value: 'Put away the groceries', done: false },
  { itemId: id++, value: 'Do the dishes', done: true }
];

export const reducer = (state = initialState, action) => {
  if (action.type === ITEM_ADDED) {
    return [
      ...state,
      {
        itemId: id++,
        value: action.payload.value,
        done: false
      }
    ];
  }

  return state;
};
