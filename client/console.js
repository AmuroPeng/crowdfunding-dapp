import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

Template.project_order.events({
  'click button'(event, template) {
    // var project_id = template.$('#check').val();
    // var project_id = this.id;
    var person = ProjectsCollection.findOne({id:this.id});
    ProjectsCollection.update({_id: person._id}, { $set: { status: 'doing' } });
  },
});

Template.console.helpers({
  projects: function () {
    return ProjectsCollection.find({ status: 'checking' });
  },
});