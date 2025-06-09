// doublyLinkedList.js

// Estructura de un nodo
function createDoublyNode(value) {
  return {
    value: value,
    next: null,
    prev: null
  };
}

// Crear lista doble
function createDoublyLinkedList() {
  return {
    head: null,
    tail: null,
    
    // Insertar al final
    insertAt: function(value) {
      const newNode = createDoublyNode(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
    },
    
    // Invertir lista completa
    reverseList: function() {
      if (!this.head || this.head === this.tail) return; // 0 o 1 nodo
      
      let current = this.head;
      [this.head, this.tail] = [this.tail, this.head]; // Intercambiar head/tail
      
      while (current) {
        [current.prev, current.next] = [current.next, current.prev]; // Intercambiar punteros
        current = current.prev; // Avanzar (prev ahora es el next original)
      }
    }
  };
}

// Pruebas
const dList = createDoublyLinkedList();
dList.insertAt(1);
dList.insertAt(2);
dList.insertAt(3);

console.log("Original:");
let current = dList.head;
while (current) {
  console.log(`Nodo: ${current.value} | Prev: ${current.prev?.value} | Next: ${current.next?.value}`);
  current = current.next;
}

dList.reverseList();
console.log("\nInvertida:");
current = dList.head;
while (current) {
  console.log(`Nodo: ${current.value} | Prev: ${current.prev?.value} | Next: ${current.next?.value}`);
  current = current.next;
}

// Prueba con un solo nodo
const singleNodeList = createDoublyLinkedList();
singleNodeList.insertAt(99);
singleNodeList.reverseList(); // No debe alterarse
console.log("\nLista con un nodo (invertida):");
console.log(`Nodo: ${singleNodeList.head.value} | Prev: ${singleNodeList.head.prev} | Next: ${singleNodeList.head.next}`);