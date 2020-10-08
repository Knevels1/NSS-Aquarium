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
        length: 6,
        harvLocation: "Bueng Boraphet and the streams which lead from it, and as being found in the Chao Phraya River as far south as Bangkok",
        food: "plants, crustaceans and other small insects",
        image:"./images/pepper.jpg"
    },
    {
        name: "Sammy",
        species: "Melanotaeniidae",
        length: 4.7,
        harvLocation: "northern and eastern Australia, New Guinea, islands in Cenderawasih Bay and Raja Ampat Islands in Indonesia, and in Madagascar.",
        food: "algae, small crustaceans and aquatic insects",
        image:"./images/sammy.jpg"
    },
]

export const useFish = () =>{
    return fishCollection.slice()
}

export const addFish = (fishObject) => {
    fishCollection.push(fishObject)
}