// SET_TITLE
export function SET_TITLE(title:string) {
  document.title = `${title} | 4i Concept Dashboard by Infomeric`;
  return true;
}

// APIFY
export function APIFY(path:string) {
  const url = String(import.meta.env['VITE_API_ENDPOINT']).concat(path);
  return url;
}

// GET_ACCESS_TOKEN
export function GET_ACCESS_TOKEN() {
  return import.meta.env['VITE_JWT_ACCESS_TOKEN'];
}