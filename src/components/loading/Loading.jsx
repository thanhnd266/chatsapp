import { LoadingStyled } from "./styled";

export default function Loading({ size }) {
  return (
    <LoadingStyled size={size}>
      <i className="loading-spinner fa-duotone fa-spinner-third"></i>
    </LoadingStyled>
  );
}
