import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './user_edit.html';

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

Template.user_edit.events({
    'click button'(event, template) {
        var name_update = this.name;
        if (template.$('#name').val() != '') {
            name_update = template.$('#name').val();
        }
        var img_update = this.img;
        if (template.$('#img').val() != '') {
            img_update = template.$('#img').val();
        }
        var intro_update = this.intro;
        if (template.$('#intro').val() != '') {
            intro_update = template.$('#intro').val();
        }

        var person = UsersCollection.findOne({ id: this.id });
        UsersCollection.update({ _id: person._id }, { $set: { name: name_update, img: img_update, intro: intro_update } });

        Router.go('/user')
        // var project_id = this.id;
        // var person = ProjectsCollection.findOne({ id: this.id });
        // ProjectsCollection.update({ _id: person._id }, { $set: { status: status_option } });
    },
});

Template.user_edit.helpers({
    user_edit: function () {
        // 测试代码：没有metamask注入登录信息时，自己注入一个key模拟登录状态
        // Session.set('public_key', 'skrskrskrskr');
        // var public_key = Session.get('public_key');使用session需要加add session
        var public_key = 'user_public_key_1';
        return UsersCollection.find({ id: public_key });
        // return UsersCollection.find();
    },
});

