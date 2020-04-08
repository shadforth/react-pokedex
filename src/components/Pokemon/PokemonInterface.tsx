interface PokemonInterface {
  id: string;
  name: string;
  generation: string;
  description: string;
  types: Array<string>;
  resistant: Array<string>;
  weaknesses: Array<string>;
  fast_attacks: Array<string>;
  special_attacks: Array<string>;
  height: {
    minimum: string;
    maximum: string;
  };
  weight: {
    minimum: string;
    maximum: string;
  };
  buddy_distance: string;
  base_stamina: string;
  base_attack: string;
  base_defense: string;
  base_flee_rate: string;
  next_evolution_req: {
    amount: number;
    name: string;
  };
  next_evolution: Array<Object>;
  max_cp: number;
  max_hp: number;
}

export default PokemonInterface;
