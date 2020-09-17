import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

const S = {};

S.Background = styled.section`
  display: flex;
  flex-direction: column;
`;

S.Container = styled.div``;

S.Link = styled.p``;

S.ButtonLink = styled(ReachRouterLink)``;

S.Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export default S;
