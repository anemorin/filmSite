import InputComponent from "./InputComponent"
import PageLayout from "./PageLayout"

const ManuallyAdd = () => {
  return (
    <PageLayout
      gap="20"
    >
      <InputComponent
        width="440"
        placeholder="Например, Титаник"
        title="Название"
      >
      </InputComponent>
      <InputComponent
        width="440"
        placeholder="Укажите год выхода фильма"
        title="Год"
      >
      </InputComponent>
      <InputComponent
        width="440"
        placeholder="Напишите пару слов о сюжете"
        title="Описание"
      >
      </InputComponent>
      <InputComponent
        width="440"
        placeholder="Выберите из списка"
        title="Жанр"
      >
      </InputComponent>
      <InputComponent
        width="440"
        placeholder="Выберите из списка"
        title="Постер"
        type="photo"
      >
      </InputComponent>
    </PageLayout>
  )
}

export default ManuallyAdd;