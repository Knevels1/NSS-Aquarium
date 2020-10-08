export const Tips = (tipsObj) => {
    return `
    <div class="Tips">
    <p>TIPS</p>
    <p class="tip__topic">${tipsObj.topic} = 
     ${tipsObj.text}</p>
    <p>TEMPERATURE OF WATER</p>
    <p class="temperature">${tipsObj.temp}</p>
    </div>
    `
}