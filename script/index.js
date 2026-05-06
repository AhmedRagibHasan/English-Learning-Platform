// console.log("I'm JS")

const loadLessons = () => {
    const url = "https://openapi.programming-hero.com/api/levels/all"

    fetch("url")
    .then((res)=> res.json) //promise of json data
    .then((json) => console.log(json));
};

loadLessons()