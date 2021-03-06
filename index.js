const uniStartA = 65;
const uniEndA = 91;

const elements = {
    navigate: document.querySelector('.navigationList'),
    newList: document.querySelector('.listOfBooks'),
    footerList: document.querySelector('.footerList'),
    refresh: document.querySelector('.refreshed'),
    header: document.querySelector('.header'),
    btnToggle: document.querySelector('.btnToggle')
};

const listOfBooks = [
    "  To Kill a Mockingbird",
    "Pride and Prejudice",
    "The Diary of Anne Frank" ,
    "1984" ,
    "Harry Potter and the Sorcerer's Stone",
    "The Lord of the Rings",
    "The Great Gatsby" ,
    "Charlotte's Web" ,
    "The Hobbit" ,
    "Little Women" ,
    "Fahrenheit 451" ,
    "Jane Eyre" ,
    "Animal Farm" ,
    "Gone with the Wind" ,
    "The Catcher in the Rye" ,
    "The Book Thief" ,
    "The Adventures of Huckleberry Finn" ,
    "The Hunger Games" ,
    "The Help" ,
    "The Lion, the Witch, and the Wadrobe" ,
    "The Grapes of Wrath" ,
    "The Lord of the Flies" ,
    "The Kite Runner" ,
    "Night" ,
    "Hamlet" ,
    "A Wrinkle in Time" ,
    "Of Mice and Men" ,
    "A Tale of Two Cities" ,
    "Romeo and Juliet" ,
    "The Hitchhikers Guide to the Galaxy" ,
    "The Secret Garden" ,
    "A Christmas Carol" ,
    "The Little Prince" ,
    "Brave New World" ,
    "Harry Potter and the Deathly Hallows",
    "The Giver" ,
    "The Handmaid's Tale" ,
    "Where the Sidewalk Ends" ,
    "Wuthering Heights" ,
    "The Fault in Our Stars" ,
    "Anne of Green Gables" ,
    "The Adventures of Tom Sawyer" ,
    "Macbeth" ,
    "The Girl with a Dragon Tattoo" ,
    "Frankenstein" ,
    "The Holy Bible: King James Version",
    "The Color Purple" ,
    "The Count of Monte Cristo" ,
    "A Tree Grows in Brooklyn" ,
    "East of Eden" ,
    "Alice in Wonderland" ,
    "In Cold Blood",
    "Catch-22",
    "The Stand" ,
    "Outlander" ,
    "Harry Potter and the Prisoner of Azkaban",
    "Enders Game",
    "Anna Karenina" ,
    "Watership Down",
    "Memoirs of a Geisha",
    "Rebecca" ,
    "A Game of Thrones" ,
    "Great Expectations" ,
    "The Old Man and the Sea",
    "The Adventures of Sherlock Holmes",
    "Les Misérables" ,
    "Harry Potter and the Half-Blood Prince",
    "Life of Pi" ,
    "The Scarlet Letter" ,
    "Celebrating Silence: Excerpts from Five Years of Weekly Knowledge" ,
    "The Chronicles of Narnia" ,
    "The Pillars of the Earth" ,
    "Catching Fire" ,
    "Charlie and the Chocolate Factory" ,
    "Dracula" ,
    "The Princess Bride" ,
    "Water for Elephants" ,
    "The Raven" ,
    "The Secret Life of Bees" ,
    "The Poisonwood Bible: A Novel" ,
    "One Hundred Years of Solitude" ,
    "The Time Traveler's Wife" ,
    "The Odyssey" ,
    "The Good Earth (House of Earth #1)" ,
    "Mockingjay (Hunger Games #3)" ,
    "And Then There Were None" ,
    "The Thorn Birds" ,
    "A Prayer for Owen Meany",
    "The Glass Castle" ,
    "The Immortal Life of Henrietta Lacks" ,
    "Crime and Punishment" ,
    "The Road" ,
    "The Things They Carried" ,
    "Siddhartha" ,
    "Beloved" ,
    "Slaughterhouse-Five" ,
    "Cutting For Stone" ,
    "The Phantom Tollbooth" ,
    "The Brothers Karamazov" ,
    "The Story of My Life"
];

const getAlphabet = () => {
    let print = [];
    for (let i = uniStartA; i < uniEndA ; i++){
        print.push(String.fromCharCode(i));
    }
    return print;
};

function find(element) {
    return listOfBooks.filter((e) => {
        return e.replace(/\s+/g,'').toUpperCase()[0] === element;
    });
}

function renderLetter(array, letter) {
    const newDOMElement = `<ul class="addedList">  <span class="head" id="${letter}"> ${letter}</span>
${array.map((el) => `<li> ${el}</li>`).join('')} </ul>`;
    elements.newList.insertAdjacentHTML("beforeend", newDOMElement);
}



window.onscroll = function() {
    if (window.pageYOffset !== 0) {
        elements.header.classList.add("fixed");
    } else {
        elements.header.classList.remove("fixed");
    }
};

// let m = -1;

let arrAlphabet = [...getAlphabet()];

elements.navigate.innerHTML = arrAlphabet.map((el) => `<li class="navList ${el}"> <a href="#${el}"> ${el} </a></li>`).join('');
// elements.footerList.innerHTML = arrAlphabet.map((el) => `<li class="navListB ${el}"> <a href="#${el}"> ${el} </a></li>`).join('');

let aBook = arrAlphabet.map( (el) => find(el));

aBook.forEach( (element, index) => {
    if (element.length === 0) {
        document.querySelector(`.${arrAlphabet[index]}`).classList.add('notInList');
        // document.querySelector(`.navListB.${arrAlphabet[index]}`).classList.add('inActive');
    } else {
        renderLetter(element, arrAlphabet[index]);
    }
});

// elements.navigate.addEventListener('click', (e)=> {
//
//     if (e.target.matches('.navList')){
//         document.getElementById(e.target.classList[1]).style.order = m--;
//         console.log(e.target.classList[1]);
//         console.log(e.target.firstChild);
//     }
// });

elements.refresh.addEventListener('click', () => {
    let list = document.querySelectorAll('.addedList');
    list.forEach((el) => el.style.order = 0);
});

elements.btnToggle.addEventListener('click', () =>{

    console.log(elements.btnToggle.classList);
    if (elements.newList.classList.value === 'listOfBooks pressed') {
        elements.newList.classList.remove('pressed');
    } else{
        elements.newList.classList.add('pressed');
    }
});




/*
const str = "{(sdsfsd({jkf  skdfjsdkfj  )klj}fdl)sf }";
let arrStr = [];


for (let i=0; i < str.length; i++) {
    if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
        arrStr.push(str[i])
    }
}

for (let i=0; i < str.length; i++) {
    if (str[i] === '}') {
        if (arrStr[arrStr.length-1] !== '{'){
            console.log('error');
            break;
        } else{
            arrStr.splice(arrStr.length-1, 1);
        }
    }
    if (str[i] === ']') {
        if (arrStr[arrStr.length-1] !== '['){
            console.log('error');
            break;
        } else{
            arrStr.splice(arrStr.length-1, 1);
            console.log('ok');
        }
        if (str[i] === ')') {
        if (arrStr[arrStr.length-1] !== '('){
            console.log('error');
            break;
        } else{
            arrStr.splice(arrStr.length-1, 1);
            console.log('ok');
        }
    }
}
*/





