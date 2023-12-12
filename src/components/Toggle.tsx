import styled from "styled-components"
import { colors } from "../enums"

const TogglePlaceholder = styled.div`
  display: flex;
  align-items: center;
  max-width: 343px;
  height: 34px;
  background-color: ${colors.lightBlue};
  border-radius: 7px;

  a {
    margin: 2px;
    padding: 6px 32px;
    text-decoration: none;
    color: ${colors.black};

    &.active {
      background-color: ${colors.white};
      border-radius: 7px;
    }
  }
`

type Props = {
  children?: React.ReactElement[] | React.ReactElement
}

const Toggle : React.FC<Props> = ({children}) => {
  return(
    <TogglePlaceholder>
      {children}
    </TogglePlaceholder>
  )
}

export default Toggle