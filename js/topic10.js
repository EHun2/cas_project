var MCQAnswer;

function MCQ(number) {
    var imageElement = document.getElementById('MCQcontainer');
    
    if (number === 1) {
        imageElement.src = '/MCQs/Topic10/1.png';
        MCQAnswer = 'B';
    } 
    else if (number === 2) {
        imageElement.src = '/MCQs/Topic10/2.png';
        MCQAnswer = 'C';
    } 
    else if (number === 3) {
        imageElement.src = '/MCQs/Topic10/3.png';
        MCQAnswer = 'B';
    }
    else if (number === 4) {
        imageElement.src = '/MCQs/Topic10/4.png';
        MCQAnswer = 'B';
    }
    else if (number === 5) {
        imageElement.src = '/MCQs/Topic10/5.png';
        MCQAnswer = 'B';
    }
    else if (number === 6) {
        imageElement.src = '/MCQs/Topic10/6.png';
        MCQAnswer = 'A';
    }
    else if (number === 7) {
        imageElement.src = '/MCQs/Topic10/7.png';
        MCQAnswer = 'A';
    }
    else if (number === 8) {
        imageElement.src = '/MCQs/Topic10/8.png';
        MCQAnswer = 'D';
    }
    else if (number === 9) {
        imageElement.src = '/MCQs/Topic10/9.png';
        MCQAnswer = 'C';
    } 
    else if (number === 10) {
        imageElement.src = '/MCQs/Topic10/10.png';
        MCQAnswer = 'C';
    }
    else if (number === 11) {
        imageElement.src = '/MCQs/Topic10/11.png';
        MCQAnswer = 'B';
    }
    else if (number === 12) {
        imageElement.src = '/MCQs/Topic10/12.png';
        MCQAnswer = 'C';
    }
    else if (number === 13) {
        imageElement.src = '/MCQs/Topic10/13.png';
        MCQAnswer = 'B';
    }
    else if (number === 14) {
        imageElement.src = '/MCQs/Topic10/14.png';
        MCQAnswer = 'B';
    }
    else if (number === 15) {
        imageElement.src = '/MCQs/Topic10/15.png';
        MCQAnswer = 'B';
    }
    else if (number === 16) {
        imageElement.src = '/MCQs/Topic10/16.png';
        MCQAnswer = 'C';
    }
    else if (number === 17) {
        imageElement.src = '/MCQs/Topic10/17.png';
        MCQAnswer = 'C';
    }
    else if (number === 18) {
        imageElement.src = '/MCQs/Topic10/18.png';
        MCQAnswer = 'C';
    }
    else if (number === 19) {
        imageElement.src = '/MCQs/Topic10/19.png';
        MCQAnswer = 'B';
    }
    else if (number === 20) {
        imageElement.src = '/MCQs/Topic10/20.png';
        MCQAnswer = 'D';
    }
    else if (number === 21) {
        imageElement.src = '/MCQs/Topic10/21.png';
        MCQAnswer = 'D';
    } 
    else if (number === 22) {
        imageElement.src = '/MCQs/Topic10/22.png';
        MCQAnswer = 'A';
    }
    else if (number === 23) {
        imageElement.src = '/MCQs/Topic10/23.png';
        MCQAnswer = 'C';
    }
    else if (number === 24) {
        imageElement.src = '/MCQs/Topic10/24.png';
        MCQAnswer = 'A';
    }
    else if (number === 25) {
        imageElement.src = '/MCQs/Topic10/25.png';
        MCQAnswer = 'C';
    }
    else if (number === 26) {
        imageElement.src = '/MCQs/Topic10/26.png';
        MCQAnswer = 'C';
    }
    else if (number === 27) {
        imageElement.src = '/MCQs/Topic10/27.png';
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