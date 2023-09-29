'use client'
import * as S from './style'

const MainNav: React.FC = () => {
  return (
    <S.Container>
      <S.SimpleButton href="/aboutUs">Quem Somos</S.SimpleButton>
      <S.FilledButton href="/schedule">Agendar</S.FilledButton>
    </S.Container>
  )
}

export default MainNav
