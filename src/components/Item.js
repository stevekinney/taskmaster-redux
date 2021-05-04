export const Item = ({ item = {}, toggle = () => {} }) => {
  return (
    <article className="Item">
      <label htmlFor={item.id}>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => {}}
          id={'item-' + item.id + '-toggle'}
        />
        {item.value}
      </label>
    </article>
  );
};
