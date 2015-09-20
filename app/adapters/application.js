import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';

const {
  RESTAdapter
} = DS;

const {
  pluralize,
  decamelize,
  underscore
} = Ember.String;

export default RESTAdapter.extend({
  host: config.host,
  namespace: config.namespace,
  authorizer: 'authorizer:application',

  pathForType(type) {
    var decamelized = decamelize(type);
    var underscored = underscore(decamelized);
    return pluralize(underscored);
  }
});