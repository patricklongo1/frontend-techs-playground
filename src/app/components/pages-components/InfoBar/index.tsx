'use client'
import React from 'react'
import * as S from './style'

interface InfoBarProps {
  crumbs: { label: string; path?: string }[]
  title: string
  description: string
}

const InfoBar: React.FC<InfoBarProps> = ({ crumbs, title, description }) => {
  return (
    <S.Container>
      <S.BreadcrumbsContainer data-testid="breadcrumbs-container">
        {crumbs.map((crumb, index) => (
          <React.Fragment key={crumb.label}>
            {index > 0 && (
              <S.Separator data-testid="separator"> {'>'} </S.Separator>
            )}
            {crumb.path ? (
              <S.CrumbLink data-testid="breadcrumb" href={crumb.path}>
                {crumb.label}
              </S.CrumbLink>
            ) : (
              <S.LastCrumb data-testid="breadcrumb">{crumb.label}</S.LastCrumb>
            )}
          </React.Fragment>
        ))}
      </S.BreadcrumbsContainer>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  )
}

export default InfoBar
