import styled from "styled-components";

export const GradeScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 25px 90px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border: 5px solid ${(props) => props.theme.colors.primary};
  padding: 20px;
  border-radius: 5%;
  background-color: ${(props) => props.theme.colors.light};

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 900px) {
    width: 200px;
    margin-right: auto;
    padding: 2px;
  }
`;
