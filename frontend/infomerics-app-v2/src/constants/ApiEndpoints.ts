import { APIFY } from "@/helpers/Base";

const ENDPOINTS:any = {
  "ROLES.LIST": "/v1/roles",
  "USERS.LIST": "/v1/users"
};

const GET_ENDPOINT = (ctx:string) => {
  const endpoint = ENDPOINTS[ctx];
  if (!endpoint) {
    throw new Error(`ENDPOINT_REQUEST_KEY_FAILED`);
  }
  return String(APIFY(endpoint));
}

export {
  ENDPOINTS,
  GET_ENDPOINT,
}