var controllerName = 'SharingController';

application.controller(controllerName, function( $scope, $log ) {
    this.data = {
			title : 'temp title',
			index : 0
	}

    /**
	 * Increments an instance index and returns it
	 */
	this.action = function() {
		this.data.index += 1;
		return this.data.index;
	};

	/**
	 * Increments a common/class index and returns it
	 */
	this.incCommonIndex = function( increment ) {
		var root = $scope;
		if ( ! root[controllerName] ) {
			root[controllerName] = {
					index : increment ? increment : 0
			}
		} else if ( increment ) {
			root[controllerName].index += increment;
		}
		return root[controllerName].index;
	};

	this.commonIndex = function() {
		return this.incCommonIndex();
	}

	this.commonAction = function() {
		return this.incCommonIndex(1);
	};
});
