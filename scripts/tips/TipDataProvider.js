const tipsForCare =[
    {
        topic: "Water Salination",
        text: "no salty water",
        temp: "75-80 farenheit"

    }
]

export const careTips = () => {
    return tipsForCare.slice()
}