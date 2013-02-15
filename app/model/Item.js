define([
	'dojo/_base/declare',
	'dx-mvc/model/Model',
	'dx-mvc/model/Behavior',
	'dx-mvc/model/Validation'
], function(declare, Model, Behavior, Validation){
	
	return declare([ Model, Behavior, Validation ], {
		_schema: {
			id: Model.NUMBER,
			label: Model.STRING,
			description: Model.STRING,
			location: Model.STRING,
			category: Model.STRING
		},

		_defaults: {
			id: null,
			label: "Untitled",
			description: "",
			location:"",
			category:""
		},

		_validators: {
			label: { required:true }
		}
	});	
});
