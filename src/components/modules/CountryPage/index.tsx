import DefaultLayout from "src/components/layout/Defaultlayout";
import HowItWork from "src/components/layout/HowItWork";
import { Country } from "src/types/country";
import Title from "./Title";

type CountryPageProps = {
  country: Country;
};

export default function CountryPage({ country }: CountryPageProps) {
  return (
    <DefaultLayout>
      <Title country={country} />
      <HowItWork />
    </DefaultLayout>
  );
}
