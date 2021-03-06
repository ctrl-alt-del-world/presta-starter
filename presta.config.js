import { document } from 'presta/document'

const name = `presta starter`

export const pages = 'src/pages/**/*.js'

export function createDocument (ctx) {
  return document({
    foot: {
      script: [{ src: '/client.js' }]
    },
    head: {
      og: {
        site_name: name,
        url: `https://website.com/${ctx.pathname}`,
      },
      twitter: {
        site_name: name,
        card: 'summary_large_image',
        creator: '@iamkevingreen'
      },
      meta: [
        { name: 'author', content: '@iamkevingreen' },
      ],
      link: [
        { rel: 'stylesheet', href: '/static/style.css' },
        { rel: 'stylesheet', href: '/style.css' },
      ],
    }
  }, ctx, {
    body: `<div id="bg"></div><div id="root">${ctx.body}</div>`,
  })
}