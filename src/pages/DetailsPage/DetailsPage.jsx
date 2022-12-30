import { useState, useEffect } from "react";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";
import { useParams, useNavigate } from "react-router-dom";
import { StyledDetailsPage } from "./StyledDetailsPage";
import { searchByCountry } from "../../config";
import { StyledButton } from "../../components/Button/Button";
import Info from "../../components/Info/Info";

const DetailsPage = () => {
  const [country, setCountry] = useState(null);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <StyledDetailsPage>
      <StyledButton onClick={() => navigate(-1)}>
        <IoArrowBack />
      </StyledButton>
      {country && <Info {...country} />}
    </StyledDetailsPage>
  );
};

export default DetailsPage;
