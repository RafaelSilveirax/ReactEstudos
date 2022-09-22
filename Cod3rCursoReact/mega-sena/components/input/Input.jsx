import * as S from './styled'

export default function Input({qtNumber, setQtNumber}) {
  return (
    <S.input_container min={6} max={20} value={qtNumber} onChange={e => setQtNumber(e.target.value)} />
  )
}
