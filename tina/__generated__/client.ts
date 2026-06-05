import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '7e8da812de656dd5880684852be58d99dc7a539e', queries,  });
export default client;
  