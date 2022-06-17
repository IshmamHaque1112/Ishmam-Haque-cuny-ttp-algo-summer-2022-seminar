// Problem Statement #

// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  }
  
  const find_cycle_start = function(head){
    // if list is empty or if list has only one node which has no cycle.
    if (head == null || head.next == null)  
        return null;
    let slow = head,
        fast = head;
    while (fast !== null && fast.next !== null){
        //move slow 1 step and fast by 2 steps.
        slow = slow.next;
        fast = fast.next.next;
        if( slow === fast){ 
        //cycle found if slow and fast meet at the same node
            //move slow pointer to the head node of linkedlist
            slow = head;
            while (slow != fast ){
                //move slow and fast both by 1 step. 
                //When slow and fast meet again, that node is the starting node of a cycle
                slow = slow.next;
                fast = fast.next;
            }
            return slow; 
        }
    }
    //if list has no cycle
    return null;
  };
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  head.next.next.next.next.next = new Node(6)
  

  head.next.next.next.next.next.next = head.next.next
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
  
  head.next.next.next.next.next.next = head.next.next.next
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
  
  head.next.next.next.next.next.next = head
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

