import  {Locations} from "./Location.js"

import  {locationInfo} from "./LocationDataProvider.js"

export const LocationList = () => {
    
    const contentElement = document.querySelector(".contentContainer__left")
    const locations = locationInfo()

    let locationHtmlRepresemtations = ""
    for (const location of locations) {
        locationHtmlRepresemtations += Locations(location)
    }

    contentElement.innerHTML += `
    <section class="travel__quotes">
    <div class="quote">
       ${locationHtmlRepresemtations}
    </div>
    </section>
    <section class="travel__locations">
`
}