import Ember from 'ember';
import PaginationBaseRoute from './pagination-base';

export default PaginationBaseRoute.extend({
	limit: 5,
	
	init() {
		this._super('user');
	},
	
	/*model(params) {
		var model = this._super(params);
		model.get('lastObject').set('lastName', 'Rogger updated');
		return model;
	}*/
});
