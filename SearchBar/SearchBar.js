let first = true;
let list = [];


//dynamic 


keyUpHandler = () => {
    console.log("logged");
    const item = document.getElementById("search").value;
    console.log("Value received as input: " + item);

    const ul = document.getElementById("ul");
    console.log(ul);

    if (first && item) {
        document.querySelectorAll("li").forEach((el) => list.push(el.innerHTML));
        console.log(list);
        first = false;
    }

    let newObject = "";
    for (let listItem of list) {
        console.log(listItem);
        if (listItem.match(item)) {
            console.log(listItem);
            newObject += `<li>${listItem}</li>`
        }
    }

    if (newObject) {
        console.log(newObject);
        ul.innerHTML = newObject;
    }

}

searchHandler = () => {

    const item = document.getElementById("search").value;
    console.log("Value received as input: " + item);

    const ul = document.getElementById("ul");
    console.log(ul);

    // const list = document.getElementById("ul").children.innerHTML;

    if (first && item) {
        document.querySelectorAll("li").forEach((el) => list.push(el.innerHTML));
        console.log(list);
        first = false;
    }

    //Static Search

    // let newObject="";
    // for (let listItem of list){
    //     if(listItem.innerHTML.match(item)){
    //         newObject+=`<li>${listItem.innerHTML}</li>`
    //         // ul.innerHTML += `<li>${item}</li>`;
    //     }
    // }

    // console.log(newObject);
    // ul.innerHTML = newObject;


    //Half dynamic

    // let first = true;
    // let list = [];

    // let newObject = "";
    // for (let listItem of list) {
    //     console.log(listItem);
    //     if (listItem.match(item)) {
    //         console.log(listItem);
    //         newObject += `<li>${listItem}</li>`
    //     }
    // }

    // if (newObject) {
    //     console.log(newObject);
    //     ul.innerHTML = newObject;
    // }






}
