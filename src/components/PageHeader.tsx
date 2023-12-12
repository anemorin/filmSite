import styled from "styled-components"
import { NavLink, useNavigate } from "react-router-dom"
import { icons } from "../enums";
import UseStores from "../hooks/useStores";
import { colors } from "../enums"

interface ProfileProps {
  img: string,
}

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: ${colors.lightGray};
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.button`
  border: none;
  background-color: ${colors.lightGray};
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
  color: ${colors.black};
  border-radius: 24px;

  &.active {
    background-color: ${colors.agonaBlue};
    color: ${colors.white};
    img {
      filter: grayscale(1) brightness(1000%);
    }
  }
`

const ProfileLink = styled(NavLink)<ProfileProps>`
  padding: 2px;
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 36px;
  background: center url(${(props) => props.img});
  background-size: 150%;
  &.active {
    border: 2px ${colors.agonaBlue} solid;
  }
`

const PageHeader : React.FC = () => {
  const navigate = useNavigate();
  const { accountStore } = UseStores();

  return (
    <Header>
      <NavLinks>
        <NavegateLink to='/collections'>
          <img src={icons.film} />
          Коллекция
        </NavegateLink>
        <NavegateLink to='/add'>
          <img src={icons.add} />
          Добавить
        </NavegateLink>
      </NavLinks>
      <Icon
        onClick={() => {navigate('/')}}
      >
        <img src={icons.smallLogo}/>
      </Icon>

      <NavLinks>
        <NavegateLink to='/search'>
          <img src={icons.search} />
          Поиск
        </NavegateLink>
        <ProfileLink
          to='profile'
          img={accountStore.currentUser?.icon ? accountStore.currentUser?.icon : icons.profile}
        />
      </NavLinks>
    </Header>
  )
}

export default PageHeader;