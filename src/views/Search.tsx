import styled from "styled-components";
import CardsContainer from "../components/CardsContainer"
import PageLayout from "../components/PageLayout"
import { PageTitle } from "../components/PageTitle";
import { Recommendation, Oscar2021 } from "../assets/data/film.data";
import InputComponent from "../components/InputComponent";
import { colors } from "../enums";
import { useCallback, useState } from "react";
import ModalWindow from "../components/ModalWindow";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  width: 100%;
  margin-bottom: 64px;
`
const LinkButton = styled.button`
  border: none;
  background-color: ${colors.white};
  color: ${colors.agonaBlue};
  font-weight: 400;
  font-size: 17px;
  cursor: pointer;
`

const Search = () => {

  const [modalWindow, setModalWindow] = useState(false);
  const closeHandler = useCallback(() => {
    setModalWindow(false);
  }, [modalWindow])

  const additionalButtons = () => {
    return (
      <LinkButton
        onClick={() => setModalWindow(true)}
      >
        Все
      </LinkButton>
    )
  }

  return (
    <PageLayout>
      <PageTitle>Поиск</PageTitle>
      <Container>
        <InputComponent placeholder="Введите название фильма, например «Титаник»"></InputComponent>
        <CardsContainer
          title="Рекомендации"
          additionalButtons={additionalButtons()}
          films={Recommendation}
        />
        <CardsContainer
          title="Оскар 2021"
          additionalButtons={additionalButtons()}
          films={Oscar2021}
        />
      </Container>

      {modalWindow ? (
        <ModalWindow onClose={closeHandler} />
      ) : (<></>)}
    </PageLayout>
  );
}

export default Search;
