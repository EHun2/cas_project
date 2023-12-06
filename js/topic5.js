var MCQAnswer;

function MCQ(number) {
    var imageElement = document.getElementById('MCQcontainer');
    
    if (number === 1) {
        imageElement.src = '/MCQs/Topic5/1.png';
        MCQAnswer = 'C';
    } 
    else if (number === 2) {
        imageElement.src = '/MCQs/Topic5/2.png';
        MCQAnswer = 'A';
    } 
    else if (number === 3) {
        imageElement.src = '/MCQs/Topic5/3.png';
        MCQAnswer = 'D';
    }
    else if (number === 4) {
        imageElement.src = '/MCQs/Topic5/4.png';
        MCQAnswer = 'B';
    }
    else if (number === 5) {
        imageElement.src = '/MCQs/Topic5/5.png';
        MCQAnswer = 'B';
    }
    else if (number === 6) {
        imageElement.src = '/MCQs/Topic5/6.png';
        MCQAnswer = 'C';
    }
    else if (number === 7) {
        imageElement.src = '/MCQs/Topic5/7.png';
        MCQAnswer = 'A';
    }
    else if (number === 8) {
        imageElement.src = '/MCQs/Topic5/8.png';
        MCQAnswer = 'A';
    }
    else if (number === 9) {
        imageElement.src = '/MCQs/Topic5/9.png';
        MCQAnswer = 'B';
    } 
    else if (number === 10) {
        imageElement.src = '/MCQs/Topic5/10.png';
        MCQAnswer = 'C';
    }
    else if (number === 11) {
        imageElement.src = '/MCQs/Topic5/11.png';
        MCQAnswer = 'A';
    }
    else if (number === 12) {
        imageElement.src = '/MCQs/Topic5/12.png';
        MCQAnswer = 'D';
    }
    else if (number === 13) {
        imageElement.src = '/MCQs/Topic5/13.png';
        MCQAnswer = 'C';
    }
    else if (number === 14) {
        imageElement.src = '/MCQs/Topic5/14.png';
        MCQAnswer = 'B';
    }
    else if (number === 15) {
        imageElement.src = '/MCQs/Topic5/15.png';
        MCQAnswer = 'B';
    }
    else if (number === 16) {
        imageElement.src = '/MCQs/Topic5/16.png';
        MCQAnswer = 'A';
    }
    else if (number === 17) {
        imageElement.src = '/MCQs/Topic5/17.png';
        MCQAnswer = 'C';
    }
    else if (number === 18) {
        imageElement.src = '/MCQs/Topic5/18.png';
        MCQAnswer = 'C';
    } 
    else if (number === 19) {
        imageElement.src = '/MCQs/Topic5/19.png';
        MCQAnswer = 'D';
    }
    else if (number === 20) {
        imageElement.src = '/MCQs/Topic5/20.png';
        MCQAnswer = 'A';
    }
    else if (number === 21) {
        imageElement.src = '/MCQs/Topic5/21.png';
        MCQAnswer = 'C';
    }
    else if (number === 22) {
        imageElement.src = '/MCQs/Topic5/22.png';
        MCQAnswer = 'B';
    }
    else if (number === 23) {
        imageElement.src = '/MCQs/Topic5/23.png';
        MCQAnswer = 'C';
    }
    else if (number === 24) {
        imageElement.src = '/MCQs/Topic5/24.png';
        MCQAnswer = 'A';
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