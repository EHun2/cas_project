var MCQAnswer;

function MCQ(number) {
    var imageElement = document.getElementById('MCQcontainer');

    if (number === 1) {
        imageElement.src = '/MCQs/Topic1/1.png';
        MCQAnswer = 'C';
    } 
    else if (number === 2) {
        imageElement.src = '/MCQs/Topic1/2.png';
        MCQAnswer = 'D';
    } 
    else if (number === 3) {
        imageElement.src = '/MCQs/Topic1/3.png';
        MCQAnswer = 'D';
    }
    else if (number === 4) {
        imageElement.src = '/MCQs/Topic1/4.png';
        MCQAnswer = 'B';
    }
    else if (number === 5) {
        imageElement.src = '/MCQs/Topic1/5.png';
        MCQAnswer = 'D';
    }
    else if (number === 6) {
        imageElement.src = '/MCQs/Topic1/6.png';
        MCQAnswer = 'C';
    }
    else if (number === 7) {
        imageElement.src = '/MCQs/Topic1/7.png';
        MCQAnswer = 'C';
    }
    else if (number === 8) {
        imageElement.src = '/MCQs/Topic1/8.png';
        MCQAnswer = 'D';
    }
    else if (number === 9) {
        imageElement.src = '/MCQs/Topic1/9.png';
        MCQAnswer = 'D';
    } 
    else if (number === 10) {
        imageElement.src = '/MCQs/Topic1/10.png';
        MCQAnswer = 'B';
    }
    else if (number === 11) {
        imageElement.src = '/MCQs/Topic1/11.png';
        MCQAnswer = 'B';
    }
    else if (number === 12) {
        imageElement.src = '/MCQs/Topic1/12.png';
        MCQAnswer = 'C';
    }
    else if (number === 13) {
        imageElement.src = '/MCQs/Topic1/13.png';
        MCQAnswer = 'B';
    }
    else if (number === 14) {
        imageElement.src = '/MCQs/Topic1/14.png';
        MCQAnswer = 'C';
    }
    else if (number === 15) {
        imageElement.src = '/MCQs/Topic1/15.png';
        MCQAnswer = 'C';
    }
    else if (number === 16) {
        imageElement.src = '/MCQs/Topic1/16.png';
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