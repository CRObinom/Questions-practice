let counter = 0

const correctAnswers = {

    q1: [3, 4]

}

function checkCorrectAnswers(question) {

    const list = document.getElementsByClassName(question)[0].children

    for (let i = 0; i < list.length; i++) {

        const label = list[i].getElementsByTagName("label")[0]

        const input = list[i].getElementsByTagName("input")[0]

        if (input.checked) {

            if (input.value == correctAnswers.q1[0] || input.value == correctAnswers.q1[1]) {

                label.style.color = "white"

                label.style.background = "green"

                label.style.display = "inline"

            } else {

                label.style.color = "white"

                label.style.background = "red"

                label.style.display = "inline"

                counter++

            }

        }

    }

    if (counter >= 2) {
        if(question === "questionOne") {
            document.getElementById("showAnswersButton1").style.display = "inline"
        }

        if(question === "questionTwo") {
            document.getElementById("showAnswersButton2").style.display = "inline"
        }

        if(question === "questionThree") {
            document.getElementById("showAnswersButton3").style.display = "inline"
        }

        counter = 0


    }

}

function reset(question) {

    document.getElementsByClassName(question)[0].getElementsByClassName("answerOne")[0].children[0].checked = false

    document.getElementsByClassName(question)[0].getElementsByClassName("answerTwo")[0].children[0].checked = false

    document.getElementsByClassName(question)[0].getElementsByClassName("answerThree")[0].children[0].checked = false

    document.getElementsByClassName(question)[0].getElementsByClassName("answerFour")[0].children[0].checked = false

}

function showAnswers(question) {

    const list = document.getElementsByClassName(question)[0].children

    for (let i = 0; i < list.length; i++) {

        const label = list[i].getElementsByTagName("label")[0]

        const input = list[i].getElementsByTagName("input")[0]

        if (input.value == correctAnswers.q1[0] || input.value == correctAnswers.q1[1]) {

            label.style.color = "green"

        }

    }

}