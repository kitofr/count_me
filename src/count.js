angular.module('countme', ['ui.bootstrap']);

function QuestionCtrl($scope){
  var numbers = {
    alternatives: [1,2,3,4,5]
  };

  var roman = {
    alternatives: ["I", "II", "III", "IV", "V"]
  };

  $scope.model = roman;

  $scope.clicked = function(alternative){
    $scope.lastAnswer = alternative;
    $scope.message = $scope.isCorrect() ? "You guessed correct!" : alternative + " is not the same as " + $scope.question;
  };

  $scope.isCorrect = function(){
    return $scope.question === $scope.lastAnswer;
  };

  $scope.newQuestion = function(){
    $scope.message = "";
    $scope.lastAnswer = undefined;
    var index = Math.floor(Math.random() * 11) % $scope.model.alternatives.length;
    $scope.question = $scope.model.alternatives[index];
  };
}
