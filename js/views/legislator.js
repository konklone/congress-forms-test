define([
  'jquery',
  'backbone',
  'mustache',
  'querystring',
  'config',
  'text!templates/legislator.html'
], function($, Backbone, Mustache, qs, config, legislatorTemplate){
  var LegislatorView = Backbone.View.extend({
    render: function () {
      console.log(this.options);
      var vals = _.extend({
        congress_forms_server: config.CONTACT_CONGRESS_SERVER,
        github_yaml_dir: config.GITHUB_YAML_DIR
      }, this.model.attributes);
      $('.legislator-container').html(
        Mustache.render(legislatorTemplate, vals)
      );
      //$(".iframe").fancybox({
      //  width: 800, // or whatever
      //  height: 570,
      //  type: 'iframe',
      //  iframe : {
      //      preload: false
      //  }
      //});
    }
  })
  return LegislatorView;
});
