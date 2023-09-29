/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'
import InfoBar from '../components/pages-components/InfoBar'
import * as S from './style'
import api from '../services/api'
import { useQuery } from 'react-query'

type Topics = {
  title: string
  content: string
}

type DateResponse = {
  title: string
  topics: Topics[]
}

const AboutUs: React.FC = () => {
  const { data, isLoading, error } = useQuery(
    'aboutUsData',
    async () => {
      const response = await api.get<DateResponse>('/about-us')
      return response.data
    },
    {
      staleTime: 1000 * 60 * 2, // 2 minutos
    },
  )
  const crumbs = [{ label: 'Home', path: '/' }, { label: 'Quem Somos' }]

  return (
    <>
      <InfoBar
        crumbs={crumbs}
        title="Quem Somos"
        description="A maior rede de tratamento integrante."
      />
      <S.Content>
        {isLoading ? (
          <span>Carregando...</span>
        ) : error ? (
          <span>Falha ao obter dados do 'Quem Somos'.</span>
        ) : (
          <>
            <S.Title>{data!.title}</S.Title>
            {data!.topics.map((topic) => (
              <div key={topic.title}>
                <S.SubTitle>{topic.title}</S.SubTitle>
                <S.Text>{topic.content}</S.Text>
              </div>
            ))}
          </>
        )}
      </S.Content>
    </>
  )
}

export default AboutUs
