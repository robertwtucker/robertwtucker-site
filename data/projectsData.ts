interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'KFinder for iOS',
    description: `My 'perpetual side-project' is now available on the App Store!`,
    imgSrc: '/static/images/iphone.jpg',
    href: 'https://kfinderapp.com',
  },
  {
    title: 'Cheat Sheet for Dash',
    description: `I created a cheat sheet for Oh-My-Zsh's kubectl plugin. If you
    code on a Mac, you should check out Dash!`,
    imgSrc: '/static/images/devops.jpg',
    href: 'https://kapeli.com/cheat_sheets/Oh-My-Zsh_Kubectl.docset/Contents/Resources/Documents/index',
  },
]

export default projectsData
