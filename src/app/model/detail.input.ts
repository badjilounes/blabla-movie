export interface DetailInput {
  i?: string;
  t?: string;
  type?: 'movie'|'serie'|'option';
  y?: number;
  plot?: 'short'|'full';
  r?: 'json'|'xml';
  callback?: string;
  v?: number
}
