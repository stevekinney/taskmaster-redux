import { Item } from './Item';
import { NewItem } from './NewItem';

export const Items = ({ items = [] }) => {
  return (
    <div className="Items">
      <NewItem />
      {items.map((item) => (
        <Item key={item.itemId} {...item} />
      ))}
    </div>
  );
};

export default Items;
