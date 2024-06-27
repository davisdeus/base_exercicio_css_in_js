import { FormEvent, useState } from 'react'

import { FormPesq, BtnPesq, InputPesq } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormPesq onSubmit={aoEnviarForm}>
      <InputPesq
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesq type="submit">Pesquisar</BtnPesq>
    </FormPesq>
  )
}
export default FormVagas
