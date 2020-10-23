
export async function getPaths() {
  return [ '/about' ]
}

export function Page({ head, pathname }) {
  head({
    title: 'About - Presta Starter'
  })
  return `
    <div>
      <h1>about</h1>
      <a href='/'>Home</a>
    </div>
  `
}