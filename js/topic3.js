var MCQAnswer;

function MCQ(number) {
    var imageElement = document.getElementById('MCQcontainer');
    
    if (number === 1) {
        imageElement.src = '/MCQs/Topic3/1.png';
        MCQAnswer = 'D';
    } 
    else if (number === 2) {
        imageElement.src = '/MCQs/Topic3/2.png';
        MCQAnswer = 'C';
    } 
    else if (number === 3) {
        imageElement.src = '/MCQs/Topic3/3.png';
        MCQAnswer = 'B';
    }
    else if (number === 4) {
        imageElement.src = '/MCQs/Topic3/4.png';
        MCQAnswer = 'A';
    }
    else if (number === 5) {
        imageElement.src = '/MCQs/Topic3/5.png';
        MCQAnswer = 'A';
    }
    else if (number === 6) {
        imageElement.src = '/MCQs/Topic3/6.png';
        MCQAnswer = 'C';
    }
    else if (number === 7) {
        imageElement.src = '/MCQs/Topic3/7.png';
        MCQAnswer = 'D';
    }
    else if (number === 8) {
        imageElement.src = '/MCQs/Topic3/8.png';
        MCQAnswer = 'C';
    }
    else if (number === 9) {
        imageElement.src = '/MCQs/Topic3/9.png';
        MCQAnswer = 'A';
    } 
    else if (number === 10) {
        imageElement.src = '/MCQs/Topic3/10.png';
        MCQAnswer = 'B';
    }
    else if (number === 11) {
        imageElement.src = '/MCQs/Topic3/11.png';
        MCQAnswer = 'B';
    }
    else if (number === 12) {
        imageElement.src = '/MCQs/Topic3/12.png';
        MCQAnswer = 'A';
    }
    else if (number === 13) {
        imageElement.src = '/MCQs/Topic3/13.png';
        MCQAnswer = 'D';
    }
    else if (number === 14) {
        imageElement.src = '/MCQs/Topic3/14.png';
        MCQAnswer = 'A';
    }
    else if (number === 15) {
        imageElement.src = '/MCQs/Topic3/15.png';
        MCQAnswer = 'C';
    }
    else if (number === 16) {
        imageElement.src = '/MCQs/Topic3/16.png';
        MCQAnswer = 'D';
    }
    else if (number === 17) {
        imageElement.src = '/MCQs/Topic3/17.png';
        MCQAnswer = 'A';
    }
    else if (number === 18) {
        imageElement.src = '/MCQs/Topic3/18.png';
        MCQAnswer = 'A';
    }
    else if (number === 19) {
        imageElement.src = '/MCQs/Topic3/19.png';
        MCQAnswer = 'A';
    }
    else if (number === 20) {
        imageElement.src = '/MCQs/Topic3/20.png';
        MCQAnswer = 'B';
    }
    else if (number === 21) {
        imageElement.src = '/MCQs/Topic3/21.png';
        MCQAnswer = 'B';
    }
    else if (number === 22) {
        imageElement.src = '/MCQs/Topic3/22.png';
        MCQAnswer = 'C';
    }
}
function showAnswer() {
    alert(MCQAnswer);
}

function Mark() {
    var radioButtons = document.getElementsByName('radio');
    var selectedOption = '';

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedOption = radioButtons[i].value;
            break;
        }
    }

    if (selectedOption === MCQAnswer) {
        alert('Correct');
    } else {
        alert('Wrong');
    }
}