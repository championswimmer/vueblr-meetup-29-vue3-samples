export interface FAQ {
  question: string
  answer: string
}

export interface State {
  faqs: Array<FAQ>
}

export const state: State = {
  faqs: [
    {
      question: 'Is Vue 3 backwards Compatible ?',
      answer: 'Mostly, yes'
    },
    {
      question: 'Can we use TypeScript with Vue 3',
      answer: 'Yes'
    }
  ]
}