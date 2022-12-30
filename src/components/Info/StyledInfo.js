import styled from "styled-components/macro";

export const WrapperInfo = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5 rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

export const StyledInfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const StyledInfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

export const StyledInfoListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

export const StyledInfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledInfoListItem = styled.li`
  line-height: 1.8;
  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const StyledInfoMeta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledInfoTagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const StyledInfoTag = styled.span`
  padding: 0.5rem 1rem;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  border-radius: var(--border);
  user-select: none;
  transition: all 250ms ease;

  &:active,
  &:hover {
    box-shadow: inset 1px 0px 10px -3px rgba(66, 68, 90, 1);
  }
`;
