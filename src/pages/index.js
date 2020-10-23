
export async function getPaths() {
  return [ '/' ]
}

export function Page({ head, pathname }) {
  head({
    title: 'Presta Starter'
  })
  return `
    <div>
      <h1>We home fam</h1>
      <a href='/about'>Page 2 - About</a>
    </div>
  `
}