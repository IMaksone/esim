import { useScreenWidthGreaterThan } from "src/hooks/useScreenWidthGreaterThan";

export default function useInColumn() {
  return !useScreenWidthGreaterThan(650);
}
