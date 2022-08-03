import { useSearchParams } from "react-router-dom";

export const useTagQuery = () => {
  const [searchParams] = useSearchParams();
  return searchParams.get("tag") || "";
};
