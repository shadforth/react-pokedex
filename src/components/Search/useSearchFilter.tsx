import { useState } from "react";
import ALL_POKEMON from "../../data/pokemon.json";

const useSearchFilter = () => {
  const [items, setItems] = useState(ALL_POKEMON);

  const filterItems = ({ query }: { query: string }) => {
    setItems(
      ALL_POKEMON.filter(pokemon =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return { items, filterItems };
};

export default useSearchFilter;
