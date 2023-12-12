import styled from "styled-components"
import { colors, icons } from "../enums"


const Container = styled.div<Props>`
  width: ${(props) => props.width ? `${props.width}px` : '457px'};
  display: flex;
  flex-direction: column;
`

const Title = styled.p`
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0.8px;
`

const Input = styled.input<Props>`
    border: none;
    border-bottom: 0.5px ${colors.dirtGray} solid;
    padding: 19px 0;
    width: ${(props) => props.width ? `${props.width}px` : '457px'};
    word-break: break-word;
    text-align: ${(props) => props.textAlign};
    &:focus {
      outline: none;
    }
`

const UploadButton = styled.button`
  background-color: ${colors.white};
  padding: 19px 0;
  border: none;
  display: flex;
  cursor: pointer;
`

interface Props {
    width?: string;
    title?: string;
    placeholder?: string;
    validate?: 'email' | 'password'
    types?: 'text' | 'photo';
    value?: string;
    isRequired?: boolean;
    textAlign?: 'center' | 'left';
}

const InputComponent : React.FC<Props> = ({
  width, title, placeholder, types = 'text', value, validate, isRequired, textAlign,
}) => {
  return (
    <Container
      width={width}
    >
      {title && (
        <Title>{title}</Title>
        )
      }
      {types === 'photo' ? (
        <UploadButton>
          <img src={icons.upload}/>
        </UploadButton>
      ) : (
      <Input
        width={width}
        placeholder={placeholder}
        value={value}
        type={validate}
        required={isRequired}
        textAlign={textAlign}
      />
      )}
    </Container>
  )
}

export default InputComponent;