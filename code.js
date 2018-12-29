
// JS version of PHP sleep

function sleep(miliseconds) {
   var currentTime = new Date().getTime();
   while (currentTime + miliseconds >= new Date().getTime()) { }
}


function insertAfter(referenceNode, newNode) { // this inserts DOM element after reference element
     referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
 }

 function insertBefore(newelement, referenceNode) { // this inserts DOM element before reference element
     referenceNode.parentNode.insertBefore(newelement, referenceNode);
 }


 let attr = select.options[select.selectedIndex].getAttribute('attr')

 
 // conditional object properties
 let userData = Object.assign({}, username !== '' ? {
         username
     } : null,
     password !== '' ? {
         password
     }: null,
     accountID !== '' ? {
         accountID
     } : null
 );

///// remove item from array by index
var index = array.indexOf(item);
if (index > -1) {
  array.splice(index, 1);
}

function getUrlParameter(sParam) {
   var sPageURL = window.location.search.substring(1);
   var sURLVariables = sPageURL.split('&');
   for (var i = 0; i < sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] == sParam) {
         return sParameterName[1];
      }
   }
}

