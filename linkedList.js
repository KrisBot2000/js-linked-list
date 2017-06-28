/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  //keeps track of which node
  let currentNode = null;

  let head = null;
  let tail = null;

  //where to initialize linked list
  var list = null;



  function getHead(){

    return head;
  }



  function getTail(){
    return tail;



  //   currentNode = head;
  //   while(currentNode.next!==null){
  //     currentNode = currentNode.next;
  //   }
  //   return currentNode.value;
  }

  function add(input){

    //new node template
    let newNode = {
      value: input,
      next: null
    }

    //if there's no list
    if(list===null){
      //create first node
      list = newNode;
      //make this the head
      head = newNode;
      //also make this the tail
      tail = newNode;

    //if there is a list
    }else{
      //go to tail
      currentNode = tail;
      //add new node
      currentNode.next = newNode;
      //make this node tail node
      tail = newNode;
    }
    //return node just made
    return newNode;
  }

  function get(index){
    //start at head
    currentNode = head;
    //initialize counter at 0
    let counter = 0;
    //as long as there is a next and we haven't reached desired index
    while(currentNode.next !== null && counter < index){
      //go to next
      currentNode = currentNode.next;
      //increment counter
      counter++;
    }
    //if did not reach desired index
    if(counter < index){
      return false;
    //if reached desired index
    }else{
      return currentNode;
    }
  }

  function remove(index){
    var cut = null;
    var base = null;
    //if there is no list, index number is not valid, or selected node can not be found
    if(list===null || index < 0 || get(index)===false){
      return false;
    }
    //if attemping to remove first node
    if(index===0){
      //if only one node
      if (list.next===null){
        //delete list
        list = null;
        return;
      //delete first node and make next node the head
      }else{
        list = list.next;
        head = list;
        return;
      }
    }
    //if attempting to remove anything after first node
    if(index > 0){
      //gets node after selected node
      cut = get(index+1);
      //gets node before selected node
      base = get (index-1);
      //if nothing after selected node
      if(cut===false){
        //make list all nodes before selected node
        base.next = null;
        tail = base;
        return;
      //if something after selected node
      }else{
        base.next = cut;
        return;
      }
    }
  }

  function insert(input, index){
    let base = get((index-1));
    let spot = get(index);
    let cut = get(index+1);
    console.log("base:");
    console.log(base);
    console.log("spot:");
    console.log(spot);
    console.log("cut:");
    console.log(cut);

    //new node template
    let newNode = {
      value: input,
      next: null
    }

    //if there is no list
    if(list===null){
      //if want to add to first node
      if(index===0){
        //add input
        add(input);
        return;
      //if attempting to add but not to first node
      }else{
        return false;
      }
    }
    //if inserting at first node and there is a list
    if(index===0){
      console.log("LIST:");
      console.log(list);
      list = newNode;
      console.log(list);
      console.log(newNode);
      console.log(spot);
      newNode.next = spot;
      //console.log(list);


    }



    //if nothing at index where want to insert
    if(spot===false){
      //nothing before where want to insert
      if(base===false){
        return false;
      //something before where want to insert
      }else{
        //add new node to end of list
        base.next = newNode;
        tail = newNode;
        return;
      }
    //if something at index where want to insert
    }else{
     //insert new node at desired index
     base.next = newNode;
     //attach following node to just-created node
     newNode.next = spot;
     return;
    }
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