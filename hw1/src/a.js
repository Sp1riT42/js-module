console.log('a.js')
loadScript( () => {
    let text = 'callback'
    console.log(text, 'a.js')
})