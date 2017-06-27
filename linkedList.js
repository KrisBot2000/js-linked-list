/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  //keeps track of which node
  let currentNode = null;

  //where to initialize linked list
  var list = {
    value: null,
    next: null
  }

  function getHead(){
    return list.value;
  }

  function getTail(){
    currentNode = getHead();
    while(currentNode.next !== null){
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  function add(value){

  }

  function get(){

  }

  function remove(){

  }

  function insert(){

  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  };
}

// let ll = linkedListGenerator();console.log(ll.getHead);//null
// ll.add("cat");
// console.log(ll.getHead());//"cat"
// console.log(ll.getTail());//"cat"
// ll.add("dog");
// console.log(ll.getTail());//"dog"
// ll.insert("bird",1);
// console.log(ll.get(1));//"bird"
// ll.remove(2);
// console.log(ll.getTail());//"bird"