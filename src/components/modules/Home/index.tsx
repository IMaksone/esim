import DefaultLayout from "src/components/layout/Defaultlayout";
import Title from "./Title";
import Countries from "./Countries";
import SearchWrapper from "./SearchWrapper";
import HowItWork from "src/components/layout/HowItWork";

export default function Home() {
  return (
    <DefaultLayout>
      <Title />
      <SearchWrapper />
      <Countries />
      <HowItWork />
    </DefaultLayout>
  );
}
