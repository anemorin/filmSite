import styled from "styled-components"
import upload_photo from "../assets/images/ic_add_image.svg"

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
    border-bottom: 0.5px #C6C6C8 solid;
    padding: 19px 0;
    width: ${(props) => props.width ? `${props.width}px` : '457px'}%;
    word-break: break-word;
    &:focus {
      outline: none;
    }
`

const UploadButton = styled.button`
  background-color: white;
  padding: 19px 0;
  border: none;
  display: flex;
  cursor: pointer;
`

interface Props {
    width?: string;
    title?: string;
    placeholder?: string;
    type?: 'text' | 'photo'
}

const InputComponent : React.FC<Props> = ({width, title, placeholder, type = 'text'}) => {
  return (
    <Container
      width={width}
    >
      {title && (
        <Title>{title}</Title>
        )
      }
      {type === 'photo' ? (
        <UploadButton>
          <img src={upload_photo}/>
        </UploadButton>
      ) : (
      <Input
        width={width}
        placeholder={placeholder}
      />
      )}
    </Container>
  )
}

export default InputComponent;