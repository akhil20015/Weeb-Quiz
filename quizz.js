const correctanswers=['A','B','B','A'];

const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');

form.addEventListener('submit', e =>{
    e.preventDefault();

    let score=0;

    const useranswer=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    useranswer.forEach((answer , index)=>{
        if(answer===correctanswers[index])
        {
            score+=25;
        }
    })

    scrollTo(0,0);
    result.querySelector('span').textContent=`${score}%`;
    result.classList.remove('d-none'); 

    let out=0;
    const timer=setInterval(()=>{
        result.querySelector('span').textContent=`${out}%`;
        if(out===score)
            clearInterval(timer);
        else
            out++
    },10);

});