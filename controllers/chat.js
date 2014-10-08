
module.exports = function(app) {
	var ChatController = {
		index: function(req, res){
			var params = {usuario: req.session.usuario};
			res.render('views/chat/index', params);
		}
	};
	return ChatController;
};