import { useState } from 'react';

export const NewItem = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue('');
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <input
        className="NewItem-input"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <input className="NewItem-submit button" type="submit" />
    </form>
  );
};
