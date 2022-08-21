import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logoImg from '../../assets/logo.svg'

export function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root open={modalIsOpen} onOpenChange={setModalIsOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal setModalIsOpen={setModalIsOpen} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
