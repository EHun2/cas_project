var MCQAnswer;

function MCQ(number) {
    var imageElement = document.getElementById('MCQcontainer');
    
    if (number === 1) {
        imageElement.src = '/MCQs/Topic7/1.png';
        MCQAnswer = 'C';
    } 
    else if (number === 2) {
        imageElement.src = '/MCQs/Topic7/2.png';
        MCQAnswer = 'A';
    } 
    else if (number === 3) {
        imageElement.src = '/MCQs/Topic7/3.png';
        MCQAnswer = 'C';
    }
    else if (number === 4) {
        imageElement.src = '/MCQs/Topic7/4.png';
        MCQAnswer = 'B';
    }
    else if (number === 5) {
        imageElement.src = '/MCQs/Topic7/5.png';
        MCQAnswer = 'C';
    }
    else if (number === 6) {
        imageElement.src = '/MCQs/Topic7/6.png';
        MCQAnswer = 'C';
    }
    else if (number === 7) {
        imageElement.src = '/MCQs/Topic7/7.png';
        MCQAnswer = 'B';
    }
    else if (number === 8) {
        imageElement.src = '/MCQs/Topic7/8.png';
        MCQAnswer = 'C';
    }
    else if (number === 9) {
        imageElement.src = '/MCQs/Topic7/9.png';
        MCQAnswer = 'C';
    } 
    else if (number === 10) {
        imageElement.src = '/MCQs/Topic7/10.png';
        MCQAnswer = 'C';
    }
    else if (number === 11) {
        imageElement.src = '/MCQs/Topic7/11.png';
        MCQAnswer = 'B';
    }
    else if (number === 12) {
        imageElement.src = '/MCQs/Topic7/12.png';
        MCQAnswer = 'A';
    }
    else if (number === 13) {
        imageElement.src = '/MCQs/Topic7/13.png';
        MCQAnswer = 'D';
    }
    else if (number === 14) {
        imageElement.src = '/MCQs/Topic7/14.png';
        MCQAnswer = 'A';
    }
    else if (number === 15) {
        imageElement.src = '/MCQs/Topic7/15.png';
        MCQAnswer = 'A';
    }
    else if (number === 16) {
        imageElement.src = '/MCQs/Topic7/16.png';
        MCQAnswer = 'D';
    }
    else if (number === 17) {
        imageElement.src = '/MCQs/Topic7/17.png';
        MCQAnswer = 'B';
    } 
    else if (number === 18) {
        imageElement.src = '/MCQs/Topic7/18.png';
        MCQAnswer = 'C';
    }
    else if (number === 19) {
        imageElement.src = '/MCQs/Topic7/19.png';
        MCQAnswer = 'C';
    }
    else if (number === 20) {
        imageElement.src = '/MCQs/Topic7/20.png';
        MCQAnswer = 'A';
    }
    else if (number === 21) {
        imageElement.src = '/MCQs/Topic7/21.png';
        MCQAnswer = 'C';
    }
    else if (number === 22) {
        imageElement.src = '/MCQs/Topic7/22.png';
        MCQAnswer = 'B';
    }
    else if (number === 23) {
        imageElement.src = '/MCQs/Topic7/23.png';
        MCQAnswer = 'D';
    }
    else if (number === 24) {
        imageElement.src = '/MCQs/Topic7/24.png';
        MCQAnswer = 'A';
    } 
    else if (number === 25) {
        imageElement.src = '/MCQs/Topic7/25.png';
        MCQAnswer = 'C';
    }
    else if (number === 26) {
        imageElement.src = '/MCQs/Topic7/26.png';
        MCQAnswer = 'D';
    }
    else if (number === 27) {
        imageElement.src = '/MCQs/Topic7/27.png';
        MCQAnswer = 'C';
    }
    else if (number === 28) {
        imageElement.src = '/MCQs/Topic7/28.png';
        MCQAnswer = 'D';
    }
    else if (number === 29) {
        imageElement.src = '/MCQs/Topic7/29.png';
        MCQAnswer = 'A';
    }
    else if (number === 30) {
        imageElement.src = '/MCQs/Topic7/30.png';
        MCQAnswer = 'C';
    }
    else if (number === 31) {
        imageElement.src = '/MCQs/Topic7/31.png';
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