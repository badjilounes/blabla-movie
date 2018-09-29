import {Movie} from './movie.model';

export interface SearchOuput {
  Response: boolean;
  Search: Movie[];
  totalResults: number;
}
