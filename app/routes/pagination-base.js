import Ember from 'ember';

export default Ember.Route.extend({
	offset: 0,
	limit: 5,
	// page: null,
	queryParams: {
		page: {
			refreshModel: true
		}
	},
	
	init(domain) {
		this._super();
		this.set('domain', domain);
	},
	
	model(params) {
		if (params.page) {
			var page = params.page;
			page = isNaN(page) ? 1 : Math.floor(Math.abs(page));
			this.set('offset', (page - 1) * this.get('limit'))
			return this.store.find(this.get('domain'), {
				offset: this.get('offset'),
				limit: this.get('limit')
			})
		}
	}
});
