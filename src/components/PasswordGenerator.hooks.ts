import { useState } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { getRandomInteger } from '~lib/getRandomInteger'

const schema = yup.object({
  length: yup.number().min(1).max(20).required(),
  settings: yup.array(yup.string().required()).min(1).required(),
})

export const usePasswordGeneratorForm = () =>
  useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      length: 10,
      settings: ['uppercase', 'lowercase', 'numbers'],
    },
  })

export type FormValues = yup.InferType<typeof schema>

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
const NUMBERS = '1234567890'
const SYMBOLS = '!@#$%^&*'

export const useGeneratePassword = () => {
  const [password, setPassword] = useState<string>()

  const generatePassword = ({ length, settings }: FormValues) => {
    const isUppercase = settings.includes('uppercase')
    const isLowercase = settings.includes('lowercase')
    const isNumbers = settings.includes('numbers')
    const isSymbols = settings.includes('symbols')

    const alphabet = `${isUppercase ? UPPERCASE : ''}${isLowercase ? LOWERCASE : ''}${isNumbers ? NUMBERS : ''}${
      isSymbols ? SYMBOLS : ''
    }`

    const password = Array.from({ length }, () => {
      const randomIndex = getRandomInteger(0, alphabet.length - 1)
      return alphabet[randomIndex]
    }).join('')

    setPassword(password)
  }

  return { password, generatePassword }
}
