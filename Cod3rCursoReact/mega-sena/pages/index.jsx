import * as S from '../styles/styled'
import Ball from '../components/ball/Ball'
import ButtonRandom from '../components/buttonRandom/ButtonRandom'
import Input from '../components/input/Input'
import { useEffect, useState } from 'react'

import {mega} from "../functions/mega"


export default function Home() {
  const [qtNumber, setQtNumber] = useState(6);
  /* const [numeros, setNumeros] = useState(mega(qtNumber)); */
  const [numeros, setNumeros] = useState([]);

  useEffect(() => {
    setNumeros(mega());
  },[])

  function renderNumeros(){ 
    return numeros.map(numero => <Ball key={numero} numberRandom={numero}/>)
  }
  
  return (
    <S.containar>
      <S.h1>Escolha a quantida de Numeros </S.h1>
      <S.row>
        {renderNumeros()}
      </S.row>
      <S.div_inputs>
        <Input qtNumber={qtNumber} setQtNumber={setQtNumber}/>
        <ButtonRandom setNumeros={setNumeros} qtNumber={qtNumber}/>
      </S.div_inputs>
      
    </S.containar>
  )
}
