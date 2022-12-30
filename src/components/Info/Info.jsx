import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { filteredByCode } from "../../config";
import {
  WrapperInfo,
  StyledInfoImage,
  StyledInfoTitle,
  StyledInfoListGroup,
  StyledInfoList,
  StyledInfoListItem,
  StyledInfoMeta,
  StyledInfoTagGroup,
  StyledInfoTag,
} from "./StyledInfo";

const Info = (props) => {
  const [neighbors, setNeighbors] = useState([]);
  const navigate = useNavigate();

  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
  } = props;

  useEffect(() => {
    if (!borders.length) return;

    axios
      .get(filteredByCode(borders))
      .then(({ data }) => setNeighbors(data.map((country) => country.name)));
  }, [borders]);

  return (
    <WrapperInfo>
      <StyledInfoImage src={flag} alt={name} />
      <div>
        <StyledInfoTitle>{name}</StyledInfoTitle>
        <StyledInfoListGroup>
          <StyledInfoList>
            <StyledInfoListItem>
              <b>Native name:</b> {nativeName}
            </StyledInfoListItem>
            <StyledInfoListItem>
              <b>Population:</b> {population}
            </StyledInfoListItem>
            <StyledInfoListItem>
              <b>Region</b> {region}
            </StyledInfoListItem>
            <StyledInfoListItem>
              <b>Sub region: </b> {subregion}
            </StyledInfoListItem>
            <StyledInfoListItem>
              <b>Capital: </b> {capital}
            </StyledInfoListItem>
          </StyledInfoList>
          <StyledInfoList>
            <StyledInfoListItem>
              <b>Top level domain:</b>{" "}
              {topLevelDomain?.map((dom) => (
                <span key={dom}>{dom}</span>
              ))}
            </StyledInfoListItem>
            <StyledInfoListItem>
              <b>Currency: </b>
              {currencies?.map((cur) => (
                <span key={cur.name}>
                  {cur.name}, {cur.symbol}
                </span>
              ))}
            </StyledInfoListItem>
            <StyledInfoListItem>
              <b>Languages: </b>
              {languages?.map((lang) => {
                return <span key={lang.name}>{lang.name}</span>;
              })}
            </StyledInfoListItem>
          </StyledInfoList>
        </StyledInfoListGroup>
        <StyledInfoMeta>
          <b>Border Countries</b>{" "}
          {!neighbors.length ? (
            <span>There is no border countries</span>
          ) : (
            <StyledInfoTagGroup>
              {neighbors.map((borderCountryName) => (
                <StyledInfoTag
                  key={borderCountryName}
                  onClick={() => navigate(`/country/${borderCountryName}`)}
                >
                  {borderCountryName}{" "}
                </StyledInfoTag>
              ))}
            </StyledInfoTagGroup>
          )}
        </StyledInfoMeta>
      </div>
    </WrapperInfo>
  );
};

export default Info;
