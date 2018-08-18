import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Web3 from 'web3'
import './nav.html';
 if (typeof web3 !== 'undefined') {
   
    msa = new Web3(web3.currentProvider);
  } else {
    console.log('No web3? You should consider trying MetaMask!')

    }
    Template.nav.events({
      'click #login': function(){
        console.log("click event");
       var connected = msa.eth.accounts;
           if(connected > 1){
            console.log("node connected");
            console.log(connected);
          
                    }else{
                    alert("未检测到metamask，请您更换至google chrome浏览器并安装MetaMask");
                    console.log("node not connected!");
                    event.preventDefault();
                      
}
     },
  });













// Template.nav.helpers({
  
//   account: function(){
//     var account = msa.eth.sendTransaction({ from: "0x22e5080742E4694c2098Ac97EFA4DEA2F207e62b", to: "0x490DD683755D059999964d4aD111F79459fC85A3", value: web3.toWei(1, "ether") },
//     function(error, account){
//       if(!error)
//           console.log("result is:"+JSON.stringify(msa.eth.getTransaction(account)));
//       else
//           console.error("error");
//   });
//     // console.log("account"+account);
                     
//           return account;
//         // return JSON.stringify(result);
// }
                 
// });

// var t = web3.eth.sendTransaction({ from: account_2, to: Contract, value: web3.toWei(1, "ether") }
// console.log(web3.eth.getTransaction(t));