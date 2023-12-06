var MCQAnswer;

function MCQ(number) {
    var imageElement = document.getElementById('MCQcontainer');
    
    if (number === 1) {
        imageElement.src = '/MCQs/Topic6/1.png';
        MCQAnswer = 'B';
    } 
    else if (number === 2) {
        imageElement.src = '/MCQs/Topic6/2.png';
        MCQAnswer = 'D';
    } 
    else if (number === 3) {
        imageElement.src = '/MCQs/Topic6/3.png';
        MCQAnswer = 'A';
    }
    else if (number === 4) {
        imageElement.src = '/MCQs/Topic6/4.png';
        MCQAnswer = 'A';
    }
    else if (number === 5) {
        imageElement.src = '/MCQs/Topic6/5.png';
        MCQAnswer = 'C';
    }
    else if (number === 6) {
        imageElement.src = '/MCQs/Topic6/6.png';
        MCQAnswer = 'B';
    }
    else if (number === 7) {
        imageElement.src = '/MCQs/Topic6/7.png';
        MCQAnswer = 'A';
    }
    else if (number === 8) {
        imageElement.src = '/MCQs/Topic6/8.png';
        MCQAnswer = 'A';
    }
    else if (number === 9) {
        imageElement.src = '/MCQs/Topic6/9.png';
        MCQAnswer = 'C';
    } 
    else if (number === 10) {
        imageElement.src = '/MCQs/Topic6/10.png';
        MCQAnswer = 'B';
    }
    else if (number === 11) {
        imageElement.src = '/MCQs/Topic6/11.png';
        MCQAnswer = 'B';
    }
    else if (number === 12) {
        imageElement.src = '/MCQs/Topic6/12.png';
        MCQAnswer = 'A';
    }
    else if (number === 13) {
        imageElement.src = '/MCQs/Topic6/13.png';
        MCQAnswer = 'C';
    }
    else if (number === 14) {
        imageElement.src = '/MCQs/Topic6/14.png';
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