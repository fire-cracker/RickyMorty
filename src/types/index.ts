export interface ICharacter {
  id: number;
  name: string;
  origin: {
    name: string;
    url: string;
  },
  location: {
    name: string;
    url: string;
  },
  image: string;
  gender: string;
  species: string;
  status: string;
  url: string;
  type: string;
  episodes: string[]
  created: Date
}