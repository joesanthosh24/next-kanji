import styled from "styled-components";

export const StudyContainer = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.light};
  padding: 100px;

  h1 {
    margin-bottom: 50px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
`;
