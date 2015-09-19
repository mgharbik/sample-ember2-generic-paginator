import DS from 'ember-data';

export default DS.FixtureAdapter.extend({
	queryFixtures: function(fixtures, query) {
		var properties = Object.keys(query);
		
		// adding pagination support
		if(properties.contains('offset')){
			fixtures = fixtures.slice(query.offset, query.offset + query.limit);
		}
		
		return fixtures;
	}
});
