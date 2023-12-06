var MCQAnswer;

function MCQ(number) {
    var imageElement = document.getElementById('MCQcontainer');
    
    if (number === 1) {
        imageElement.src = '/MCQs/Topic12/1.png';
        MCQAnswer = 'A';
    } 
    else if (number === 2) {
        imageElement.src = '/MCQs/Topic12/2.png';
        MCQAnswer = 'C';
    } 
    else if (number === 3) {
        imageElement.src = '/MCQs/Topic12/3.png';
        MCQAnswer = 'D';
    }
    else if (number === 4) {
        imageElement.src = '/MCQs/Topic12/4.png';
        MCQAnswer = 'B';
    }
    else if (number === 5) {
        imageElement.src = '/MCQs/Topic12/5.png';
        MCQAnswer = 'D';
    }
    else if (number === 6) {
        imageElement.src = '/MCQs/Topic12/6.png';
        MCQAnswer = 'B';
    }
    else if (number === 7) {
        imageElement.src = '/MCQs/Topic12/7.png';
        MCQAnswer = 'B';
    }
    else if (number === 8) {
        imageElement.src = '/MCQs/Topic12/8.png';
        MCQAnswer = 'A';
    }
    else if (number === 9) {
        imageElement.src = '/MCQs/Topic12/9.png';
        MCQAnswer = 'A';
    } 
    else if (number === 10) {
        imageElement.src = '/MCQs/Topic12/10.png';
        MCQAnswer = 'A';
    }
    else if (number === 11) {
        imageElement.src = '/MCQs/Topic12/11.png';
        MCQAnswer = 'A';
    }
    else if (number === 12) {
        imageElement.src = '/MCQs/Topic12/12.png';
        MCQAnswer = 'A';
    }
    else if (number === 13) {
        imageElement.src = '/MCQs/Topic12/13.png';
        MCQAnswer = 'B';
    }
    else if (number === 14) {
        imageElement.src = '/MCQs/Topic12/14.png';
        MCQAnswer = 'C';
    }
    else if (number === 15) {
        imageElement.src = '/MCQs/Topic12/15.png';
        MCQAnswer = 'D';
    }
    else if (number === 16) {
        imageElement.src = '/MCQs/Topic12/16.png';
        MCQAnswer = 'A';
    }
    else if (number === 17) {
        imageElement.src = '/MCQs/Topic12/17.png';
        MCQAnswer = 'C';
    } 
    else if (number === 18) {
        imageElement.src = '/MCQs/Topic12/18.png';
        MCQAnswer = 'A';
    }
    else if (number === 19) {
        imageElement.src = '/MCQs/Topic12/19.png';
        MCQAnswer = 'D';
    }
    else if (number === 20) {
        imageElement.src = '/MCQs/Topic12/20.png';
        MCQAnswer = 'C';
    }
    else if (number === 21) {
        imageElement.src = '/MCQs/Topic12/21.png';
        MCQAnswer = 'B';
    }
    else if (number === 22) {
        imageElement.src = '/MCQs/Topic12/22.png';
        MCQAnswer = 'D';
    }
    else if (number === 23) {
        imageElement.src = '/MCQs/Topic12/23.png';
        MCQAnswer = 'B';
    }
    else if (number === 24) {
        imageElement.src = '/MCQs/Topic12/24.png';
        MCQAnswer = 'B';
    } 
    else if (number === 25) {
        imageElement.src = '/MCQs/Topic12/25.png';
        MCQAnswer = 'A';
    }
    else if (number === 26) {
        imageElement.src = '/MCQs/Topic12/26.png';
        MCQAnswer = 'C';
    }
    else if (number === 27) {
        imageElement.src = '/MCQs/Topic12/27.png';
        MCQAnswer = 'C';
    }
    else if (number === 28) {
        imageElement.src = '/MCQs/Topic12/28.png';
        MCQAnswer = 'A';
    }
    else if (number === 29) {
        imageElement.src = '/MCQs/Topic12/29.png';
        MCQAnswer = 'D';
    }
    else if (number === 30) {
        imageElement.src = '/MCQs/Topic12/30.png';
        MCQAnswer = 'C';
    }
    else if (number === 31) {
        imageElement.src = '/MCQs/Topic12/31.png';
        MCQAnswer = 'D';
    }
    else if (number === 32) {
        imageElement.src = '/MCQs/Topic12/32.png';
        MCQAnswer = 'B';
    }
    else if (number === 33) {
        imageElement.src = '/MCQs/Topic12/33.png';
        MCQAnswer = 'A';
    }
    else if (number === 34) {
        imageElement.src = '/MCQs/Topic12/34.png';
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