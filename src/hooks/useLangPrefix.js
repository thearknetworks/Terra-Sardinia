import { useParams } from "react-router-dom";

export function useLangPrefix() {
  const { lang } = useParams();
  return `/${lang || "en"}`;
}
