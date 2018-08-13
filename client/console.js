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
  'check'(event, instance) {
    ProjectsCollection.update();
  },
});

Template.console.helpers({
  projects: function(){
    return ProjectsCollection.find({status:'checking'});
  },
});