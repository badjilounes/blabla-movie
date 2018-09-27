export interface SearchInput {
  s: string;
  type?: 'movie'|'serie'|'option';
  y?: number;
  r?: 'json'|'xml';
  page?: number;
  callback?: string;
  v?: number
}
