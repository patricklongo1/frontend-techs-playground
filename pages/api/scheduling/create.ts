/* eslint-disable no-prototype-builtins */
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }
  if (
    req.headers['content-type']?.toLowerCase() !== 'application/json' ||
    !req.body.data.hasOwnProperty('date') ||
    !req.body.data.hasOwnProperty('time') ||
    !req.body.data.hasOwnProperty('pokemons')
  ) {
    return res.status(400).end()
  }
  const randomBool = Math.random() < 0.8

  if (randomBool) {
    res
      .status(201)
      .json(
        `Seu agendamento para dia ${req.body.data.date}, às ${req.body.data.time}, para ${req.body.data.pokemons.length} pokémons foi realizado com sucesso!`,
      )
  }

  res.status(500).json(`Houve um problema no agendamento`)
}
