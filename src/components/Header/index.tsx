import {
  AddTransactionModal,
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from "./styles";

import logoImg from "../../assets/logo.svg";
import { useState } from "react";
import { NewTransactionModal } from "./NewTransactionModal";

export function Header() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={logoImg} alt="box.money" />
          box.money
        </div>

        <NewTransactionButton
          type="button"
          onClick={() => setModalIsVisible(true)}
        >
          Nova transação
        </NewTransactionButton>

        <AddTransactionModal
          centered
          open={modalIsVisible}
          footer={null}
          onCancel={() => setModalIsVisible(false)}
        >
          <NewTransactionModal />
        </AddTransactionModal>
      </HeaderContent>
    </HeaderContainer>
  );
}
