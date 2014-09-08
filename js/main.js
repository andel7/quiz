var score=0;
var current_question=1;
function Question(question,answers,correct_answer) {
    this.question = question;
    this.answers = answers;
    this.correct_answer=correct_answer;
}

var questions_array = new Array();
questions_array[1]= new Question("What Sheldon says after a joke","bazinga,hahaha,gotcha,you are a fool",1);
questions_array[2]= new Question("How many times Sheldon has to knock","4,5,1,3",4);
questions_array[3]= new Question("You should sing a soft kitty song when Sheldon is","sad,happy,sick,lonely",3);
questions_array[4]= new Question("Who is Amy","girlfriend,girl,friend,a girl who is a friend",4);


function display_current_cuestion(){
	if (current_question===5) {
		$("#score").html(score);
		$("#question_div").hide();
		alert("Game Over");
		return;
	}
	$("#question_paragraph").html(questions_array[current_question].question);
	answers_for_current_question = questions_array[current_question].answers.split(",") 
	//console.log(questions_array[current_question].question);
	console.log(answers_for_current_question);
	$("#answer_1").html(answers_for_current_question[0]);
	$("#answer_2").html(answers_for_current_question[1]);
	$("#answer_3").html(answers_for_current_question[2]);
	$("#answer_4").html(answers_for_current_question[3]);
	$("#score").html(score);
}

function process_response(answer){
	answers_for_current_question = questions_array[current_question].answers.split(",");
	right_answer=answers_for_current_question[questions_array[current_question].correct_answer - 1];
	if (answer==right_answer){
		score++;
	} else {
		alert("Wrong!");
	}
	current_question++;
	console.log(current_question);
	display_current_cuestion();	
}

function init_game(){
	console.log("Starting new Game");
	score=0;
	current_question=1;
	display_current_cuestion();
	$("#question_div").show();
}


$(document).ready(function(){
	$("#reset").click(init_game);
	$('.buttons').click(function(){
		process_response($(this).text());
	});
	
})