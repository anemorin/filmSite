import styled from "styled-components"
import {film} from "../assets/data/film.data.ts"
import { useNavigate } from "react-router-dom"

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 461px;
  gap: 16px;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  max-width: 103px;
  max-height: 190px;
  cursor: pointer;

  p {
    display: -webkit-box;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`

const Cover = styled.img`
  height: 160px;
  width: 103px;
`
const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  width: 100%;
  width: 461px;
  p {
    font-family: sans-serif, 'SF Pro Display';
    font-size: 24px;
    font-weight: 700px;
    line-height: 20px;
    word-wrap: none;
  }
`
const AdditionalTitile = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 20px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

interface Props {
  title?: string,
  additionalButtons?: React.ReactNode,
  films?: film[];
}

const CardsContainer : React.FC<Props> = ({title, additionalButtons, films}) => {
  const navigate = useNavigate();

  return (
    <Container>
      {title && (
        <ContainerHeader>
          <AdditionalTitile>{title}</AdditionalTitile>
          {additionalButtons}
        </ContainerHeader>
      )}
      <Cards>
        {films ? films.map((film) => (
          <CardContainer
            key={film.id}
            onClick={() => {navigate(`/film/${film.id}`)}}
          >
            <Cover src={film.img} alt="image" />
            <p>{film.name}</p>
          </CardContainer>
        )) : (
          <p>Ничего не найдено</p>
        )}
      </Cards>
    </Container>
  )
}

export default CardsContainer