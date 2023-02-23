import { ButtonStyled } from './style/styles.componets';

export function ButtonProvider({ children, action }) {
  return <ButtonStyled onClick={action}>{children}</ButtonStyled>;
}
