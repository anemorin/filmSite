import { useParams } from "react-router-dom"
import PageLayout from "../components/PageLayout"
import {filmLibrary} from "../assets/data/film.data"
import styled from "styled-components"
import ic_add_button from "../assets/images/ic_add_button.svg"

const FilmCover = styled.img`
  max-width: 267px;
  max-height: 417px;
`
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 170px;
`

const InformationContainer = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const DescriptionContainer = styled.p`
  max-width: 300px;
  max-height: 150px;
`

const AdditionalInfo = styled.div`
  display: flex;
  gap: 10px;
`

const FilmTitle = styled.p`
  font-weight: 700;
  font-size: 36px;
  line-height: 20px;
`
const AddButton = styled.img`
  max-width: 188px;
  max-height: 38px;
  cursor: pointer;
`

const ScoreContainer = styled.p`
  padding: 1px, 8px, 2px, 8px;
  color: #002DFF;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 23px;
  border-radius: 14px;
  border: 3px solid #002DFF;
  font-weight: 600;
  font-size: 14px;
`

const FilmPage = () => {
  const {id} = useParams()
  const filmItem = filmLibrary[Number(id)];
  return (
    <PageLayout>
      <PageContainer>
        <FilmCover src={filmItem.img}/>
        <InformationContainer>
          <FilmTitle>{filmItem.name}</FilmTitle>
          <AdditionalInfo>
            <p>{filmItem.year}</p>
            <ScoreContainer>{filmItem.score}</ScoreContainer>
          </AdditionalInfo>
          <AddButton src={ic_add_button} alt="Буду смотреть"/>
          <DescriptionContainer>{filmItem.description}</DescriptionContainer>
        </InformationContainer>
      </PageContainer>
    </PageLayout>
  )
}

export default FilmPage