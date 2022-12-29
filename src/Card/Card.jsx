import {
  WrapperCard,
  StyledCardImage,
  StyledCardBody,
  StyledCardItem,
  StyledCardList,
  StyledCardTitle,
} from "./StyledCard";

export const Card = ({ image, countryName, info, onClick }) => {
  return (
    <WrapperCard onClick={onClick}>
      <StyledCardImage src={image} alt={countryName} />
      <StyledCardBody>
        <StyledCardTitle>{countryName}</StyledCardTitle>
        <StyledCardList>
          {info &&
            info.map((el) => (
              <StyledCardItem key={el.title}>
                <b>{el.title}:</b> {el.description}
              </StyledCardItem>
            ))}
        </StyledCardList>
      </StyledCardBody>
    </WrapperCard>
  );
};
