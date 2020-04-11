import { useState } from "react";

const useSearchFilter = initialState => {
  const [items, setItems] = useState(initialState);

  const filterItems = (searchParam: string) => {
    if (!searchParam) {
      setItems(initialState);
    }
    setItems(
      initialState.filter(item =>
        item.name.toLowerCase().includes(searchParam.toLowerCase())
      )
    );
  };

  return [items, filterItems];
};

export default useSearchFilter;
