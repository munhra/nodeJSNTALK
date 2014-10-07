
module.exports = function(app) {
	var HomeController = {
		index: function(req, res) {
			
			console.log('render the view');
			res.render('views/home/index');
		
		}
	};
	return HomeController;
};