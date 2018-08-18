import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Web3 from 'web3';
import './project.html';
//先检测web实例是否存在
if (typeof web3 !== 'undefined') {
   
  msa = new Web3(web3.currentProvider);
} else {
  console.log('No web3? You should consider trying MetaMask!')

  }

  var abi = ([{"constant":false,"inputs":[],"name":"checkGoalReached","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"a","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withDraw","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"deadline","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"beneficiary","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fundingGoal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"isBeneficiary","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"returnReached","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"returnnow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"isAfterDeadLine","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"balance","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"fundingReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"returnRank","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_beneficiary","type":"address"},{"name":"_fundingGoal","type":"uint256"},{"name":"_fundingTime","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"recipient","type":"address"},{"indexed":false,"name":"totalReceived","type":"uint256"}],"name":"goalReached","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"isContribution","type":"bool"}],"name":"fundTransfer","type":"event"}])
  var fund_address="0x1edf777eaf66a43075e5b4b41fe7130981e69880";
  
  var user = msa.eth.accounts[0];
Template.project.events({
  'click #support': function () {
    
    console.log=("user:"+user);
    var account = web3.eth.sendTransaction({ from: user, to: fund_address, value: web3.toWei(1, "ether") },
    function(error, account){
      if(!error)
       window.console.log("result is:"+JSON.stringify(msa.eth.getTransaction(account)));
      else
          console.error("error");
    })
  },
  'click #check_value': function () {
  
   var myContract = web3.eth.contract(abi).at(fund_address);
   myContract.fundingReceived.call({ from: user }, function(error, result) {
    if (!error) {
      var transed = web3.fromWei(result, 'ether');
        console.log("已募集： " + transed);
    } else {
        console.log(error);
    }
})
  },

  'click #withdraw': function () {
  
   var myContract = web3.eth.contract(abi).at(fund_address);
   myContract.balance({ from: user }, function(error, result) {
    if (!error) {
        console.log("是否转账成功： " + result);
    } else {
        console.log(error);
    }
});
    },

'click #stop': function () {
   var myContract = web3.eth.contract(abi).at(fund_address);
  myContract.checkGoalReached({ from: user }, function(error, result) {
      if (!error) {
          console.log("checkgoalreached: " + result);
      } else {
          console.log(error);
      }
  });
    },











})