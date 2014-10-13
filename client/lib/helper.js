/* Client helper functions */


UI.registerHelper('selected', function(foo, bar) {
  return foo == bar ;
});


UI.registerHelper('activeIfTemplateIs', function (template) {
      var currentRoute = Router.current();
      return currentRoute &&
        template === currentRoute.lookupTemplate() ? 'active' : '';
});

UI.registerHelper('equals', function(a,b){
	return a == b
})


//AutoForm.debug()