import * as S from './styled'
import {mega} from "../../functions/mega"

export default function ButtonRandom({setNumeros, qtNumber}) {

  return (
    <S.button_Container  onClick={() => setNumeros(mega(qtNumber))}>
      Random
    </S.button_Container>
  )
}
