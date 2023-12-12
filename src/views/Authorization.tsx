import styled from "styled-components"
import PageLayout from "../components/PageLayout"
import { icons } from "../enums"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"
import UseStores from "../hooks/useStores"
import LogIn from "../components/Authorization/LogIn"
import Register from "../components/Authorization/Register"

const Logo = styled.img`
  margin: 200px 0 100px;
  max-width: 100px;
  max-height: 50px;
`

const Authorization = () => {
  const navigate = useNavigate();
  const { accountStore } = UseStores();
  const [error, setError] = useState('');
  useEffect(() => {
    navigate('/authorization/login')
  }, [])

  const onLogInHandler = useCallback(() => {
    if (accountStore.canLogIn) {
      accountStore.setCurrentUser()
      navigate('/')
    } else {
      setError('Неверный логин или пароль')
    }
  }, [accountStore.userMail, accountStore.userPassword])

  const onRegistrationHandler = useCallback(() => {
    if (accountStore.canRegister() === undefined) {
      accountStore.registration()
      navigate('/')
    } else (
      setError(accountStore.canRegister() ?? '')
    )
  }, [])

  return (
    <PageLayout>
      <Logo src={icons.logo} alt='Watch Later' />
      <Routes>
        <Route
          path="/login"
          element={<LogIn onClick={onLogInHandler} error={error} />}
        />
        <Route
          path="/registration"
          element={<Register onClick={onRegistrationHandler} error={error} />}
        />
      </Routes>
    </PageLayout>
  )
}

export default Authorization