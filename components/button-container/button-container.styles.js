import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  padding: 40px;
  justify-content: space-evenly;
  height: 250px;
`;
