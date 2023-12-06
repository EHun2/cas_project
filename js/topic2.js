var MCQAnswer;

function MCQ(number) {
    var imageElement = document.getElementById('MCQcontainer');
    
    if (number === 1) {
        imageElement.src = '/MCQs/Topic2/1.png';
        MCQAnswer = 'A';
    } 
    else if (number === 2) {
        imageElement.src = '/MCQs/Topic2/2.png';
        MCQAnswer = 'B';
    } 
    else if (number === 3) {
        imageElement.src = '/MCQs/Topic2/3.png';
        MCQAnswer = 'B';
    }
    else if (number === 4) {
        imageElement.src = '/MCQs/Topic2/4.png';
        MCQAnswer = 'D';
    }
    else if (number === 5) {
        imageElement.src = '/MCQs/Topic2/5.png';
        MCQAnswer = 'A';
    }
    else if (number === 6) {
        imageElement.src = '/MCQs/Topic2/6.png';
        MCQAnswer = 'B';
    }
    else if (number === 7) {
        imageElement.src = '/MCQs/Topic2/7.png';
        MCQAnswer = 'B';
    }
    else if (number === 8) {
        imageElement.src = '/MCQs/Topic2/8.png';
        MCQAnswer = 'C';
    }
    else if (number === 9) {
        imageElement.src = '/MCQs/Topic2/9.png';
        MCQAnswer = 'A';
    } 
    else if (number === 10) {
        imageElement.src = '/MCQs/Topic2/10.png';
        MCQAnswer = 'D';
    }
    else if (number === 11) {
        imageElement.src = '/MCQs/Topic2/11.png';
        MCQAnswer = 'C';
    }
    else if (number === 12) {
        imageElement.src = '/MCQs/Topic2/12.png';
        MCQAnswer = 'C';
    }
    else if (number === 13) {
        imageElement.src = '/MCQs/Topic2/13.png';
        MCQAnswer = 'B';
    }
    else if (number === 14) {
        imageElement.src = '/MCQs/Topic2/14.png';
        MCQAnswer = 'A';
    }
    else if (number === 15) {
        imageElement.src = '/MCQs/Topic2/15.png';
        MCQAnswer = 'B';
    }
    else if (number === 16) {
        imageElement.src = '/MCQs/Topic2/16.png';
        MCQAnswer = 'C';
    }
    else if (number === 17) {
        imageElement.src = '/MCQs/Topic2/17.png';
        MCQAnswer = 'D';
    } 
    else if (number === 18) {
        imageElement.src = '/MCQs/Topic2/18.png';
        MCQAnswer = 'A';
    }
    else if (number === 19) {
        imageElement.src = '/MCQs/Topic2/19.png';
        MCQAnswer = 'A';
    }
    else if (number === 20) {
        imageElement.src = '/MCQs/Topic2/20.png';
        MCQAnswer = 'B';
    }
    else if (number === 21) {
        imageElement.src = '/MCQs/Topic2/21.png';
        MCQAnswer = 'A';
    }
    else if (number === 22) {
        imageElement.src = '/MCQs/Topic2/22.png';
        MCQAnswer = 'D';
    }
    else if (number === 23) {
        imageElement.src = '/MCQs/Topic2/23.png';
        MCQAnswer = 'C';
    }
    else if (number === 24) {
        imageElement.src = '/MCQs/Topic2/24.png';
        MCQAnswer = 'D';
    } 
    else if (number === 25) {
        imageElement.src = '/MCQs/Topic2/25.png';
        MCQAnswer = 'B';
    }
    else if (number === 26) {
        imageElement.src = '/MCQs/Topic2/26.png';
        MCQAnswer = 'B';
    }
    else if (number === 27) {
        imageElement.src = '/MCQs/Topic2/27.png';
        MCQAnswer = 'D';
    }
    else if (number === 28) {
        imageElement.src = '/MCQs/Topic2/28.png';
        MCQAnswer = 'B';
    }
    else if (number === 29) {
        imageElement.src = '/MCQs/Topic2/29.png';
        MCQAnswer = 'B';
    }
    else if (number === 30) {
        imageElement.src = '/MCQs/Topic2/30.png';
        MCQAnswer = 'C';
    }
    else if (number === 31) {
        imageElement.src = '/MCQs/Topic2/31.png';
        MCQAnswer = 'A';
    }
    else if (number === 32) {
        imageElement.src = '/MCQs/Topic2/32.png';
        MCQAnswer = 'C';
    }
    else if (number === 33) {
        imageElement.src = '/MCQs/Topic2/33.png';
        MCQAnswer = 'B';
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