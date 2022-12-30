import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 1rem;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  color: var(--color-text);
  line-height: 2.5;
  border-radius: var(--border);
  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 250ms ease;

  &:active,
  &:hover {
    box-shadow: inset 1px 0px 10px -3px rgba(66, 68, 90, 1);
  }
`;
