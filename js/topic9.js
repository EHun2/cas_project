var MCQAnswer;

function MCQ(number) {
    var imageElement = document.getElementById('MCQcontainer');
    
    if (number === 1) {
        imageElement.src = '/MCQs/Topic9/1.png';
        MCQAnswer = 'D';
    } 
    else if (number === 2) {
        imageElement.src = '/MCQs/Topic9/2.png';
        MCQAnswer = 'D';
    } 
    else if (number === 3) {
        imageElement.src = '/MCQs/Topic9/3.png';
        MCQAnswer = 'C';
    }
    else if (number === 4) {
        imageElement.src = '/MCQs/Topic9/4.png';
        MCQAnswer = 'C';
    }
    else if (number === 5) {
        imageElement.src = '/MCQs/Topic9/5.png';
        MCQAnswer = 'A';
    }
    else if (number === 6) {
        imageElement.src = '/MCQs/Topic9/6.png';
        MCQAnswer = 'D';
    }
    else if (number === 7) {
        imageElement.src = '/MCQs/Topic9/7.png';
        MCQAnswer = 'B';
    }
    else if (number === 8) {
        imageElement.src = '/MCQs/Topic9/8.png';
        MCQAnswer = 'D';
    }
    else if (number === 9) {
        imageElement.src = '/MCQs/Topic9/9.png';
        MCQAnswer = 'C';
    } 
    else if (number === 10) {
        imageElement.src = '/MCQs/Topic9/10.png';
        MCQAnswer = 'B';
    }
    else if (number === 11) {
        imageElement.src = '/MCQs/Topic9/11.png';
        MCQAnswer = 'D';
    }
    else if (number === 12) {
        imageElement.src = '/MCQs/Topic9/12.png';
        MCQAnswer = 'B';
    }
    else if (number === 13) {
        imageElement.src = '/MCQs/Topic9/13.png';
        MCQAnswer = 'C';
    }
    else if (number === 14) {
        imageElement.src = '/MCQs/Topic9/14.png';
        MCQAnswer = 'C';
    }
    else if (number === 15) {
        imageElement.src = '/MCQs/Topic9/15.png';
        MCQAnswer = 'C';
    }
    else if (number === 16) {
        imageElement.src = '/MCQs/Topic9/16.png';
        MCQAnswer = 'A';
    }
    else if (number === 17) {
        imageElement.src = '/MCQs/Topic9/17.png';
        MCQAnswer = 'A';
    } 
    else if (number === 18) {
        imageElement.src = '/MCQs/Topic9/18.png';
        MCQAnswer = 'B';
    }
    else if (number === 19) {
        imageElement.src = '/MCQs/Topic9/19.png';
        MCQAnswer = 'B';
    }
    else if (number === 20) {
        imageElement.src = '/MCQs/Topic9/20.png';
        MCQAnswer = 'A';
    }
    else if (number === 21) {
        imageElement.src = '/MCQs/Topic9/21.png';
        MCQAnswer = 'C';
    }
    else if (number === 22) {
        imageElement.src = '/MCQs/Topic9/22.png';
        MCQAnswer = 'A';
    }
    else if (number === 23) {
        imageElement.src = '/MCQs/Topic9/23.png';
        MCQAnswer = 'B';
    }
    else if (number === 24) {
        imageElement.src = '/MCQs/Topic9/24.png';
        MCQAnswer = 'C';
    } 
    else if (number === 25) {
        imageElement.src = '/MCQs/Topic9/25.png';
        MCQAnswer = 'A';
    }
    else if (number === 26) {
        imageElement.src = '/MCQs/Topic9/26.png';
        MCQAnswer = 'B';
    }
    else if (number === 27) {
        imageElement.src = '/MCQs/Topic9/27.png';
        MCQAnswer = 'C';
    }
    else if (number === 28) {
        imageElement.src = '/MCQs/Topic9/28.png';
        MCQAnswer = 'C';
    }
    else if (number === 29) {
        imageElement.src = '/MCQs/Topic9/29.png';
        MCQAnswer = 'D';
    }
    else if (number === 30) {
        imageElement.src = '/MCQs/Topic9/30.png';
        MCQAnswer = 'C';
    }
    else if (number === 31) {
        imageElement.src = '/MCQs/Topic9/31.png';
        MCQAnswer = 'B';
    }
    else if (number === 32) {
        imageElement.src = '/MCQs/Topic9/32.png';
        MCQAnswer = 'C';
    }
    else if (number === 33) {
        imageElement.src = '/MCQs/Topic9/33.png';
        MCQAnswer = 'C';
    }
    else if (number === 34) {
        imageElement.src = '/MCQs/Topic9/34.png';
        MCQAnswer = 'D';
    }
    else if (number === 35) {
        imageElement.src = '/MCQs/Topic9/35.png';
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