fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => Cards(data.results));


function Cards(stuff) {
    const charactersContainer = document.getElementById('card-group')
    stuff.forEach(character => {
        charactersContainer.innerHTML = charactersContainer.innerHTML +
            `<div class="image-col mb-5 mt-5">
            <img src=${character.image}></img>
            </div>` +
            `<div class="col-2 mb-5 mt-5 text-col">
            <div class="card-body">


            <p class="card-text mt-5">

            <button data-info="name" type="button" class="btn name m-0 text-white" 
            onclick="myFun(this.dataset.info, this.innerHTML)">${character.name}</button><br>

            <button data-info="name" type="button" class="btn name m-0 text-white" 
            onclick="myFun(this.dataset.info, this.innerHTML)">
            <h4>Status: ${character.status}</h4></button><br>

            <button data-info="name" type="button" class="btn name m-0 text-white" 
            onclick="myFun(this.dataset.info, this.innerHTML)">
            <h4>Species: ${character.species}</h4></button><br>

            <button data-info="name" type="button" class="btn name m-0 text-white" 
            onclick="myFun(this.dataset.info, this.innerHTML)">
            <h4>Type: ${character.type}</h4></button><br>

            <button data-info="name" type="button" class="btn name m-0 text-white" 
            onclick="myFun(this.dataset.info, this.innerHTML)">
            <h4>Gender: ${character.gender}</h4></button><br>
            </p>
            </div>
            </div><br>`
    });

}

function myFun(info, self) {
  const charactersContainer = document.querySelector('#card-group');
  charactersContainer.innerHTML = "";
  fetch(`https://rickandmortyapi.com/api/character/?${info}=${self}`)
        .then((res) => res.json())
        .then((data) => {
            let stuff = data.results;
            const totalPages = data.info.pages;

            if (totalPages > 1) {
                for (i = 2; i <= totalPages; i++) {
                    let page = i;
                    fetch(
                        `https://rickandmortyapi.com/api/character/?page=${i}&${info}=${self}`
                    )
                        .then((res) => res.json())
                        .then((data) => {
                            stuff = stuff.concat(data.results);

                            if (page === totalPages) {
                                Cards(stuff);
                            }
                        });
                }
            } else {
                Cards(stuff);
            }
        })
};

function search() {
    const search = document.querySelector("#header-search"),
        charactersContainer = document.querySelector('#card-group');

    let searchTerm = "", output = "";

    search.addEventListener("keyup", debounce(() => {
        charactersContainer.innerHTML = "";

        output = "";
        searchTerm = search.value.replace(" ", "+");

        fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
            .then((res) => res.json())
            .then((data) => {
                let characters = data.results;
                const totalPages = data.info.pages;

                if (totalPages > 1) {
                    for (i = 2; i <= totalPages; i++) {
                        let page = i;
                        fetch(
                            `https://rickandmortyapi.com/api/character/?page=${i}&name=${searchTerm}`
                        )
                            .then((res) => res.json())
                            .then((data) => {
                                characters = characters.concat(data.results);

                                if (page === totalPages) {
                                    Cards(characters);
                                }
                            });
                    }
                } else {
                    Cards(characters);
                }
            })
            .catch((err) => {
                charactersContainer.innerHTML = `<p class="no-results">No Results Found</p>`;
            });
    })
    );

    //codes for search-box
    function debounce(func, wait = 300, immediate) {
        let timeout;

        return () => {
            const context = this,
                args = arguments;

            clearTimeout(timeout);

            timeout = setTimeout(() => {
                timeout = null;
                if (!immediate) func.apply(context, args);
            }, wait);

            if (immediate && !timeout) func.apply(context, args);
        };
    }
};

window.addEventListener("DOMContentLoaded", () => {
    search();
});

function handle(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        search();
    }
}
