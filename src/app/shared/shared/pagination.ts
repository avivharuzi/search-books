export interface Pagination<T> {
  kind: string;
  totalItems: number;
  items: T[];
}
