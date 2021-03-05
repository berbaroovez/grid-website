import styled from "styled-components";

export default function MenuCircleIcon() {
  return (
    <MenuIcon>
      <svg viewBox="0 0 12 12" width="34px" height="34px">
        <circle
          cx="6"
          cy="6"
          r="3"
          stroke-width="1"
          fill="none"
          stroke="black"
        />
      </svg>
    </MenuIcon>
  );
}

const MenuIcon = styled.div`
  width: 34px;
  height: 34px;

  &:hover svg {
    fill: "blue";
  }
`;
