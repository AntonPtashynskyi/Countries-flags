import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
`;
export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const StyledTitle = styled(Link).attrs({ to: "/" })`
  color: var(--color-text);
  font-size: var(--fs-md);
  font-weight: var(--fw-normal);

  text-decoration: none;
  text-transform: capitalize;
`;
export const ThemeSwitcher = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: var(--fs-sm);
`;
