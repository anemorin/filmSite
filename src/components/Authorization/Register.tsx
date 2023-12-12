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

const Register : React.FC<Props> = ({onClick, error}) => {
  const { accountStore } = UseStores();

  return (
    <>
      <InputComponent
        placeholder="Адрес электронной почты"
        validate="email"
        width="375"
        isRequired={true}
        textAlign="center"
        isError={error ? true : false}
        onChangeValue={(value) => {
          accountStore.setUserMail(value);
        }}
      />
      <InputComponent
        placeholder="Пароль"
        validate="password"
        width="375"
        isRequired={true}
        textAlign="center"
        isError={error ? true : false}
        onChangeValue={(value) => {
          accountStore.setUserPassword(value);
        }}
      />
      <InputComponent
        placeholder="Повторите пароль"
        validate="password"
        width="375"
        isRequired={true}
        textAlign="center"
        isError={error ? true : false}
        onChangeValue={(value) => {
          accountStore.setRegistrationSecondPassword(value);
        }}
      />
      {error && (
        <ErrorMessage>{error}</ErrorMessage>
      )}
      <Button
        onClick={onClick}
      >
       Регистрация
      </Button>
      <UnderTitle>
        Есть логин для входа?
      <NavigationLink to='/authorization/login'>
        Войти
      </NavigationLink>
      </UnderTitle>
    </>
  )
}

export default Register