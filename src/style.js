import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  .bg-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 243px;
    background-color: var(--bg-pattern);
    z-index: -1;
    @media (max-width: 768px) {
      height: 234px;
      border-radius: 0 0 20px 20px;
    }
  }
`;
