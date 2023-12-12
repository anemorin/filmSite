import styled from "styled-components"
import InputComponent from "../components/InputComponent"
import PageLayout from "../components/PageLayout"
import { colors, icons } from "../enums"
import { NavLink, Route, Routes, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Button = styled.button`
  padding: 14px 40px;
  border: 3px solid ${colors.agonaBlue};
  margin: 110px 0 52px;
  border-radius: 25px;
  color: ${colors.agonaBlue};
  font-weight: 700;
  background-color: ${colors.white};
`

const Logo = styled.img`
  margin: 200px 0 100px;
  max-width: 100px;
  max-height: 50px;
`

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

const Authorization = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/authorization/login')
  }, [])

  return (
    <PageLayout>
      <Logo src={icons.logo} alt='Watch Later' />
      <Routes>
        <Route
          path="/login"
          element={(
            <>
              <InputComponent
                placeholder="Адрес электронной почты"
                validate="email"
                width="375"
                isRequired={true}
                textAlign="center"
              />
              <InputComponent
                placeholder="Пароль"
                validate="password"
                width="375"
                isRequired={true}
                textAlign="center"
              />
              <Button
                onClick={() => {navigate('/')}}
              >Войти</Button>
              <UnderTitle>Еще не зарегистрированы? <NavigationLink to='/authorization/registration'>Регистрация</NavigationLink></UnderTitle>
            </>
          )}
        />
        <Route
          path="/registration"
          element={(
            <>
              <InputComponent
                placeholder="Адрес электронной почты"
                validate="email"
                width="375"
                isRequired={true}
                textAlign="center"
              />
              <InputComponent
                placeholder="Пароль"
                validate="password"
                width="375"
                isRequired={true}
                textAlign="center"
              />
              <InputComponent
                placeholder="Повторите пароль"
                validate="password"
                width="375"
                isRequired={true}
                textAlign="center"
              />
              <Button
                onClick={() => {
                  navigate('/')
                }}
              >
                Регистрация
              </Button>
              <UnderTitle>Есть логин для входа? <NavigationLink to='/authorization/login'>Войти</NavigationLink></UnderTitle>
            </>
          )}
        />
      </Routes>
    </PageLayout>
  )
}

export default Authorization