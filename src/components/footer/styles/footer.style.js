import styled from "styled-components";

const S = {};

S.Container = styled.div`
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  padding: 70px 56px;
  margin: auto;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

S.Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

S.Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

S.Link = styled.a`
  color: #757575;
  margin-bottom;
  font-size: 13px;
  text-decoration: none;
`;

S.Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

S.Text = styled.p``;

S.Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export default S;
