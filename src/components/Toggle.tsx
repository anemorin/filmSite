import styled from "styled-components"

const TogglePlaceholder = styled.div`
  display: flex;
  align-items: center;
  max-width: 343px;
  height: 34px;
  background-color: #7676801F;
  border-radius: 7px;

  a {
    margin: 2px;
    padding: 6px 32px;
    text-decoration: none;
    color: black;

    &.active {
      background-color: white;
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