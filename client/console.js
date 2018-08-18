import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Web3 from 'web3'
import './console.html';
//先检测web实例是否存在
if (typeof web3 !== 'undefined') {
   
  msa = new Web3(web3.currentProvider);
} else {
  console.log('No web3? You should consider trying MetaMask!')

  }

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
    console.log(status_option);
    // var project_id = tthis.id;
    var person = ProjectsCollection.findOne({_id:this._id});
    if(status_option=="doing")
    {
      var _beneficiary =person.author_id; /* var of type address here */ ;
      console.log("bene is"+_beneficiary);       //设置发起人
      var value_T = person.expected_money;       //获取以太币数值
      console.log("value_T is"+ value_T);
      var _fundingGoal =web3.toWei(value_T, 'ether'); /* var of type uint256 here */ ;
      console.log("funding_goal is"+_fundingGoal);

      var _fundingTime =5 /* var of type uint256 here */ ;
      var crowdfundingContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"checkGoalReached","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"a","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withDraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"deadline","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"beneficiary","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fundingGoal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"isBeneficiary","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"returnReached","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"returnnow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"isAfterDeadLine","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"balance","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"fundingReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"returnRank","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_beneficiary","type":"address"},{"name":"_fundingGoal","type":"uint256"},{"name":"_fundingTime","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"recipient","type":"address"},{"indexed":false,"name":"totalReceived","type":"uint256"}],"name":"goalReached","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"isContribution","type":"bool"}],"name":"fundTransfer","type":"event"}]);
      var crowdfunding = crowdfundingContract.new(
        _beneficiary,
        _fundingGoal,
        _fundingTime,
        {
          from: web3.eth.accounts[0], 
          data: '0x608060405260018054600160a060020a03191673dd870fa1b7c4700f2bd7f44238821c26f73921481790556007805461ffff1916905534801561004157600080fd5b506040516060806106f983398101604090815281516020830151919092015160028054600160a060020a031916600160a060020a0390941693909317909255600355603c02420160055561065f8061009a6000396000f3006080604052600436106100c45763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301cb3b2081146101f85780630dbe671f1461020f5780630fdb1c101461023657806329dcb0cf1461023e57806338af3eed146102535780637a3a0e84146102845780637b70209f146102995780638bd1de21146102c2578063946c8f92146102d7578063a1d7776d146102ec578063b69ef8a814610301578063ef2c586f14610309578063f5d309211461031e575b6007546000908190610100900460ff16156100de57600080fd5b6004805434908101909155336000818152600660209081526040918290208054850190558151928352820183905260018282015251919350600080516020610614833981519152919081900360600190a150336000908152600660205260408120549081118015610150575060018111155b1561016f573360009081526006602052604090206001908101556101f4565b600181118015610180575060038111155b156101a15733600090815260066020526040902060026001909101556101f4565b6003811180156101b25750600a8111155b156101d35733600090815260066020526040902060036001909101556101f4565b600a8111156101f45733600090815260066020526040902060046001909101555b5050005b34801561020457600080fd5b5061020d610333565b005b34801561021b57600080fd5b506102246103b3565b60408051918252519081900360200190f35b61020d6103b9565b34801561024a57600080fd5b50610224610460565b34801561025f57600080fd5b50610268610466565b60408051600160a060020a039092168252519081900360200190f35b34801561029057600080fd5b50610224610475565b3480156102a557600080fd5b506102ae61047b565b604080519115158252519081900360200190f35b3480156102ce57600080fd5b506102ae6104a0565b3480156102e357600080fd5b506102246104a9565b3480156102f857600080fd5b506102ae6104ad565b61020d6104c1565b34801561031557600080fd5b506102246105f7565b34801561032a57600080fd5b506102246105fd565b6005544211156103b157600354600454106103a1576007805460ff1916600117905560025460045460408051600160a060020a039093168352602083019190915280517fcb8fac334d1a4f757676db648218711007e844475594db082bc97088951dc26a9281900390910190a15b6007805461ff0019166101001790555b565b60005481565b600060055442111561045d5760075460ff16151561045d5750336000908152600660205260408120805482825560019091018290559081111561045d57604051339082156108fc029083906000818181858888f193505050501561044a57604080513381526020810183905260008183015290516000805160206106148339815191529181900360600190a161045d565b3360009081526006602052604090208190555b50565b60055481565b600254600160a060020a031681565b60035481565b600254600090600160a060020a03163314156104995750600161049d565b5060005b90565b60075460ff1690565b4290565b60004260055410156104995750600161049d565b6005544211156103b15760075460ff1680156104e75750600254600160a060020a031633145b156103b157600254600454604051600160a060020a0390921691606460639092029190910480156108fc02916000818181858888f19350505050156105eb57600154600454604051600160a060020a0390921691606490910480156108fc02916000818181858888f150506002546004546000805160206106148339815191529450600160a060020a0390911692506064915060630260408051600160a060020a0390941684529190046020830152600082820152519081900360600190a160015460045460408051600160a060020a03909316835260649091046020830152600082820152516000805160206106148339815191529181900360600190a16103b1565b6007805460ff19169055565b60045481565b336000908152600660205260409020600101549056006d62b8f7aa4436c79c12546fe267c33e1b3891a1207bf7c25436a9abed7d0f94a165627a7a72305820e329f6deb2acf3380e892b600b1ca5fdb7dfad1dc76c1a0fbb27836c7688e6f90029', 
          gas: '4700000'
        }, function (e, contract){
          console.log(e, contract);
          if (typeof contract.address !== 'undefined') {
              console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
          }
      })
    }

    ProjectsCollection.update({_id: person._id}, { $set: { status: status_option } });

  },
});

Template.console.helpers({
  projects: function () {
    return ProjectsCollection.find();//{ status: 'checking' }
  },
});