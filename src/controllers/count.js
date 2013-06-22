angular.module('count_me', ['ui.bootstrap']);

function QuestionCtrl($scope){
  $scope.model = {
    question: 1,
    alternatives: [1,2,3]
  };

  $scope.clicked = function(alternative){
    alert(alternative + " clicked!");

    $scope.model.correct = model.question === alternative;
    $scope.model.message = model.correct ? "You guessed correct!" : "Try again!";
  };
}
