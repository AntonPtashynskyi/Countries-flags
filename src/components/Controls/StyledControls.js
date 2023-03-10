import styled from "styled-components/macro";

export const WrapperControls = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
