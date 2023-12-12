import PageLayout from "./components/PageLayout"
import styled from "styled-components"
import { icons } from "./enums"
import UseStores from "./hooks/useStores"
import { useNavigate } from "react-router-dom"
import { useEffectOnce } from "react-use"
import { useEffect } from "react"
import { users } from "./assets/data/users.data"

const MainLogo = styled.img`
  margin: 250px 0;
`

const AgonaLogo = styled.img`
  margin-bottom: 50px;
`

function App() {
  const navigate = useNavigate();
  const { accountStore } = UseStores();

  useEffect(() => {
    console.log(accountStore.currentUser)
    console.log(users)
  })

  useEffectOnce(() => {
    if (!accountStore.currentUser) {
      navigate('authorization')
    }
  })

  return (
    <PageLayout>
      <MainLogo src={icons.logo}/>
      <AgonaLogo src={icons.agona}/>
    </PageLayout>
  )
}

export default App
