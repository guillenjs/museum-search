let mainContainer = document.querySelector('.main')

window.addEventListener('DOMContentLoaded', () => {
    searchFrom()
}
)

let searchFrom = () => {
    console.log('hello')
    let newDiv = document.createElement('div')
        newDiv.className = "search-container"

    let newForm = document.createElement('form')
        newForm.className = "searchform"
        // newForm.placeholder = "search"

    let formInput = document.createElement('input')
        formInput.className = "searchbar"
        formInput.placeholder = "Search"
    
    let space = document.createElement('br')


    let searchButton = document.createElement('button')
        searchButton.innerText = 'Search'
       

        formInput.addEventListener('input', (evt) => {
            console.log(evt.target.value)
        }
        )


        newForm.append(formInput, space,searchButton)
        newDiv.append(newForm)
        mainContainer.append(newDiv)

}
