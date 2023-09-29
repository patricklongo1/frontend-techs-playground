'use client'
import { useEffect, ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'
import InfoBar from '../components/pages-components/InfoBar'
import Resume from '../components/form-components/Resume'
import dynamic from 'next/dynamic'
import { ScheduleStatusProps } from '../components/pages-components/ScheduleStatus'
import SmallSkeleton from '../components/pages-components/SmallSkeleton'

import * as S from './style'

import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import axios, { AxiosError } from 'axios'
import api from '../services/api'
import pokeApi from '../services/pokeApi'

const ScheduleStatus = dynamic<ScheduleStatusProps>(
  () => {
    return import('../components/pages-components/ScheduleStatus')
  },
  {
    loading: () => <span>Carregando...</span>,
  },
)

const createScheduleSchema = z.object({
  name: z
    .string()
    .nonempty('O nome é obrigatório')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  lastname: z
    .string()
    .nonempty('O sobrenome é obrigatório')
    .transform((lastname) => {
      return lastname
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  region: z
    .string()
    .nonempty('A região é obrigatória')
    .transform((region) => {
      return region
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  city: z
    .string()
    .nonempty('A cidade é obrigatória')
    .transform((city) => {
      return city
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  date: z
    .string()
    .nonempty('A data é obrigatória')
    .transform((date) => {
      return date
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  time: z
    .string()
    .nonempty('O horário é obrigatório')
    .transform((time) => {
      return time
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  integrals: z
    .array(
      z.object({
        name: z.string().nonempty('Selecione um integrante'),
      }),
    )
    .max(6, 'Insira no máximo 06 integrantes')
    .min(1, 'Insira no mínimo 01 integrante'),
})

type createScheduleFormData = z.infer<typeof createScheduleSchema>

interface IntegralOption {
  name: string
}

interface RegionOption {
  name: string
}

interface CityOption {
  name: string
  url: string
}

const Schedule: React.FC = () => {
  const crumbs = [{ label: 'Home', path: '/' }, { label: 'Agendar' }]
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm<createScheduleFormData>({
    resolver: zodResolver(createScheduleSchema),
  })
  const { fields, append } = useFieldArray({
    control,
    name: 'integrals',
  })
  const [selectedDate, setSelectedDate] = useState('')
  const [timesOptions, setTimesOptions] = useState([])
  const [scheduleResponseStatus, setScheduleResponseStatus] = useState(0)
  const [scheduleResponseMessage, setScheduleResponseMessage] = useState('')

  const { data: datesOptions = [] } = useQuery<string[]>(
    'schedulingDate',
    async () => {
      const response = await api.get('/scheduling/date')
      return response.data
    },
  )

  const { data: integralsOptions = [] } = useQuery<IntegralOption[]>(
    'integralList',
    async () => {
      const response = await pokeApi.get('/pokemon?limit=100000&offset=0')
      return response.data.results
    },
    {
      staleTime: 1000 * 60 * 60 * 24, // 1 dia
    },
  )

  const { data: regionsOptions = [] } = useQuery<RegionOption[]>(
    'regionList',
    async () => {
      const response = await pokeApi.get('/region')
      return response.data.results
    },
    {
      staleTime: 1000 * 60 * 60 * 24, // 1 dia
    },
  )

  const { data: citiesOptions = [] } = useQuery<CityOption[]>(
    'locationList',
    async () => {
      const response = await pokeApi.get('/location')
      const cityNamesArray = await fetchDataFromUrls(response.data.results)
      return cityNamesArray
    },
    {
      staleTime: 1000 * 60 * 60 * 24, // 1 dia
    },
  )

  async function fetchDataFromUrls(locations: CityOption[]) {
    try {
      const promises = locations.map(async (location) => {
        const response = await axios.get(location.url)
        return response.data.names[1]
      })

      const results = await Promise.all(promises)

      return results
    } catch (error) {
      console.error(`Erro nas requisições: ${error}`)
      return []
    }
  }

  useEffect(() => {
    async function loadTimesOptions() {
      try {
        const timeArray = await api.post('/scheduling/time', {
          date: selectedDate,
        })

        setTimesOptions(timeArray.data)
      } catch (error) {
        console.log(error)
      }
    }
    if (selectedDate !== '') {
      loadTimesOptions()
    }
  }, [selectedDate])

  async function handleSchedule(data: createScheduleFormData) {
    try {
      const response = await api.post('/scheduling/create', { data })

      setScheduleResponseStatus(response.status)
      setScheduleResponseMessage(response.data)
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        setScheduleResponseStatus(error.response.status)
        setScheduleResponseMessage(error.response.data)
      } else {
        console.log(error)
      }
    }
  }

  function addNewIntegral() {
    append({ name: '' })
  }

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.target.blur()
  }

  const handleCloseScheduleResponseModal = () => {
    setScheduleResponseMessage('')
    setScheduleResponseStatus(0)
    reset()
  }

  return (
    <>
      {scheduleResponseStatus !== 0 && scheduleResponseMessage !== '' && (
        <ScheduleStatus
          status={scheduleResponseStatus}
          message={scheduleResponseMessage}
          handleClose={handleCloseScheduleResponseModal}
        />
      )}
      <InfoBar
        crumbs={crumbs}
        title="Agendar"
        description="Recupere seus integrantes em 5 segundos"
      />
      <S.Content>
        <S.Title>Preencha o formulário abaixo para agendar.</S.Title>

        <S.Form onSubmit={handleSubmit(handleSchedule)}>
          <S.DoubleInputContainer>
            <S.InputContainer>
              <S.InputLabel htmlFor="name">Nome</S.InputLabel>
              <S.SimpleInput
                id="name"
                placeholder="Digite seu nome"
                {...register('name')}
              />
              {errors.name && (
                <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
              )}
            </S.InputContainer>
            <S.InputContainer>
              <S.InputLabel htmlFor="lastname">Sobrenome</S.InputLabel>
              <S.SimpleInput
                id="lastname"
                placeholder="Digite seu sobrenome"
                {...register('lastname')}
              />
              {errors.lastname && (
                <S.ErrorMessage>{errors.lastname.message}</S.ErrorMessage>
              )}
            </S.InputContainer>
          </S.DoubleInputContainer>

          <S.DoubleInputContainer>
            <S.InputContainer>
              <S.InputLabel htmlFor="region">Região</S.InputLabel>
              {regionsOptions.length >= 1 ? (
                <S.SimpleSelect
                  defaultValue={''}
                  id="region"
                  data-testid="region"
                  placeholder="Selecione sua região"
                  {...register('region')}
                  onChange={handleSelectChange}
                >
                  <S.Option value="" disabled hidden>
                    Selecione sua região
                  </S.Option>
                  {regionsOptions.length &&
                    regionsOptions.map((option) => (
                      <S.Option key={option.name} value={option.name}>
                        {option.name}
                      </S.Option>
                    ))}
                </S.SimpleSelect>
              ) : (
                <SmallSkeleton />
              )}
              {errors.region && (
                <S.ErrorMessage>{errors.region.message}</S.ErrorMessage>
              )}
            </S.InputContainer>

            <S.InputContainer>
              <S.InputLabel htmlFor="city">Cidade</S.InputLabel>
              {citiesOptions.length >= 1 ? (
                <S.SimpleSelect
                  defaultValue={''}
                  id="city"
                  data-testid="city"
                  placeholder="Selecione sua cidade"
                  {...register('city')}
                  onChange={handleSelectChange}
                >
                  <S.Option value="" disabled hidden>
                    Selecione sua cidade
                  </S.Option>
                  {citiesOptions.length &&
                    citiesOptions.map((option) => (
                      <S.Option key={option.name} value={option.name}>
                        {option.name}
                      </S.Option>
                    ))}
                </S.SimpleSelect>
              ) : (
                <SmallSkeleton />
              )}

              {errors.city && (
                <S.ErrorMessage>{errors.city.message}</S.ErrorMessage>
              )}
            </S.InputContainer>
          </S.DoubleInputContainer>

          <S.SimpleSpan>Cadastre seu time</S.SimpleSpan>
          <S.SimpleSmall>Atendemos até 06 integrantes por vez</S.SimpleSmall>
          {errors.integrals && (
            <S.ErrorMessage>{errors.integrals.message}</S.ErrorMessage>
          )}
          {fields.map((field, index) => (
            <S.DoubleInputContainer key={field.id}>
              <S.IntegralListContainer>
                <S.SimpleSpan>{`integrante 0${index + 1}`}</S.SimpleSpan>
                <S.IntegralListContent>
                  <S.IntegralSelect
                    id="integrals"
                    placeholder="Selecione seu integrante"
                    {...register(`integrals.${index}.name`)}
                    onChange={handleSelectChange}
                  >
                    <S.Option value="" disabled hidden>
                      Selecione seu integrante
                    </S.Option>
                    {integralsOptions.length &&
                      integralsOptions.map((option) => (
                        <S.Option key={option.name} value={option.name}>
                          {option.name}
                        </S.Option>
                      ))}
                  </S.IntegralSelect>

                  {errors.integrals?.[index]?.name && (
                    <S.ErrorMessage>
                      {errors.integrals?.[index]?.name?.message}
                    </S.ErrorMessage>
                  )}
                </S.IntegralListContent>
              </S.IntegralListContainer>
            </S.DoubleInputContainer>
          ))}

          <S.IntegralAddButton
            type="button"
            onClick={addNewIntegral}
            disabled={integralsOptions.length <= 0}
          >
            Add novo integrante ao atendimento +
          </S.IntegralAddButton>

          <S.DoubleInputContainer>
            <S.InputContainer>
              <S.InputLabel htmlFor="date">Data para Atendimento</S.InputLabel>
              {datesOptions.length >= 1 ? (
                <S.SimpleSelect
                  defaultValue={''}
                  id="date"
                  data-testid="date"
                  placeholder="Selecione uma data"
                  {...register('date')}
                  onChange={(e) => {
                    handleSelectChange(e)
                    setSelectedDate(e.target.value)
                  }}
                >
                  <S.Option value="" disabled hidden>
                    Selecione uma data
                  </S.Option>
                  {datesOptions.map((option) => (
                    <S.Option key={option} value={option}>
                      {option}
                    </S.Option>
                  ))}
                </S.SimpleSelect>
              ) : (
                <SmallSkeleton />
              )}
              {errors.date && (
                <S.ErrorMessage>{errors.date.message}</S.ErrorMessage>
              )}
            </S.InputContainer>

            <S.InputContainer>
              <S.InputLabel htmlFor="time">Horário de Atendimento</S.InputLabel>
              {timesOptions.length >= 1 ? (
                <S.SimpleSelect
                  defaultValue={''}
                  id="time"
                  data-testid="time"
                  placeholder="Selecione um horário"
                  {...register('time')}
                  onChange={handleSelectChange}
                >
                  <S.Option value="" disabled hidden>
                    Selecione um horário
                  </S.Option>
                  {timesOptions.map((option) => (
                    <S.Option key={option} value={option}>
                      {option}
                    </S.Option>
                  ))}
                </S.SimpleSelect>
              ) : (
                <SmallSkeleton />
              )}

              {errors.time && (
                <S.ErrorMessage>{errors.time.message}</S.ErrorMessage>
              )}
            </S.InputContainer>
          </S.DoubleInputContainer>

          <S.Divider />

          <Resume teamTotal={fields.length} tax={2.1} />

          <S.SubmitButton type="submit" disabled={!isValid}>
            Concluir Agendamento
          </S.SubmitButton>
        </S.Form>
      </S.Content>
    </>
  )
}

export default Schedule
