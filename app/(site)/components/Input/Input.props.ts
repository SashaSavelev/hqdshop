export type Filters = {
    name?: string;
    price?: string;
  }

  export interface IFilterProps {
    filtered: Filters;
  }