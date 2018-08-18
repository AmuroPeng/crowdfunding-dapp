import { Meteor } from 'meteor/meteor';
//import Web3 from 'web3';
// Web3 = require('web3');
Meteor.startup(() => {
  web3=new Web3();
  // code to run on server at startup
  // var Web3 =require("web3");
  // if (typeof web3 !== 'undefined') {  
  //   msa = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/"));
  // } else {
  //   console.log('No web3? You should consider trying MetaMask!')
  //   }
    
});


Meteor.setInterval(function () {
 
  var current_time = new Date(+new Date() + 8 * 3600 * 1000).toISOString().slice(0, -8);
  // console.log(current_time);
  var count = ProjectsCollection.find({ time: current_time, status: 'doing' }).count();
  if (count != 0) {//找到了符合到期时间的项目
    var abi = ([{"constant":false,"inputs":[],"name":"checkGoalReached","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"a","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withDraw","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"deadline","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"beneficiary","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fundingGoal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"isBeneficiary","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"returnReached","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"returnnow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"isAfterDeadLine","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"balance","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"fundingReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"returnRank","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_beneficiary","type":"address"},{"name":"_fundingGoal","type":"uint256"},{"name":"_fundingTime","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"recipient","type":"address"},{"indexed":false,"name":"totalReceived","type":"uint256"}],"name":"goalReached","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"isContribution","type":"bool"}],"name":"fundTransfer","type":"event"}])
    var fund_address = "0x1edf777eaf66a43075e5b4b41fe7130981e69880";
    var user = msa.eth.accounts[0];
    myContract.checkGoalReached({ from: account_2 }, function(error, result) {
      if (!error) {
          console.log("checkgoalreached: " + result);
      } else {
          console.log(error);
      }
  });

    var project = ProjectsCollection.findOne({ time: current_time, status: 'doing' });
    console.log('找到了符合到期时间的项目,_id为：' + project._id);
    ProjectsCollection.update({ _id: project._id }, { $set: { status: 'closed' } });
    //Web3 终止合约指令
    
  }
}, 1000);