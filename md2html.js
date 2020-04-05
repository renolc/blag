const bold = /\*\*(.*?)\*\*/g
const italic = /_(.*?)_/g
const inlinecode = /`(.*?)`/g
const link = /\[(.*?)\]\((.*?)\)/g

export default md =>
  md
    .split('\n')
    .filter(i => i)
    .map(i => {
      i = i.replace(bold, (_, text) => `<b>${text}</b>`)
      i = i.replace(italic, (_, text) => `<i>${text}</i>`)
      i = i.replace(inlinecode, (_, text) => `<code>${text}</code>`)
      i = i.replace(link, (_, text, url) => `<a href="${url}">${text}</a>`)

      if (i.startsWith('# ')) return `<h1>${i.slice(1).trim()}</h1>`
      if (i.startsWith('## ')) return `<h2>${i.slice(2).trim()}</h2>`
      if (i.startsWith('### ')) return `<h3>${i.slice(3).trim()}</h3>`
      if (i.startsWith('#### ')) return `<h4>${i.slice(4).trim()}</h4>`
      if (i.startsWith('##### ')) return `<h5>${i.slice(5).trim()}</h5>`
      if (i.startsWith('###### ')) return `<h6>${i.slice(6).trim()}</h6>`
      return `<p>${i.trim()}</p>`
    })
    .join('')
