// console.log("I'm JS")

const loadLessons = () => {
    // const url = "https://openapi.programming-hero.com/api/levels/all"

    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json()) //promise of json data
        .then((json) => displayLesson(json.data));
};

const loadLevelWord = (id) => {
    
    const url = `https://openapi.programming-hero.com/api/level/${id}`

    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

const displayLesson = (lessons) => {
    // console.log(lessons);


    //1.get the container

    const levelContainer = document.getElementById("level-container");

    levelContainer.innerHTML = ""

    //2.get into every lessons

    for (let lesson of lessons) {

        //3.create html element

        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `<button onclick="loadLevelWord( ${lesson.level_no})" href="" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>`


        //4.append into container




        levelContainer.append(btnDiv);

    }







};




loadLessons();