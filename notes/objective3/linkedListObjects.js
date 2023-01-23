class ListNode {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
}

// function ListNode(x) {
//     this.value = x;
//     this.next = null;
// }

// The two syntaxes above are functionally similar, but the 
// class based paradygm has several advantages with regard to 
// heritabilty of methods and stuff. 

n = new ListNode(12);
n.next = new ListNode(3490);
n.next.next = new ListNode(999);

for (let p = n; p !== null; p = p.next){
    console.log('for loop: ', p.value);
}

while (n){
    console.log('while loop: ', n.value)
    n = n.next
}

function linkListMakerSloppy(a,b,c) {
    // Make new ListNodes for a b and c
    let a_node = new ListNode(a);
    let b_node = new ListNode(b);
    let c_node = new ListNode(c);

    // Hook up the next pointers for a's node and b's node
    a_node.next = b_node;
    b_node.next = c_node;

    // return a's node as the head of the list
    return a_node;
}

function linkListMakerClean(a,b,c) {
    const nums = [a,b,c];
    let head = null, tail = null;

    for (value of nums){
        let new_node = new ListNode(value);

        if (head === null) {
            head = tail = new_node;
        } else {
            tail.next = new_node;
            tail = new_node;
        }
    }

    return head
}

console.log(linkListMakerClean(1,2,3))
console.log(linkListMakerSloppy(1,2,3))