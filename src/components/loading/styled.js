import styled from "styled-components";

export const LoadingStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loading-spinner {
    font-size: ${(props) => (props.size ? props.size : "32px")} !important;
    animation: spinner 1.5s linear infinite;
  }
`;
