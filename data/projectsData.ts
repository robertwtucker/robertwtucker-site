interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'KFinder for iOS',
    description: `A published iOS app for warfarin/INR tracking — vitamin K content,
    historical readings, and dose context for patients on anticoagulant therapy.
    Open source under the MIT License; available on the App Store.`,
    imgSrc: '/static/images/iphone.jpg',
    href: 'https://kfinderapp.com',
  },
  {
    title: 'PARA Vault MCP',
    description: `An open-source Model Context Protocol server that exposes a PARA-method
    Obsidian vault as structured tools for MCP-capable AI clients. The first proof
    artifact of an in-public AI practice. Building toward v0.1.`,
    imgSrc: '/static/images/ai-para-mcp.jpg',
    href: 'https://github.com/robertwtucker/para-vault-mcp',
  },
  {
    title: 'Eclectic Development LLC',
    description: `The workshop. Independent software outfit — home for side projects,
    open-source releases, and (eventually) consulting work. Distinct face from
    this personal site.`,
    href: 'https://eclectic.dev',
  },
]

export default projectsData
