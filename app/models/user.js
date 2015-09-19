import DS from 'ember-data';

export default DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	
	FIXTURES: [
		{ id: 1, firstName: 'Trek', lastName: 'Glowacki' },
		{ id: 2, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 3, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 4, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 5, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 6, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 7, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 8, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 9, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 10, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 11, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 12, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 13, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 14, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 15, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 16, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 17, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 18, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 19, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 20, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 21, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 22, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 23, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 24, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 25, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 26, firstName: 'Tom' , lastName: 'Dale' },
		{ id: 27, firstName: 'David' , lastName: 'Rogger' }
	]
});
