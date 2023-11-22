import axios from "axios";

const instance = axios.create({
  baseURL : "https://api.themoviedb.org",
  params: {
    api_key: "ecdc41d5eebb39500d1821be32a1e9a9",
    access_token: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2RjNDFkNWVlYmIzOTUwMGQxODIxYmUzMmExZTlhOSIsInN1YiI6IjY1NWUwYmE0ZDM5OWU2MDY5YzJlNjhmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bxeTgWtK6AXAZSF92ioFJiIPwm9Ky3d4B-UCN04gZHI",
    language: "ko-KR",
  }
});

export default instance;
