import { useEffect } from "react";
import axios from "axios";

import Controls from "../components/Controls/Controls";
import List from "../components/List/List";
import { Card } from "../Card/Card";
import { useNavigate } from "react-router-dom";

import { ALL_COUNTRIES } from "../config";

const HomePage = ({ countries, setCountries }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
  }, [countries.length, setCountries]);

  return (
    <>
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

            return (
              <Card
                key={country.name}
                {...countryInfo}
                onClick={() => navigate(`/country/${country.name}`)}
              />
            );
          })}
      </List>
    </>
  );
};

export default HomePage;
