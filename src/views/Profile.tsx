import PageLayout from "../components/PageLayout";
import { PageTitle } from "../components/PageTitle";
import upload_photo from "../assets/images/ic_add_image.svg"
import btn_save from "../assets/images/ic_save.svg"
import styled from "styled-components";
import InputComponent from "../components/InputComponent";

const Image = styled.img`
  margin: 50px 0;
`

const InputContainers = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  width: 100%;
`

const Profile = () => {
  return (
    <PageLayout>
      <PageTitle>
        Профиль
      </PageTitle>
      <Image src={upload_photo} alt="Загрузить фото"/>
      <InputContainers>
        <InputComponent placeholder="Имя" width="375" />
        <InputComponent placeholder="О себе" width="375" />
        <InputComponent placeholder="Любимые жанры" width="375" />
      </InputContainers>
      <Image src={btn_save} alt="Сохранить" />
    </PageLayout>
  )
}

export default Profile;