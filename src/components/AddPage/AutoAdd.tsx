import InputComponent from "../InputComponent";
import PageLayout from "../PageLayout"

const AutoAdd = () => {
  return (
    <PageLayout
      gap="20"
    >
      <InputComponent
        placeholder="Например, Титаник"
        title="Название"
        width="473"
      />
    </PageLayout>
  )
}

export default AutoAdd;