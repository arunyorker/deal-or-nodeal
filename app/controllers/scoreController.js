app.controller('scoreController',['$scope','$location','gameService',function($scope,$location,gameService) {
	
	$scope.showMyAmount=false;
	$scope.yourAmount=gameService.dealAmount;
	$scope.playerName=gameService.playerName;
	
 	function init()
 	{
 		/*once game is started prevent navigation to pages using url*/
 		if(gameService.playerName == "" || gameService.dealAmount==0)
		{
			$location.path('/');
		}

		/*shows your box amount on pressing deal amount*/
		if(gameService.yourBoxAmount!=0)
		{
			$scope.boxAmount=gameService.yourBoxAmount;
			$scope.showMyAmount=true;
		}
 	}

 	init();	
}])