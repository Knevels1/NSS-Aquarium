export const Locations = (locationsObj) => {
    return `
    <h3>Travel Quotes</h3>
    <div class="quote">
    <p class="quote__text">${locationsObj.quote}</p>
    <p class="quote__author">${locationsObj.author}</p>
    <p class="quote__location">${locationsObj.quote_location}</p>
    <h4> Places to Travel </h4>
    <div class="location">
    <img class="image" src="${locationsObj.locationImage}" width="800px" height="500px">
    <p class="locations__name">${locationsObj.locationName}</p>
    <p class="Location__located">${locationsObj.located}</p>
    `
}
