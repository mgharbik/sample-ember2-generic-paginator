import Ember from 'ember';
import PaginationBaseRoute from './pagination-base';

export default Ember.Route.extend(PaginationBaseRoute, {
	limit: 5,
	
	init() {
		this._super('model');
	},
	
	model(params) {
		var model = this._super(params);
		model.get('lastObject').set('lastName', 'Rogger updated');
		return model;
	}
});
