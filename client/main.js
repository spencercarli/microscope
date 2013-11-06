Meteor.subscribe('posts');

Deps.autorun(function(){
	Meteor.subscribe('comments', Sessions.get('currentPostId'));
});