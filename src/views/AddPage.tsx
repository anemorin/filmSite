import { NavLink, Route, Routes, useNavigate } from "react-router-dom"
import InputComponent from "../components/InputComponent"
import PageLayout from "../components/PageLayout"
import { PageTitle } from "../components/PageTitle"
import Toggle from "../components/Toggle"
import { observer } from "mobx-react-lite"
import UseStores from "../hooks/useStores"
import ManuallyAdd from "../components/ManuallyAdd"
import styled from "styled-components"
import { useEffect } from "react"

const Container = styled.div`
  margin-top: 40px;
`

const AddPage = () => {
  const {addPageStore} = UseStores()
  const navigate = useNavigate()

  useEffect(() => {
    if (addPageStore.selectedTab === 'Auto') {
      navigate('/add/auto')
    } else {
      navigate('/add/manually')
    }
  }, [])


  return (
    <PageLayout>
      <PageTitle>О фильме</PageTitle>
        <Toggle>
          <NavLink
            to='/add/auto'
            onClick={() => {
              addPageStore.changeSelectedTab('Auto')
            }}
          >
            КиноПоиск
          </NavLink>
          <NavLink
            to='/add/manually'
            onClick={() => {
              addPageStore.changeSelectedTab('Manually')
            }}
          >
            Вручную
          </NavLink>
      </Toggle>
      <Container>
        <Routes>
          <Route
            path="auto"
            element={<InputComponent placeholder="Например, Титаник" title="Название" width="473"></InputComponent>}
          />
          <Route
            path="manually"
            element={<ManuallyAdd />}
          />
        </Routes>
      </Container>
    </PageLayout>
  )
}

export default observer(AddPage)