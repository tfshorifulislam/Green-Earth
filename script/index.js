const url = 'https://openapi.programming-hero.com/api/categories'
const categoriesContainer = document.getElementById('categories-container')
const loadingSpinner = document.getElementById('loading-spinner')

// loading spinner;
const showLoading = () => {
    loadingSpinner.classList.remove('hidden')
    mainContent.innerHTML = ''
}

const hiddenSpinner = () => {
    loadingSpinner.classList.add('hidden')
}

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
        newBtn.classList = 'all-tress-btn w-full  p-2 px-5 text-black flex justify-start rounded-lg btn btn-ghost'
        newBtn.innerText = element.category_name
        newBtn.onclick = () => selectCategory(element.id, newBtn)
        categoriesContainer.appendChild(newBtn)
    });
}
allCategories()
// select Category
const selectCategory = (categoryId, newBtn) => {
    showLoading()

    const allSectionButton = document.querySelectorAll('.all-tress-btn')

    allSectionButton.forEach(btn => {

        btn.classList.remove('bg-[#15803D]', 'text-white')
    });
    newBtn.classList.add('bg-[#15803D]', 'text-white')

    const url = `https://openapi.programming-hero.com/api/category/${categoryId}`
    fetch(url)
        .then(res => res.json())
        .then(data => plantCategory(data.plants))

}

const plantCategory = (plant) => {
    allPlantCards(plant)
    hiddenSpinner()
}

//  All Plants
const mainContent = document.getElementById('main-content')
const plantsUrl = 'https://openapi.programming-hero.com/api/plants'

const allPlant = () => {
    showLoading()

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
                            <img onclick="displayModal(${plantCards.id})" class="w-full h-[187px] rounded-lg cursor-pointer" src="${plantCards.image}" alt="">
                        </div>
                        <div class="space-y-2">
                            <h2 class="font-semibold text-[#1F2937]" onclick="displayModal(${plantCards.id})" >${plantCards.name}</h2>
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

// all tress button;
const allPlantBtn = document.getElementById('all-plant-btn')

allPlantBtn.onclick = () => {
    showLoading()
    const allSectionButton = document.querySelectorAll('.all-tress-btn')

    allSectionButton.forEach(btn => {

        btn.classList.remove('bg-[#15803D]', 'text-white')
    });
    allPlantBtn.classList.add('bg-[#15803D]', 'text-white')

    hiddenSpinner()
    allPlant()
}


// modal section;
const myModal = document.getElementById('my_modal_3')
const modalTitle = document.getElementById('modal-title')
const modalImg = document.getElementById('modal-img')
const categoryDetails = document.getElementById('category-details')
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price')

const displayModal = (treeId) => {
    const url = `https://openapi.programming-hero.com/api/plant/${treeId}`
    fetch(url)
        .then(res => res.json())
        .then(data => modal(data.plants))

    myModal.showModal()
}

const modal = (modalId) => {
    // console.log(modalId);
    modalTitle.innerText = modalId.name;
    modalImg.src = modalId.image;
    categoryDetails.innerText =  modalId.category;
    modalDescription.innerText = modalId.description;
    modalPrice.innerText = modalId.price;
}
