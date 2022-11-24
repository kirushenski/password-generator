import * as yup from 'yup'

export const schema = yup.object({
  length: yup.number().min(1).max(20).required(),
  settings: yup.array(yup.string().required()).min(1).required(),
})

export type FormValues = yup.InferType<typeof schema>
