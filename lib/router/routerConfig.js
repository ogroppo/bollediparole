Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'routeNotFoundPage',
});

Router.plugin('dataNotFound', {notFoundTemplate: 'dataNotFound'});
