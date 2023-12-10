import styled from "styled-components"
import logo from "../assets/images/logo_small.svg"
import { NavLink, useNavigate } from "react-router-dom"
import ic_add from "../assets/images/ic_add.svg"
import ic_film from "../assets/images/ic_film.svg"
import ic_search from "../assets/images/ic_search.svg"
import ic_profile_placeholder from "../assets/images/ic_profile_placeholder.svg"

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: #F9F9F9;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.button`
  border: none;
  background-color: #F9F9F9;
  margin-right: 150px;
  cursor: pointer;
`

const NavLinks = styled.div`
  margin: 0 32px 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
`

const NavegateLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 12px;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.48px;
  color: black;
  border-radius: 24px;

  &.active {
    background-color: #002DFF;
    color: white;
    img {
      filter: grayscale(1) brightness(1000%);
    }
  }
`

const ProfileLink = styled(NavLink)`
  padding: 2px;
  display: flex;
  width: 40px;
  height: 40px;
  &.active {
    border-radius: 36px;
    background-color: #002DFF;
  }
`

const PageHeader : React.FC = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <NavLinks>
        <NavegateLink to='/collections'>
          <img src={ic_film} />
          Коллекция
        </NavegateLink>
        <NavegateLink to='/add'>
          <img src={ic_add} />
          Добавить
        </NavegateLink>
      </NavLinks>
      <Icon
        onClick={() => {navigate('/')}}
      >
        <img src={logo}/>
      </Icon>

      <NavLinks>
        <NavegateLink to='/search'>
          <img src={ic_search} />
          Поиск
        </NavegateLink>
        <ProfileLink to='/profile'>
          <img src={ic_profile_placeholder} />
        </ProfileLink>
      </NavLinks>
    </Header>
  )
}

export default PageHeader;