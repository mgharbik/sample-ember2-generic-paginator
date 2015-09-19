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
			this.set('offset', (page - 1) * this.get('limit'));
			
			// remove this when using rest adapter
			this.store.find(this.get('domain')).then(function(that){
				return function(completeList){
					that.store.metaForType(that.get('domain'), {total:completeList.get('length')});
				};
			}(this));
			
			return this.store.find(this.get('domain'), {
				offset: this.get('offset'),
				limit: this.get('limit')
			})
		}
	},
	
	setupController(controller, model) {
		this._super(controller, model);
		controller.setProperties({
			offset: this.get('offset'),
			limit: this.get('limit')
		});
	}
});
