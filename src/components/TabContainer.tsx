import styled from "styled-components"
import { film } from "../assets/data/film.data"
import { useNavigate } from "react-router-dom";
import { icons } from "../enums";


const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px #C6C6C8 solid;
  max-width: 461px;
  width: 100%;
  height: 44px;
  cursor: pointer;

  p {
    font-weight: 400;
    font-size: 17px;
    line-height: 22px
  }
`;

interface Props {
  films?: film[];
}

const TableContainer : React.FC<Props> = ({films}) => {
  const navigate = useNavigate();

  return (
    <>
      {films ? films.map((film) => (
        <Tab
          key={film.id}
          onClick={() => {navigate(`/film/${film.id}`)}}
        >
          <p>{film.name}</p>
          <img src={icons.arroy} alt="Перейти"/>
        </Tab>
      )) : (
        <p>Ничего не найдено</p>
      )}
    </>
  )
}

export default TableContainer