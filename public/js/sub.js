const categoriesTexts = ['Books', 'Films', 'Science', 'Psychology', 'Personal Thoughts'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === categoriesTexts.length){
        count = 0;
    }
    currentText = categoriesTexts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing-categories').textContent = letter;


    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }

})();