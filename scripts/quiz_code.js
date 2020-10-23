window.onload = function() {
    let result = {}
    let result1 = {}
    let step = 0
    let step1 = 0


    function showQuestion(questionNumber) {
        let counter = document.querySelector('.stepCounter')
        counter.innerHTML = step + 1 + `/${quiz.length}`
        document.querySelector(".question").innerHTML = quiz[step]['question']
        let answer = ''
        for (let key in quiz[step]['answers']) {
            answer += `<li>
                        <input data-v="${key}" class="answerVariant" type="radio" name="radioBtn" id="radioButton1" value="1">
                        <label data-v="${key}" class="answerVariant" style="font-weight: lighter;">${quiz[step]['answers'][key]}</label>
                        </li>
                       `
        }
        document.querySelector(".answer").innerHTML = answer

    }
    function showQuestion_1(questionNumber) {
        let counter1 = document.querySelector('.stepCounter1')
        counter1.innerHTML = step1 + 1 + `/${quiz1.length}`
        document.querySelector(".question_1").innerHTML = quiz1[step1]['question']
        let answer1 = ''
        for (let key_1 in quiz1[step1]['answers']) {
            answer1 += `<li>
                        <input data-v="${key_1}" class="answerVariant_1" type="radio" name="radioBtn" id="radioButton1" value="1">
                        <label data-v="${key_1}" style="font-weight: lighter;" class="answerVariant_1">${quiz1[step1]['answers'][key_1]}</label>
                        </li>
                       `
        }
        document.querySelector(".answer_1").innerHTML = answer1

    }

    document.onclick = function(event) {
        event.stopPropagation()
        if (event.target.classList.contains('answerVariant') && step < quiz.length) {
            //console.log(event.target)
            if(result[event.target.dataset.v] != undefined) {
                result[event.target.dataset.v]++
            }
            else {
                result[event.target.dataset.v] = 0
            }
            step++
            let counter = document.querySelector('.stepCounter')
            counter.innerHTML = step + 1 + `/${quiz.length}`
            let curSize = $("#toddlerBtn").width();
            let fullSize = $("#toddler").width();
            if(curSize < fullSize) {
                let increment = fullSize / 10;
                $("#toddlerBtn").css('width', '+=' + increment);
            }


            if (step == quiz.length) {
                let nextSlideButton = document.createElement('button')
                nextSlideButton.classList.add('nextSlideButton')

                counter.innerHTML = step  + `/${quiz.length}`
                const text = document.createTextNode( 'Далее' )
                nextSlideButton.appendChild(text)
                nextSlideButton.setAttribute('data-target','#carousel-example-generic')
                nextSlideButton.setAttribute('data-slide-to', '3')
                document.querySelector('.nextSlide').appendChild(nextSlideButton)
            }
            else {
                showQuestion(step)

            }

        }

        if (event.target.classList.contains('answerVariant_1') && step1 < quiz1.length) {
            console.log(event.target)
            if(result1[event.target.dataset.v] != undefined) {
                result1[event.target.dataset.v]++
            }
            else {
                result1[event.target.dataset.v] = 0
            }
            step1++
            let counter1 = document.querySelector('.stepCounter')
            counter1.innerHTML = step1 + 1 + `/${quiz1.length}`
            let curSize_1 = $("#toddlerBtn_1").width();
            let fullSize_1 = $("#toddler_1").width();
            if(curSize_1 < fullSize_1) {
                let increment_1 = fullSize_1 / 6;
                $("#toddlerBtn_1").css('width', '+=' + increment_1);
            }




            if (step1 == quiz1.length) {
                let nextSlideButton1 = document.createElement('button')
                nextSlideButton1.classList.add('nextSlideButton')

                counter1.innerHTML = step1  + `/${quiz1.length}`
                const text1 = document.createTextNode( 'Результат' )
                nextSlideButton1.appendChild(text1)
                nextSlideButton1.setAttribute('data-target','#carousel-example-generic')
                nextSlideButton1.setAttribute('data-slide-to', '5')
                document.querySelector('.nextSlide1').appendChild(nextSlideButton1)

                showResult()

            }
            else {
                showQuestion_1(step1)
            }

        }

        console.log(result)
        console.log(result1)



    }


    function showResult() {


        let key = Object.keys(result).reduce(function(a,b) {
            return result[a] > result[b] ? a : b

        })
        let key_1 = Object.keys(result1).reduce(function(c, d) {
            return result1[c] > result1[d] ? c : d
        })
        console.log(key)
        console.log(key_1)



        let div_title = document.createElement('div')
        div_title.classList.add('result')
        div_title.innerHTML = answers[key]['mainTitle']

        document.querySelector('.resultTitle').appendChild(div_title)

        let div_desc_1 = document.createElement('div')
        div_desc_1.classList.add('result')
        div_desc_1.innerHTML = answers[key]['description']
        document.querySelector('.resultDesc_1').appendChild(div_desc_1)

        let div_desc_2 = document.createElement('div')
        div_desc_2.classList.add('result1')
        div_desc_2.innerHTML = answers1[key_1]['mainTitle']
        document.querySelector('.resultDesc_2').appendChild(div_desc_2)

        let svg = document.createElement('div')
        svg.classList.add('resultSvg')
        svg.innerHTML = answers[key]['image']

        document.querySelector('.resultImage').appendChild(svg);




    }
    showQuestion(step)
    showQuestion_1(step1)


}


