var MCQAnswer;

function MCQ(number) {
    var imageElement = document.getElementById('MCQcontainer');
    
    if (number === 1) {
        imageElement.src = '/MCQs/Topic4/1.png';
        MCQAnswer = 'B';
    } 
    else if (number === 2) {
        imageElement.src = '/MCQs/Topic4/2.png';
        MCQAnswer = 'B';
    } 
    else if (number === 3) {
        imageElement.src = '/MCQs/Topic4/3.png';
        MCQAnswer = 'D';
    }
    else if (number === 4) {
        imageElement.src = '/MCQs/Topic4/4.png';
        MCQAnswer = 'A';
    }
    else if (number === 5) {
        imageElement.src = '/MCQs/Topic4/5.png';
        MCQAnswer = 'B';
    }
    else if (number === 6) {
        imageElement.src = '/MCQs/Topic4/6.png';
        MCQAnswer = 'A';
    }
    else if (number === 7) {
        imageElement.src = '/MCQs/Topic4/7.png';
        MCQAnswer = 'C';
    }
    else if (number === 8) {
        imageElement.src = '/MCQs/Topic4/8.png';
        MCQAnswer = 'B';
    }
    else if (number === 9) {
        imageElement.src = '/MCQs/Topic4/9.png';
        MCQAnswer = 'D';
    } 
    else if (number === 10) {
        imageElement.src = '/MCQs/Topic4/10.png';
        MCQAnswer = 'D';
    }
    else if (number === 11) {
        imageElement.src = '/MCQs/Topic4/11.png';
        MCQAnswer = 'A';
    }
    else if (number === 12) {
        imageElement.src = '/MCQs/Topic4/12.png';
        MCQAnswer = 'B';
    }
    else if (number === 13) {
        imageElement.src = '/MCQs/Topic4/13.png';
        MCQAnswer = 'A';
    }
    else if (number === 14) {
        imageElement.src = '/MCQs/Topic4/14.png';
        MCQAnswer = 'C';
    }
    else if (number === 15) {
        imageElement.src = '/MCQs/Topic4/15.png';
        MCQAnswer = 'A';
    }
    else if (number === 16) {
        imageElement.src = '/MCQs/Topic4/16.png';
        MCQAnswer = 'D';
    }
    else if (number === 17) {
        imageElement.src = '/MCQs/Topic4/17.png';
        MCQAnswer = 'A';
    } 
    else if (number === 18) {
        imageElement.src = '/MCQs/Topic4/18.png';
        MCQAnswer = 'B';
    }
    else if (number === 19) {
        imageElement.src = '/MCQs/Topic4/19.png';
        MCQAnswer = 'A';
    }
    else if (number === 20) {
        imageElement.src = '/MCQs/Topic4/20.png';
        MCQAnswer = 'C';
    }
    else if (number === 21) {
        imageElement.src = '/MCQs/Topic4/21.png';
        MCQAnswer = 'D';
    }
    else if (number === 22) {
        imageElement.src = '/MCQs/Topic4/22.png';
        MCQAnswer = 'D';
    }
    else if (number === 23) {
        imageElement.src = '/MCQs/Topic4/23.png';
        MCQAnswer = 'C';
    }
    else if (number === 24) {
        imageElement.src = '/MCQs/Topic4/24.png';
        MCQAnswer = 'B';
    } 
    else if (number === 25) {
        imageElement.src = '/MCQs/Topic4/25.png';
        MCQAnswer = 'D';
    }
    else if (number === 26) {
        imageElement.src = '/MCQs/Topic4/26.png';
        MCQAnswer = 'D';
    }
    else if (number === 27) {
        imageElement.src = '/MCQs/Topic4/27.png';
        MCQAnswer = 'D';
    }
    else if (number === 28) {
        imageElement.src = '/MCQs/Topic4/28.png';
        MCQAnswer = 'A';
    }
    else if (number === 29) {
        imageElement.src = '/MCQs/Topic4/29.png';
        MCQAnswer = 'C';
    }
    else if (number === 30) {
        imageElement.src = '/MCQs/Topic4/30.png';
        MCQAnswer = 'D';
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