// linkedList.js

// Estructura de un nodo
function createNode(value) {
  return {
    value: value,
    next: null
  };
}

// Crear lista enlazada
function createLinkedList() {
  return {
    head: null,
    
    // Agregar nodo al final
    addNode: function(value) {
      const newNode = createNode(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    },
    
    // Eliminar nodo por valor (primera ocurrencia)
    deleteNode: function(value) {
      if (!this.head) {
        console.log("Lista vacía: No se puede eliminar.");
        return;
      }
      
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
      
      let current = this.head;
      while (current.next) {
        if (current.next.value === value) {
          current.next = current.next.next;
          return;
        }
        current = current.next;
      }
      console.log(`Valor no encontrado: ${value}`);
    },
    
    // Imprimir lista
    printList: function() {
      let current = this.head;
      const values = [];
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      console.log(values.join(" -> ") || "Lista vacía");
    }
  };
}

// Pruebas
const list = createLinkedList();
list.addNode(10);
list.addNode(20);
list.addNode(30);

console.log("Lista original:");
list.printList(); // 10 -> 20 -> 30

list.deleteNode(20);
console.log("Después de eliminar 20:");
list.printList(); // 10 -> 30

list.deleteNode(10);
console.log("Después de eliminar 10:");
list.printList(); // 30

list.deleteNode(30);
console.log("Después de eliminar 30:");
list.printList(); // Lista vacía

list.deleteNode(100); // Lista vacía: No se puede eliminar.
