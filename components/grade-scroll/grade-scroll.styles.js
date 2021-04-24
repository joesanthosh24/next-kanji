import styled from "styled-components";

export const GradeScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 25px 90px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  min-width: 150px;
  margin-right: 15px;
  margin-top: 10px;
  height: 250px;
  line-height: 110px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.dark};
`;
