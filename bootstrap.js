import md2html from './md2html.js'

const run = async () => {
  const result = await fetch('posts/test.md')
  const md = await result.text()
  const html = md2html(md)
  document.body.innerHTML = html
}

run()
