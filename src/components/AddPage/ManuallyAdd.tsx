import styled from "styled-components"
import InputComponent from "../InputComponent"
import PageLayout from "../PageLayout"
import { icons } from "../../enums"
import { useCallback, useState } from "react"
import ModalWindow from "../ModalWindow"

const Button = styled.img`
  margin: 40px 0 70px 0;
  cursor: pointer;
`

const ManuallyAdd = () => {

  const [modalWindow, setModalWindow] = useState(false);
  const closeHandler = useCallback(() => {
    setModalWindow(false);
  }, [modalWindow])


  return (
    <PageLayout
      gap="20"
    >
      <InputComponent
        width="440"
        placeholder="Например, Титаник"
        title="Название"
      />
      <InputComponent
        width="440"
        placeholder="Укажите год выхода фильма"
        title="Год"
      />
      <InputComponent
        width="440"
        placeholder="Напишите пару слов о сюжете"
        title="Описание"
      />
      <InputComponent
        width="440"
        placeholder="Выберите из списка"
        title="Жанр"
      />
      <InputComponent
        width="440"
        title="Постер"
        types="photo"
      />
      <Button
        src={icons.save}
        alt="Сохранить"
        onClick={() => {
          setModalWindow(true);
        }}
      />
      {modalWindow ? (
        <ModalWindow onClose={closeHandler} />
      ) : (<></>)}
    </PageLayout>
  )
}

export default ManuallyAdd;