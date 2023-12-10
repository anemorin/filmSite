import styled from "styled-components";
import CardsContainer from "../components/CardsContainer"
import PageLayout from "../components/PageLayout"
import { PageTitle } from "../components/PageTitle";
import { Recommendation, Oscar2021 } from "../assets/data/film.data";
import InputComponent from "../components/InputComponent";

const SearchBar = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-bottom: 0.5px #C6C6C8 solid;
  max-width: 461px;
  width: 100%;
  height: 44px;
  padding: 19px 16px;
  cursor: pointer;

  &::-webkit-input-placeholder {
    color: #3C3C434D;
  }
`

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
  background-color: white;
  color: #002DFF;
  font-weight: 400;
  font-size: 17px;
`

const Search = () => {

  const additionalButtons = () => {
    return (
      <LinkButton>
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
    </PageLayout>
  );
}

export default Search;
