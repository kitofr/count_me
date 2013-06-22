angular.module('countme', ['ui.bootstrap']);

function QuestionCtrl($scope){
  var strategy = {
    numbers      : { alternatives: [1,2,3,4,5] },
    roman        : { alternatives: ["I", "II", "III", "IV", "V"] },
    xes          : { alternatives: ["x....", "xx...", "xxx..", "xxx.", "xxxx"] }
  };

  $scope.model = strategy.numbers;

  $scope.clicked = function(alternative){
    $scope.lastAnswer = alternative;
    $scope.message = $scope.isCorrect() ? "You guessed correct!" : alternative + " is not the same as " + $scope.question;
  };

  $scope.isCorrect = function(){
    return $scope.question === $scope.lastAnswer;
  };

  $scope.initModel = function(model){
    $scope.model = strategy[model];
    $scope.newQuestion();
  };

  $scope.newQuestion = function(){
    $scope.message = "";
    $scope.lastAnswer = undefined;
    var index = Math.floor(Math.random() * 11) % $scope.model.alternatives.length;
    $scope.question = $scope.model.alternatives[index];
  };
}
