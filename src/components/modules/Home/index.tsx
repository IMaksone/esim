import DefaultLayout from "src/components/layout/Defaultlayout";
import Title from "./Title";
import SearchWrapper from "./SearchWrapper";

export default function Home() {
  return (
    <DefaultLayout>
      <Title />
      <SearchWrapper />
    </DefaultLayout>
  );
}
