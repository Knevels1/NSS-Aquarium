export const Locations = (locationsObj) => {
    return `
    <h3>Travel Quotes</h3>
    <div class="quote">
    <p class="quote__text">${locationsObj.quote}</p>
    <p class="quote__author">${locationsObj.author}</p>
    <p class="quote__location">${locationsObj.quote_location}</p>
    `
}