import {Movie} from './movie.model';

export interface SearchOutput {
  Response: string;
  Search: Movie[];
  totalResults: number;
}
