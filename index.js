const uniStartA = 65;
const uniEndA = 91;

const elements = {
    navigate: document.querySelector('.navigationList'),
    newList: document.querySelector('.listOfBooks'),
    footerList: document.querySelector('.footerList')
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
    let arrR =  listOfBooks.filter((e) => {
        return e.replace(/\s+/g,'').toUpperCase()[0] === element;
    });
    return arrR;
};

function renderLetter(array, letter) {
    const newDOMElement = `<ul class="addedList letter${letter}">  <span> ${letter}</span>
${array.map((el) => `<li> ${el}</li>`).join('')} </ul>`;
    elements.newList.insertAdjacentHTML("beforeend", newDOMElement);
}



window.onscroll = function() {
    if (window.pageYOffset !== 0) {
        elements.navigate.classList.add("scrolled");
    } else {
        elements.navigate.classList.remove("scrolled");
    }
};



let arrAlphabet = [...getAlphabet()];

elements.navigate.innerHTML = arrAlphabet.map((el) => `<li class="navList ${el}"> ${el}</li>`).join('');
elements.footerList.innerHTML = arrAlphabet.map((el) => `<li class="navListB ${el}"> <a href="#${el}"> ${el} </a></li>`).join('');

console.log(elements.navigate);


let aBook =[];

aBook = arrAlphabet.map( (el) => find(el));

aBook.forEach( (element, index) => {
    if (element.length === 0) {
        document.querySelector(`.${arrAlphabet[index]}`).classList.add('notInList');
        document.querySelector(`.navListB.${arrAlphabet[index]}`).classList.add('inActive');
        return;
    } else {
        const newDOMElement = `<ul class="addedList" id="${arrAlphabet[index]}">  <span> ${arrAlphabet[index]}</span>
${element.map((el) => `<li> ${el}</li>`).join('')} </ul>`;
        elements.newList.insertAdjacentHTML("beforeend", newDOMElement);
    }
});

elements.navigate.addEventListener('click', (e)=> {
    if (e.target.matches('.navList')){

        renderLetter(aBook[arrAlphabet.indexOf(e.target.classList[1])], e.target.classList[1]);
    }
});

