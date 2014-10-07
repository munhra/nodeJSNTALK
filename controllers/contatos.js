module.exports = function(app) {
	var ContatosController = {
		index: function(req, res) {		
			var usuario = req.session.usuario  
			var params = {usuario: usuario};
			res.render('views/contatos/index', params);
		},
		create: function(req, res) {			
			var contato = req.body.contato;
			var usuario = req.session.usuario;
			usuario.contatos.push(contato);
			res.redirect('/contatos');
		},
		show: function(req, res) {			
			var id = req.params.id;
			var contato = req.session.usuario.contatos[id];
			var params = {contato: contato, id: id};
			res.render('views/contatos/show', params);			
		},
		edit: function(req, res) {			
			var id = req.params.id
			var usuario = req.session.usuario
			var contato = usuario.contatos[id]
			var params = {usuario: usuario, contato: contato, id: id};
			res.render('views/contatos/edit', params);			
		},
		update: function(req, res) {					
			var contato = req.body.contato;
			var usuario = req.session.usuario;
			usuario.contatos[req.params.id] = contato;
			res.redirect('/contatos');			
		},
		destroy: function(req, res) {						
			var usuario = req.session.usuario;
			var id = req.params.id;
			usuario.contatos.splice(id, 1);
			res.redirect('/contatos');
		}

	};
	return ContatosController;
};