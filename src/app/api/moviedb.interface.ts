export interface IMovieDbQuery {
  api_key: string;
  sort_by?: string;
}

export interface IMovieDbList {
  page: number;
  results: IMovieDbListItem[];
  total_pages: number;
  total_results: number;
}

export interface IMovieDbListItem {
  adult: boolean;
  backdrop_path: any;
  genre_ids: any[];
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: 0;
  poster_path: any;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  homepage:string;
  runtime:number;
  voteaverage: number;
  genres: []
}

export interface IMovieDbDetail {
  id: number;
  original_language: string;
  title:string,
  original_title: string;
  overview: string;
  popularity: number;
}
