import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

});

Meteor.setInterval(function () {
  var current_time = new Date(+new Date() + 8 * 3600 * 1000).toISOString().slice(0, -8);
  // console.log(current_time);
  var count = ProjectsCollection.find({ time: current_time, status: 'doing' }).count();
  if (count != 0) {//找到了符合到期时间的项目
    var project = ProjectsCollection.findOne({ time: current_time, status: 'doing' });
    console.log('找到了符合到期时间的项目,_id为：' + project._id);
    ProjectsCollection.update({ _id: project._id }, { $set: { status: 'closed' } });
    //Web3 终止合约指令

  }
}, 1000);