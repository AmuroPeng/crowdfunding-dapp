import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './user.html';

// Template.user.onCreated(function() {
//   // 测试代码：没有metamask注入登录信息时，自己注入一个key模拟登录状态
//   Session.set('public_key', 'skrskrskrskr');
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

Template.user.helpers({
  user: function(){
    // 测试代码：没有metamask注入登录信息时，自己注入一个key模拟登录状态
    // Session.set('public_key', 'skrskrskrskr');
    // var public_key = Session.get('public_key');使用session需要加add session
    var public_key = 'user_public_key_1';
    return UsersCollection.find({id:'user_public_key_1'});
    // return UsersCollection.find();
  },
});

