export const useReplace = (query, value) => {
  let url = new URL(window.location.href);
  url.searchParams.set(query, value);
  if (!value && query !== 0) {
    url.searchParams.delete(query);
  }
  return url.search;
};
