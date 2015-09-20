import DS from 'ember-data';
import Ember from 'ember';

const {
  decamelize
} = Ember.String;

const {
  RESTSerializer
} = DS;

export default RESTSerializer.extend({
  keyForAttribute: function(attr, method) {
	return decamelize(attr);
  }
});