import PageLayout from "./components/PageLayout"
import styled from "styled-components"
import { icons } from "./enums"

const MainLogo = styled.img`
  margin: 250px 0;
`

const AgonaLogo = styled.img`
  margin-bottom: 50px;
`

function App() {
  return (
    <PageLayout>
      <MainLogo src={icons.logo}/>
      <AgonaLogo src={icons.agona}/>
    </PageLayout>
  )
}

export default App
