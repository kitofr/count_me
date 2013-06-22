angular.module('countme', ['ui.bootstrap']);

function QuestionCtrl($scope){
  $scope.model = {
    question: 1,
    alternatives: [1,2,3,4,5]
  };

  $scope.clicked = function(alternative){
    $scope.lastAnswer = alternative;
    $scope.model.message = $scope.isCorrect() ? "You guessed correct!" : alternative + " is not " + $scope.model.question;
  };

  $scope.isCorrect = function(){
    return $scope.model.question === $scope.lastAnswer;
  };

  $scope.newQuestion = function(){
    $scope.model.message = "";
    $scope.lastAnswer = undefined;
    var index = Math.floor(Math.random() * 11) % $scope.model.alternatives.length;
    $scope.model.question = $scope.model.alternatives[index];
  };
}
