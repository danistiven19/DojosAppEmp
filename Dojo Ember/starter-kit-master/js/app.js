
App = Ember.Application.create();
App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['Abrir el archivo rompecabezas.txt', 'Copiar y pegar el código en el archivo correspondiente (app.js, index.html o style.css)','Clic derecho en index.html y abrir en el navegador'];
  }
});
App.IndexController = Ember.Controller.extend({
  emberLogo:"http://www.lostiemposcambian.com/blog/wp-content/uploads/2013/03/ember-logo.jpg"
});