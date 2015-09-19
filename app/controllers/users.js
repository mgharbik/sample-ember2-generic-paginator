import Ember from 'ember';
import Paginated from '../mixins/paginated';

export default Ember.Controller.extend(Paginated, {
	
	total: Ember.computed('model', function() {
		// return this.get('model.meta').total;
		return this.get('model.length');
	})
});
