'use client'
import * as S from './style'

interface ResumeProps {
  teamTotal: number
  tax: number
}

function formatCurrency(value: number) {
  const formattedValue = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })

  return formattedValue
}

const Resume: React.FC<ResumeProps> = ({ teamTotal, tax }) => {
  return (
    <S.Content>
      <S.LineBox>
        <S.Text>Número de integrantes a serem atendidos:</S.Text>
        <S.Text>{teamTotal}</S.Text>
      </S.LineBox>

      <S.LineBox>
        <S.Text>Atendimento unitário por integrante:</S.Text>
        <S.Text>{formatCurrency(70)}</S.Text>
      </S.LineBox>

      <S.LineBox>
        <S.Text>Subtotal:</S.Text>
        <S.Text>{formatCurrency(70 * teamTotal)}</S.Text>
      </S.LineBox>

      <S.LineBox>
        <S.Text>Taxa geracional*:</S.Text>
        <S.Text>{formatCurrency(tax)}</S.Text>
      </S.LineBox>

      <S.LineBox>
        <S.TaxInfo>
          *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
          alta do time, com limite de até 30%
        </S.TaxInfo>
      </S.LineBox>
    </S.Content>
  )
}

export default Resume
