import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './create_project.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

Template.create_project.events({
  'click button'(event, template) {
    console.log('111');
    event.preventDefault();
    var id = template.$('#id').val();
    var title = template.$('#title').val();
    var intro = template.$('#intro').val();
    var author_id = template.$('#author_id').val();
    var time = template.$('#time').val();
    var locate = template.$('#locate').val();
    var tag = template.$('#tag').val();
    var expected_money = template.$('#expected_money').val();
    // var tag = template.$('#tag').val();


    // var project_id = this.id;
    // var person = ProjectsCollection.findOne({id:this.id});
    ProjectsCollection.insert({ id: id, title: title, intro: intro, author_id: author_id, time: time, locate: locate, tag: tag, expected_money: expected_money, status: 'checking' });
    Router.go('/user')
  },
});

// Template.create_project.helpers({
//   projects: function () {
//     return ProjectsCollection.find();//{ status: 'checking' }
//   },
// });