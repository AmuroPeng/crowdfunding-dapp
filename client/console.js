import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './console.html';

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
    var status_option = template.$('#verify_option').val();
    // var project_id = this.id;
    var person = ProjectsCollection.findOne({id:this.id});
    ProjectsCollection.update({_id: person._id}, { $set: { status: status_option } });
  },
});

Template.console.helpers({
  projects: function () {
    return ProjectsCollection.find();//{ status: 'checking' }
  },
});