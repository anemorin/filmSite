import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { colors } from "../../enums"
import InputComponent from "../InputComponent"
import UseStores from "../../hooks/useStores";

interface Props {
  onClick?: () => void;
  error?: string;
}

const UnderTitle = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${colors.gray};
`

const NavigationLink = styled(NavLink)`
  color: ${colors.agonaBlue};
  font-weight: 700;
  text-decoration: none;
`

const Button = styled.button`
  cursor: pointer;
  padding: 14px 40px;
  border: 3px solid ${colors.agonaBlue};
  margin: 110px 0 52px;
  border-radius: 25px;
  color: ${colors.agonaBlue};
  font-weight: 700;
  background-color: ${colors.white};
`

const ErrorMessage = styled.p`
  margin-top: 17px;
  color: ${colors.red};
  font-size: 13px;
  font-weight: 400;
`

const LogIn : React.FC<Props> = ({onClick, error}) => {
  const { accountStore } = UseStores();

  return (
    <>
      <InputComponent
        placeholder="Адрес электронной почты"
        validate="email"
        width="375"
        isRequired={true}
        textAlign="center"
        onChangeValue={(value) => {
          accountStore.setUserMail(value);
        }}
        isError={error ? true : false}
      />
      <InputComponent
        placeholder="Пароль"
        validate="password"
        width="375"
        isRequired={true}
        textAlign="center"
        onChangeValue={(value) => {
          accountStore.setUserPassword(value);
        }}
        isError={error ? true : false}
      />
      {error && (
        <ErrorMessage>{error}</ErrorMessage>
      )}
      <Button
        onClick={onClick}
      >
        Войти
      </Button>
      <UnderTitle>
        Еще не зарегистрированы?
        <NavigationLink to='/authorization/registration'>Регистрация</NavigationLink>
      </UnderTitle>
    </>
  )
}

export default LogIn