import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-cli-pagination-sample/tests/helpers/start-app';

module('Acceptance | users', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test("I can view the users list", function(assert) {
  var users = server.createList('user', 6);

  visit('/users');

  andThen(function() {
	assert.equal(currentURL(), '/users');
    assert.equal(find('li').length, 6);
    assert.equal(find('li:first').text(), users[0].id + ". " + users[0].first_name + ' ' + users[0].last_name);
  });
});