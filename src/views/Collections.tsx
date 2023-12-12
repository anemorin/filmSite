import React, { useCallback, useEffect } from "react"
import styled from "styled-components";
import Button from "../components/Button";
import PageLayout from "../components/PageLayout";
import CardsContainer from "../components/CardsContainer";
import TableContainer from "../components/TabContainer";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { film, wantToWatch, watchedFilms } from "../assets/data/film.data";
import { PageTitle } from "../components/PageTitle";
import { observer } from 'mobx-react-lite';
import useStores from '../hooks/useStores';
import Toggle from "../components/Toggle";
import { icons } from "../enums";

const ButtonsPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 460px;
  width: 100%;
  padding-left: 54px;
  gap: 40px;
  margin-bottom: 35px;
`

const Collections : React.FC = () => {
  const { collectionsStore } = useStores()
  const navigate = useNavigate();

  useEffect(() => {
    if (collectionsStore.selectedTab === 'Watched') {
      navigate('/collections/watched')
    } else {
      navigate('/collections/wantToWatch')
    }
  }, [])

  const applications = useCallback((films : film[]) => {
    return collectionsStore.displayMode === 'Table' ? (
        <TableContainer
          films={films}
        />
      ) : (
        <CardsContainer
          films={films}
        />
      )}, [collectionsStore.displayMode])

  return (
    <PageLayout>
      <PageTitle>Коллекция</PageTitle>
      <ButtonsPlaceholder>
        <Toggle>
          <NavLink
            to='/collections/wantToWatch'
            onClick={() => {
              collectionsStore.changeSelectedTab('WantToWatch')
              console.log(collectionsStore.selectedTab)
            }}
          >
            Буду смотреть
          </NavLink>
          <NavLink
            to='/collections/watched'
            onClick={() => {
              collectionsStore.changeSelectedTab('Watched')
              console.log(collectionsStore.selectedTab)
            }}
          >
            Просмотрено
          </NavLink>
        </Toggle>
        <Button
          icon={collectionsStore.displayMode === 'Table' ? icons.tableViewIcon : icons.listViewIcon}
          onClick={() => {collectionsStore.changeDisplayMode()}}
          width={18}
          height={18}
        />
      </ButtonsPlaceholder>
      <Routes>
        <Route
          path="wantToWatch"
          element={applications(wantToWatch)}
        />
        <Route
          path="watched"
          element={applications(watchedFilms)}
        />
      </Routes>
    </PageLayout>
  )
}

export default observer(Collections);