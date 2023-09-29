'use client'
import * as S from './style'
import bgImage from '../../public/images/background.jpg'

const Home: React.FC = () => {
  return (
    <S.BackgroundImage>
      <S.ImageOverlay>
        <S.StyledImage src={bgImage} alt="Logo" layout="fill" />
      </S.ImageOverlay>
      <S.MainText>
        Frontend techs playground to experiment modern techs.
      </S.MainText>
    </S.BackgroundImage>
  )
}

export default Home
