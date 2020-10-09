/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Bubba",
        species: "Paracheirodon innesi",
        length: 1.5,
        harvLocation: "western and northern Amazon basin in southeastern Colombia, eastern Peru, and western Brazil",
        food: "brine shrimp, daphnia, freeze-dried bloodworms",
        image: "./images/Bubba.webp"
    },
    {
        name: "Scrappy",
        species: "Betta splendens",
        length:2.8 ,
        harvLocation: "Mekong and Chao Phraya river basins in Thailand (formerly called Siam)",
        food: "zooplankton, crustaceans, and the larvae of mosquitoes and other water-bound insects",
        image: "./images/scrappy.jpeg"
    },
    {
        name: "Pepper",
        species: "Epalzeorhynchos bicolor",
        length: 12,
        harvLocation: "Bueng Boraphet and the streams which lead from it, and as being found in the Chao Phraya River as far south as Bangkok",
        food: "plants, crustaceans and other small insects",
        image:"./images/pepper.jpg "
    },
    {
        name: "Sammy",
        species: "Melanotaeniidae",
        length: 6,
        harvLocation: "northern and eastern Australia, New Guinea, islands in Cenderawasih Bay and Raja Ampat Islands in Indonesia, and in Madagascar.",
        food: "algae, small crustaceans and aquatic insects",
        image:"./images/sammy.jpg"
    },
    {
        name: "Sammy's Twin",
        species: "Melanotaeniidae",
        length: 10,
        harvLocation: "northern and eastern Australia, New Guinea, islands in Cenderawasih Bay and Raja Ampat Islands in Indonesia, and in Madagascar.",
        food: "algae, small crustaceans and aquatic insects",
        image:"./images/sammy.jpg"
    },
    {
        name: "Charlie (peppers brother)",
        species: "Epalzeorhynchos bicolor",
        length: 36,
        harvLocation: "Bueng Boraphet and the streams which lead from it, and as being found in the Chao Phraya River as far south as Bangkok",
        food: "plants, crustaceans and other small insects",
        image:"./images/pepper.jpg "
    },
]

export const useFish = () =>{
    return fishCollection.slice()
}
export const mostHolyFish = () => {

    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
         if(fish.length % 3 === 0){
             holyFish.push(fish)

         }
        console.log(fish)

    }

    return holyFish
}

 export const soldierFish = () => {
     // 5, 10, 15, 20, 25, etc... fish
     const soldierFish = []

     for (const fish of fishCollection) {
         if(fish.length % 5 === 0){
             soldierFish.push(fish)
         }
     }
     
     
     return soldiers
 }

 export const nonHolyFish () => {
     // Any fish not a multiple of 3 or 5
     return regularFish
 }