import Select from "react-select";
import styled from "styled-components/macro";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: "var(--color-ui-base)",
      color: "var(--color-text)",
      borderRadius: "var(--border)",
      padding: "0.25rem",
      boxShadow: "var(--shadow)",
      height: "50px",
      borderColor: "transparent",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: "var(--color-text)",
      backgroundColor: state.iSelected
        ? "var(--color-bg)"
        : "var(--color-ui-base)",
    }),
  },
})`
  width: 200px;
  border-radius: var(--border);
  font-family: var(--family-font);
  border: none;
  border-style: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & * {
    color: var(--color-text) !important;
    background-color: var(--color-ui-base);
  }
`;
