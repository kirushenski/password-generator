import * as yup from 'yup'

export const schema = yup.object({
  length: yup.number().required(),
  settings: yup.array(yup.string().required()).required(),
})

export type FormValues = yup.InferType<typeof schema>
