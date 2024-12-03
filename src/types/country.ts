export type Country = {
  cost_per_day: string;
  cost_per_gb: string;
  country: string;
  fl_unlimited: string;
  id: string;
  iso: string;
  new: boolean;
  operators: Operator[];
  popular: string;
  price: Price;
  price_per_day: Price;
  search: string[];
  url: string;
};

type Price = {
  amount: string;
  currency: string;
  iso2: string;
  iso3: string;
  symbol: string;
};

type Operator = {
  generation: generationEl[];
  phone_view: string;
  prefix: string;
};

type generationEl = { name: string };
