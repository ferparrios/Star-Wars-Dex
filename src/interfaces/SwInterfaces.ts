
export interface SimpleObject {
  name: string
  img: string
}

export interface People {
  count:    number;
  next:     string;
  previous: null;
  results:  PeopleResult[];
}

export interface PeopleResult {
  name:       string;
  height:     string;
  mass:       string;
  hair_color: string;
  skin_color: string;
  eye_color:  string;
  birth_year: string;
  gender:     Gender;
  homeworld:  string;
  films:      string[];
  species:    string[];
  vehicles:   string[];
  starships:  string[];
  created:    string;
  edited:     string;
  url:        string;
}

export enum Gender {
  Female = "female",
  Male = "male",
  NA = "n/a",
}

export interface Films {
  count:    number;
  next:     null;
  previous: null;
  results:  FilmsResult[];
}

export interface FilmsResult {
  title:         string;
  episode_id:    number;
  opening_crawl: string;
  director:      string;
  producer:      string;
  release_date:  string;
  characters:    string[];
  planets:       string[];
  starships:     string[];
  vehicles:      string[];
  species:       string[];
  created:       string;
  edited:        string;
  url:           string;
}
