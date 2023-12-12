import PageLayout from "../components/PageLayout";
import { PageTitle } from "../components/PageTitle";
import styled from "styled-components";
import InputComponent from "../components/InputComponent";
import { icons } from "../enums";
import { useCallback, useState } from "react";
import ModalWindow from "../components/ModalWindow";
import UseStores from "../hooks/useStores";

const Image = styled.img`
  margin: 10px 0 50px 0;
  max-width: 200px;
  max-height: 200px;
`
const Button = styled.img`
  margin: 80px 0 50px 0;
  cursor: pointer;
`

const InputContainers = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  width: 100%;
`

const Profile = () => {
  const [modalWindow, setModalWindow] = useState(false);
  const { accountStore } = UseStores()
  const closeHandler = useCallback(() => {
    setModalWindow(false);
  }, [modalWindow])

  return (
    <PageLayout>
      <PageTitle>
        Профиль
      </PageTitle>
      <Image src={accountStore.currentUser?.icon || icons.upload} alt="Загрузить фото"/>
      <InputContainers>
        <InputComponent
          placeholder="Имя"
          width="375"
          value={accountStore.currentUser?.name}
        />
        <InputComponent
          placeholder="О себе"
          width="375"
          value={accountStore.currentUser?.about}
        />
        <InputComponent
          placeholder="Любимые жанры"
          width="375"
        />
      </InputContainers>
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

export default Profile;