
// JS version of PHP sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log('Taking a break...');
  await sleep(2000);
  console.log('Two seconds later');
}

demo();

function sleep(miliseconds) {
   var currentTime = new Date().getTime();
   while (currentTime + miliseconds >= new Date().getTime()) { }
}

function setCookie(name, value, days) {
     var expires = "";
     if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
}


function getCookie(name) {
     var nameEQ = name + "=";
     var ca = document.cookie.split(';');
     for (var i = 0; i < ca.length; i++) {
         var c = ca[i];
         while (c.charAt(0) == ' ') c = c.substring(1, c.length);
         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
     }
     return null;
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

const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');

const JSONtoCSV = (arr, columns, delimiter = ',') =>
  [
    columns.join(delimiter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
        ''
      )
    )
  ].join('\n');




//Get all text nodes in a given container
//Source: http://stackoverflow.com/a/4399718/560114
function getTextNodesIn(node, includeWhitespaceNodes) {
    var textNodes = [], nonWhitespaceMatcher = /\S/;

    function getTextNodes(node) {
        if (node.nodeType == 3) {
            if (includeWhitespaceNodes || nonWhitespaceMatcher.test(node.nodeValue)) {
                textNodes.push(node);
            }
        } else {
            for (var i = 0, len = node.childNodes.length; i < len; ++i) {
                getTextNodes(node.childNodes[i]);
            }
        }
    }

    getTextNodes(node);
    return textNodes;
}

var textNodes = getTextNodesIn( $("#container")[0], false );
var i = textNodes.length;
var node;
while (i--) {
    node = textNodes[i];
    node.textContent = node.textContent.replace(/Hi/g, "Hello");
}
