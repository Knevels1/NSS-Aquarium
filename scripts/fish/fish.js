export const Fish = (fishObj) => {
    return `
    <div class="fish">
    <p>NAME</p>
    <p class="fish__name">${fishObj.name}</p>
    <img class="fish__image" src="${fishObj.image}" alt="" height= "100px">
    <p>SPECIES</p>
    <p class="fish__species">${fishObj.species}</p>
    <p>LENGTH</p>
    <p class="fish__length">${fishObj.length}inches (Adult)</p>
    <p>HARVEST LOCATION</p>
    <p class="fish__Location">${fishObj.harvLocation}</p>
    <p>DIET</p>
    <p class="fish__food">${fishObj.food}</p>
    </div>
    `
}