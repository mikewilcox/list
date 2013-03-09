define([
	
	'dx-alias/shim',
	'dx-ui/util/parser',
	'dx-ui/view/views',
	'dojo/request',
	'./model/Item',
	'dx-mvc/stores/Store',
	'dojo/text!dx-mvc/tests/groceries.json',
	'dx-ui/view/Item',
	'dx-ui/view/List',
	'dx-ui/ui/Button',
	'dx-mvc/form/Form'
	
], function(shim, parser, views, request, ItemModel, Store, groceriesData){
	
	console.log('LIST MAIN');

	parser.parse();
	
	var data = JSON.parse(groceriesData);
	console.log('data', data);
	var store = Store.getObservable({
		model:ItemModel,
		data:data
	});
	
	var newModel;
	var form = views.get('formNode');
	views.get('btnFormNew').on('click', function(){
		newModel = store.createModel();
		form.setModel(newModel);
	});
	views.get('btnFormSave').on('click', function(){
		store.put(newModel);
	});
	
	var list = views.get('list');
	list.setStore(store);
	
	list.on('row-click', function(e){
		console.log('main.click', e);
		
		form.setModel(e.child.model);
	});
	
	views.get('btnCat').on('click', function(){
		console.log('CAT');
		list.group('category');
	});
	views.get('btnLoc').on('click', function(){
		console.log('LOC');
		list.group('location');
	});
	views.get('btnAsc').on('click', function(){
		console.log('LOC');
		list.sort();
	});
	views.get('btnDec').on('click', function(){
		console.log('LOC');
		list.sort('label', true);
	});
	views.get('btnAdd').on('click', function(){
		console.log('ADD');
		list.add({
			label:'Saran Wrap',
			category:'dry goods',
			location:'Albertsons'
		});
	});
	
	
	var MIKE = '50f1cf1e4292b4f83500001f';
	var DON = '50f1cf1e4292b4f83500001e';
	
	views.get('btnSave').on('click', function(){
		console.log('Save');
						
		request.post('http://localhost:3000/user', {
			data:{
				user:'bar',
				pass:'foo'
			}
		}).then(function(arg){
			console.log('posted user:', arg);	
		});
	});
	
	
	views.get('btnGet').on('click', function(){
		console.log('ADD');
		list.add({
			label:'Saran Wrap',
			category:'dry goods',
			location:'Albertsons'
		});
	});
	
	views.get('btnGetAll').on('click', function(){
		request('http://localhost:3000/users').then(function(result){
			console.log('result', result);
		});	
	});
	
});