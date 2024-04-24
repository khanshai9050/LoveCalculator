let topic = [
    'Who is first love marriage?',
    'What is Love Tester? ',
    'How to Make a Strong Relationship?',
    'What happens if my score is 0%?',
    'How Do You Know that You are with the Right Person?',
    'What is True love?',
    'How to know that it’s not true love?',
    'Which is better arrange marriage or love marriage?',
    'How to Make Your Husband Happy?',
    'How do I make my husband happy if he thinks I am controlling?'
];

var ans = [
    'Some also called the Shiva-Parvati marriage the first & ideal marriage of the universe.',

    'Love Tester is a funny entertaining tool that verifies the percentage of our relationship intimacy. It is not a real love meter, this love calculator we use for entertainment purposes. Here random numbers are displayed from 0% to 100%.You will not need any special data to calculate your love in Love Tester. Just fill in your name and your partners name and your love percentage will come out.I have said before that it is not in any real love percentage, you can use it in Fun Purpose.',

    '<b>1)</b> Effective communication plays an important role in strengthening your relationship. If you are unable to communicate effectively with your partner, then there can be a huge gap in your relationship. <br><b>2)</b> Learn to ignore small mistakes. One thing to keep in mind is that a relationship is not for a few hours or days.<br><b>3)</b> Your relationship will be stronger if you can ignore the minor mistakes.<br><b>4)</b> Try something new in the relationship because monotony increases the distance of the relationship. Try to do something special often for your partner.<br><b>5)</b> If you hurt your partner and you realize that you made a mistake, dont just keep it in mind.<br><b>6)</b> Apologize to your partner, and you will see that your love connection will be more closer.<br> Understanding each others feelings is one of the reasons for a strong relationship.<br><b>7)</b> If you respect each others feelings, you will be able to share all your thoughts with your partner.Trust plays a vital role in relationships.<br><b>8)</b> If the faith in each other is intact, then the relationship lasts for a long time. Trust is not just with your partner.<br><b>9)</b> If you trust yourself, you will be able to do anything.',

    'Nothing, there is nothing to be upset about because this love calculator website does not provide you with real data, it is just fun. Real data you get from your partners heart. Do not trust any website in this regard.',

    'Satisfaction is high for both.Conflict is handled in a similar or complementary manner for both. There is no abuse or manipulation — of any kind. You have never been more satisfied in a relationship. You can’t imagine being more happy and satisfied',

    'True love means you have an unbreakable and unwavering affection and adoration for someone. It feels like true love when there is a deep emotional and physical connection between two people. It is also called true love when you feel that you wouldn’t mind putting yourself through discomfort or inconvenience to make things easier for someone. True love wants the other person to be happy – even if it is not with you.',

    'It may not be true love when they are too set in their ways to the extent that they would not budge even if it causes you harm. Another characteristic of true love is honesty and integrity. True love never has any deception or fakeness to it.',

    'Arranged marriages help resolves domestic issues faster. There is a sense of fear of loosing the partner. For some unforeseen reason, the marriage does not work; there are many people who will support more. In most cases, love marriages force the couple to stay away from family.',

    ' Cook him his favorite dinner. Cook him breakfast in bed. Be a good listener. Schedule a weekly date night. Support your husband in trying new things. Bring up problems directly.',

    'Stop controlling him! Men need respect like they need air to breathe. He needs you to be his wife, not his mother.'





];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result =[];
    let input = inputBox.value;
    if(input.length)
    {
        result = topic.filter((keyword) =>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log

        if(!result.length){
            resultsBox.innerHTML = ' ';
        }
    }
    display(result);
}

function display(result){
    const content = result.map((list)=>{
            return "<li onclick=selectInput(this)>"+ list +"</li>";
    });
    resultsBox.innerHTML = "<ul>"+ content.join(' ') +"</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}

function Print()
{   
    for(var x=0;x<topic.length;x++){
    let input = inputBox.value;
         if(input === topic[x])
         {
             resultsBox.innerHTML="<ul><li>"+ans[x]+"</li></ul>";
         }
}
}
/*js for feedback section*/
	const rating = document.querySelector('.rating');
const child = document.querySelectorAll('.child');
const feedback_section = document.querySelector('.feedback-section');
const btn = document.querySelector('#btn');

let icon;
rating.addEventListener('click', (event) => {

   icon = event.target.parentNode;

   for(let i=0; i<child.length; i++){
      console.log(child[i])
      child[i].classList.remove('active1');
   }

   if(!icon.classList.contains('active1')){
       icon.classList.add('active1');
   }
    // console.log(event.target.parentNode);
})

btn.addEventListener('click', () => {
   console.log(icon);

   let user_feedback;
   let user_feedback_icon;

   if(icon === undefined){
      user_feedback = "";
   }else{
      user_feedback = icon.children[1].innerText;
      user_feedback_icon = icon.children[0].innerText;
   }

   if(user_feedback !== ""){
      // console.log(user_feedback_icon)
      feedback_section.innerHTML = `
         <div class="response-screen ">
            <p class="paira">${user_feedback_icon}</p>
            <h3  class="subContent">Your Feedback: ${user_feedback}</h3>
            <p class="paira">💖 Thank You  for your response</p>
      
         <div class="feedback-button">
            <a class="anchor_a" href="askQue.html">Back</a>
           </div>
        </div>
      `
   }



})