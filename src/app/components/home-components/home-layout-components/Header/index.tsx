'use client'
import * as S from './style'
import { ComponentChildProp } from '../../../../utils/ComponentChildProp'

const Header: React.FC<ComponentChildProp> = ({ children }) => {
  return <S.Container data-testid="header-container">{children}</S.Container>
}

export default Header
