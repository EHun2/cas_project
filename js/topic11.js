var MCQAnswer;

function MCQ(number) {
    var imageElement = document.getElementById('MCQcontainer');
    
    if (number === 1) {
        imageElement.src = '/MCQs/Topic11/1.png';
        MCQAnswer = 'A';
    } 
    else if (number === 2) {
        imageElement.src = '/MCQs/Topic11/2.png';
        MCQAnswer = 'C';
    } 
    else if (number === 3) {
        imageElement.src = '/MCQs/Topic11/3.png';
        MCQAnswer = 'B';
    }
    else if (number === 4) {
        imageElement.src = '/MCQs/Topic11/4.png';
        MCQAnswer = 'D';
    }
    else if (number === 5) {
        imageElement.src = '/MCQs/Topic11/5.png';
        MCQAnswer = 'A';
    }
    else if (number === 6) {
        imageElement.src = '/MCQs/Topic11/6.png';
        MCQAnswer = 'C';
    }
    else if (number === 7) {
        imageElement.src = '/MCQs/Topic11/7.png';
        MCQAnswer = 'B';
    }
    else if (number === 8) {
        imageElement.src = '/MCQs/Topic11/8.png';
        MCQAnswer = 'C';
    }
    else if (number === 9) {
        imageElement.src = '/MCQs/Topic11/9.png';
        MCQAnswer = 'A';
    } 
    else if (number === 10) {
        imageElement.src = '/MCQs/Topic11/10.png';
        MCQAnswer = 'B';
    }
    else if (number === 11) {
        imageElement.src = '/MCQs/Topic11/11.png';
        MCQAnswer = 'A';
    }
    else if (number === 12) {
        imageElement.src = '/MCQs/Topic11/12.png';
        MCQAnswer = 'D';
    }
    else if (number === 13) {
        imageElement.src = '/MCQs/Topic11/13.png';
        MCQAnswer = 'C';
    }
    else if (number === 14) {
        imageElement.src = '/MCQs/Topic11/14.png';
        MCQAnswer = 'A';
    }
    else if (number === 15) {
        imageElement.src = '/MCQs/Topic11/15.png';
        MCQAnswer = 'B';
    }
    else if (number === 16) {
        imageElement.src = '/MCQs/Topic11/16.png';
        MCQAnswer = 'B';
    }
    else if (number === 17) {
        imageElement.src = '/MCQs/Topic11/17.png';
        MCQAnswer = 'D';
    } 
    else if (number === 18) {
        imageElement.src = '/MCQs/Topic11/18.png';
        MCQAnswer = 'B';
    }
    else if (number === 19) {
        imageElement.src = '/MCQs/Topic11/19.png';
        MCQAnswer = 'C';
    }
    else if (number === 20) {
        imageElement.src = '/MCQs/Topic11/20.png';
        MCQAnswer = 'A';
    }
    else if (number === 21) {
        imageElement.src = '/MCQs/Topic11/21.png';
        MCQAnswer = 'C';
    }
    else if (number === 22) {
        imageElement.src = '/MCQs/Topic11/22.png';
        MCQAnswer = 'D';
    }
    else if (number === 23) {
        imageElement.src = '/MCQs/Topic11/23.png';
        MCQAnswer = 'C';
    }
    else if (number === 24) {
        imageElement.src = '/MCQs/Topic11/24.png';
        MCQAnswer = 'B';
    } 
    else if (number === 25) {
        imageElement.src = '/MCQs/Topic11/25.png';
        MCQAnswer = 'B';
    }
    else if (number === 26) {
        imageElement.src = '/MCQs/Topic11/26.png';
        MCQAnswer = 'B';
    }
    else if (number === 27) {
        imageElement.src = '/MCQs/Topic11/27.png';
        MCQAnswer = 'C';
    }
    else if (number === 28) {
        imageElement.src = '/MCQs/Topic11/28.png';
        MCQAnswer = 'D';
    }
    else if (number === 29) {
        imageElement.src = '/MCQs/Topic11/29.png';
        MCQAnswer = 'C';
    }
    else if (number === 30) {
        imageElement.src = '/MCQs/Topic11/30.png';
        MCQAnswer = 'A';
    }
    else if (number === 31) {
        imageElement.src = '/MCQs/Topic11/31.png';
        MCQAnswer = 'C';
    }
    else if (number === 32) {
        imageElement.src = '/MCQs/Topic11/32.png';
        MCQAnswer = 'A';
    }
    else if (number === 33) {
        imageElement.src = '/MCQs/Topic11/33.png';
        MCQAnswer = 'A';
    }
    else if (number === 34) {
        imageElement.src = '/MCQs/Topic11/34.png';
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