import { useState } from 'react';

function useToogle(data, value1, value2) {
  const [value, setValue] = useState(() => localStorage.getItem(data) || value1);

  const toogleValue = () => {
    setValue((prevValue) => {
      const newValue = prevValue === value1 ? value2 : value1;
      localStorage.setItem(data, newValue);
      return newValue;
    });
  };

  return [value, toogleValue];
}

export default useToogle;
