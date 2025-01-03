import ky from "ky";

const httpClient = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
});

export default httpClient;
