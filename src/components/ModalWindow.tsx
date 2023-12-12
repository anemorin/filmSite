import styled from "styled-components"
import { colors } from "../enums";

interface Props {
  onClose: () => void;
}

const Modal = styled.div`
  position: fixed;
  background-color: rgba(45, 47, 53, 0.1);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 1000;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  >div{
    max-width: 400px;
  }
`

const Container = styled.div`
  flex: initial;
  background-color: ${colors.white};
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  padding: 16px;
  width: 400px;
`;

const Title = styled.p`
  font-size: 24px;
  padding: 8px;
  font-weight: 600;
  display: flex;
  justify-content: left;
`

const Text = styled.p`
  font-size: 16px;
  padding: 8px;
`

const ModalWindow : React.FC<Props> = ({onClose}) => {
  return (
    <Modal
      onClick={onClose}
    >
      <Container>
        <Title>Ой, ошибка!</Title>
        <Text>Это в сделку не входило</Text>
      </Container>
    </Modal>
  )
}

export default ModalWindow