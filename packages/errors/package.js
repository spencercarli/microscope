Package.describe({
	summary: "A pattern to display application errors to the user -- Spencer's version"
});

Package.on_use(function (api, where) {
	api.use(['minimongo', 'mongo-livedata', 'templating'], 'client'); 
	api.use(['tinytest', 'test-helpers'], 'client');

	api.add_files(['errors.js', 'errors_list.html', 'errors_list.js'], 'client'); 
});