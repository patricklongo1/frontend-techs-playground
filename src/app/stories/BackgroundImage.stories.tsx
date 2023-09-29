// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import { BackgroundImage } from '../style'
import * as S from '../style'
import bgImage from '../../../public/images/background.jpg'

export default {
  title: 'Pages/Home/Micros/BackgroundImage',
  component: BackgroundImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

const Template: StoryFn = () => (
  <BackgroundImage>
    <S.ImageOverlay>
      <S.StyledImage src={bgImage} alt="Logo" layout="fill" />
    </S.ImageOverlay>
    <S.MainText> </S.MainText>
  </BackgroundImage>
)

export const Default = Template.bind({})
