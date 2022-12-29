import styled from "styled-components";

export const WrapperCard = styled.article`
  border-radius: var(--border);
  background-color: var(--color-ui-base);
  cursor: pointer;
  overflow: hidden;
`;
export const StyledCardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;
export const StyledCardBody = styled.div`
  padding: 1rem 1.5rem 1.5rem;
`;
export const StyledCardTitle = styled.h2`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  margin-bottom: 1rem;
`;
export const StyledCardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;
export const StyledCardItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
  & > b {
    font-weight: var(--fw-bold);
  }
`;
