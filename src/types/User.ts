export interface User {
  login: string;
  id: number;
  avatar_url: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
}