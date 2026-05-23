export interface Talk {
  title: string
  venue: string
  year: string
  href: string
  description: string
}

const talksData: Talk[] = [
  {
    title: 'Go the Distance with Inspire Scaler',
    venue: "Inspire Days (Quadient's user conference)",
    year: '2021',
    href: 'https://www.quadient.com/resources/go-distance-inspire-scaler',
    description:
      'Follow-up session on operating Inspire Scaler at scale — what production lessons looked like a year in.',
  },
  {
    title: "Inspire Scaler — What's in it for me?",
    venue: "Inspire Days (Quadient's virtual user conference)",
    year: '2020',
    href: 'https://www.quadient.com/resources/inspire-scaler-whats-it-me',
    description:
      'Introduction to Inspire Scaler for the existing Inspire customer base — positioning, capabilities, and adoption path.',
  },
  {
    title: 'FinovateEurope 2018 — main-stage demo',
    venue: 'FinovateEurope, London',
    year: '2018',
    href: 'https://finovate.com/videos/finovateeurope-2018-quadient/',
    description:
      'Back for another seven minutes under the bell — demonstrating a different scenario for Quadient.',
  },
  {
    title: 'FinovateFall 2017 — main-stage demo',
    venue: 'FinovateFall, New York City',
    year: '2017',
    href: '/blog/finovate-2017',
    description:
      'Seven-minute live demo on the Finovate main stage representing Quadient. The format is unforgiving — when the bell rings, the mic cuts.',
  },
]

export default talksData
