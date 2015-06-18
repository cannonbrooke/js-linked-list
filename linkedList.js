/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator (){
  var head = null;
  var tail = null;
  var list ={}
  var linkedListGenerator ={
    getHead: _getHead,
    getTail: _getTail,
    add: _add,
    get: _get,
    remove: _remove,
    insert: _insert,
  };

  return linkedListGenerator;
  function _getHead(){
    return head;
  }
  function _getTail(){
    return tail;
  }
  function _add(value){

    var node ={
      value: value,
      next: null
    };
    if (head === null){
      head = node;
    } else{
      tail.next = node;
    }
    tail = node;
    return node;
  }


  function _get(num){
    if (num === 0) {
      return head;
    }
    var thisnode = head.next;

    for (var i = 1; i <= num; i++){
      //this is the end
      if (thisnode === null){
        return false;
      } // this finds the node being asked for
      if (i === num){
        return thisnode;
      }
      thisnode = thisnode.next;
    }
  };

  function _remove(num){

    if (num < 0){
      return false;
    }else if (_get(num) === false){
      return false;

    }else if (num === 0){
      head = _get(num + 1);
      return
    }else if (_get(num).next === null) { //finds tail node (value of null)
      tail = _get(num - 1);
    }

    var pre = _get(num - 1);
    var post = _get(num + 1);


    pre.next = post;
  }



  function _insert(value, num){
    var prenodepost = _get(num - 1);
    var exnode = _get(num);
    var newnode =  {
      value: value,
      next: null
    }
    if (num < 0){
      return false;
    }
    if ( exnode === false){
      return false;
    }
    if (num === 0){
      newnode.next = head;
      head = newnode;
      return
    }
    newnode.next = exnode;
    prenodepost.next = newnode;
  }

}







