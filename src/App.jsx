import { useEffect, useState } from "react";
import axios from "axios";
import Controls from "./components/Controls/Controls";
import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { ALL_COUNTRIES } from "./config";
import List from "./components/List/List";
import { Card } from "./Card/Card";

function App() {
  const [countries, setCountries] = useState([]);

  console.log(countries);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Controls />
        <List>
          {countries &&
            countries.map((country) => {
              const countryInfo = {
                image: country.flags.png,
                countryName: country.name,
                info: [
                  {
                    title: "Population",
                    description: country.population.toLocaleString(),
                  },
                  {
                    title: "Region",
                    description: country.region,
                  },
                  {
                    title: "Capital",
                    description: country.capital,
                  },
                ],
              };

              return <Card key={country.name} {...countryInfo} />;
            })}
        </List>
      </Main>
    </>
  );
}

export default App;
