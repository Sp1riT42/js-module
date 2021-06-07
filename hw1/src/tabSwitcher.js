const tab = document.querySelectorAll('.tab')
const app = document.querySelectorAll('.app')
export const selectTab = function(event) {
    //console.log(event.target)
    let indTab
    if(event.target.className === "tab") {
        for(let i = 0; i < tab.length; i++){
            if(tab[i] === event.target) {
                indTab = tab[i]
                tab[i].classList.add("active")
                app[i].classList.remove("hide")
            } else {
                tab[i].classList.remove("active")
                app[i].classList.add("hide")
            }
        }

        console.log(event.target, tab, indTab)

    }
}