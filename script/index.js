const url = 'https://openapi.programming-hero.com/api/categories'
const categoriesContainer = document.getElementById('categories-container')

// all categories button;
const allCategories = () => {
    fetch(url)
        .then(res => res.json())
        .then(data => categories(data))
}

const categories = (categoriesBtn) => {

    categoriesBtn.categories.forEach(element => {
        // console.log(categoriesBtn)
        const newBtn = document.createElement('button');
        newBtn.classList = 'w-full  p-2 px-5 text-black flex justify-start rounded-lg btn btn-ghost'
        newBtn.innerText = element.category_name
        categoriesContainer.appendChild(newBtn)
    });
}
allCategories()

//  All Plants
const mainContent = document.getElementById('main-content')
const plantsUrl = 'https://openapi.programming-hero.com/api/plants'

const allPlant = () => {
    fetch(plantsUrl)
        .then(res => res.json())
        .then(data => allPlantCards(data.plants))
}

const allPlantCards = (cards) => {

    cards.forEach(plantCards => {
        const plantCardsDiv = document.createElement('div')
        plantCardsDiv.innerHTML = `
        
        <div class="bg-white p-4 rounded-2xl space-y-3">
                        <div>
                            <img class="w-full h-[187px] rounded-lg" src="${plantCards.image}" alt="">
                        </div>
                        <div class="space-y-2">
                            <h2 class="font-semibold text-[#1F2937]">${plantCards.name}</h2>
                            <p class="font-normal text-sm text-[#1F2937] line-clamp-2">${plantCards.description}</p>
                            <div class="flex justify-between">

                                <div class="py-1 px-3 bg-[#DCFCE7] rounded-full">
                                    <h2 class="text-[#15803D] font-medium leading-5 ">${plantCards.category}</h2>
                                </div>

                                <h2 class="font-semibold text-[#1F2937] leading-5">${plantCards.price}</h2>
                            </div>
                        </div>
                        <button class="btn w-full text-white rounded-full bg-[#15803D]">Success</button>
                    </div>
        
        `

        mainContent.appendChild(plantCardsDiv)
    });
}
allPlant()