import * as S from './style'
import check from '../../../../../public/check.svg'
import warning from '../../../../../public/warning.svg'

export interface ScheduleStatusProps {
  status: number
  message: string
  handleClose: () => void
}

const ScheduleStatus: React.FC<ScheduleStatusProps> = ({
  status,
  message,
  handleClose,
}) => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>
          {status === 201
            ? 'Consulta Agendada'
            : 'Houve um problema no agendamento'}
        </S.Title>
        <S.Icon src={status === 201 ? check : warning} alt="icon" />
        <S.Message>{message}</S.Message>

        <S.Button onClick={handleClose}>Fazer Novo Agendamento</S.Button>
      </S.Content>
    </S.Container>
  )
}

export default ScheduleStatus
