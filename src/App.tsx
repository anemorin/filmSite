import PageLayout from "./components/PageLayout"
import logo from "./assets/images/logo_full.svg"
import agona_logo from "./assets/images/agona_logo.svg"
import styled from "styled-components"

const MainLogo = styled.img`
  margin: 300px 0;
`

function App() {
  return (
    <PageLayout>
      <MainLogo src={logo}/>
      <img src={agona_logo}/>
    </PageLayout>
  )
}

export default App
