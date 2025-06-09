// nodOperations.js

// Utiliza la misma estructura de linkedList.js
function createNode(value) {
  return {
    value: value,
    next: null
  };
}

function createLinkedList() {
  return {
    head: null,
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
    }
  };
}

// Crear lista desde un arreglo
function createListFromArray(arr) {
  const list = createLinkedList();
  arr.forEach(value => list.addNode(value));
  return list;
}

// Recorrer e imprimir nodos
function traverseList(list) {
  let current = list.head;
  console.log("Recorrido:");
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

// Contar nodos recursivamente
function countNodesRecursive(node) {
  return node ? 1 + countNodesRecursive(node.next) : 0;
}

// Pruebas
const arr = [5, 10, 15, 20];
const list = createListFromArray(arr);
traverseList(list);

console.log("\nConteo de nodos:");
console.time("Conteo Recursivo");
const count = countNodesRecursive(list.head);
console.timeEnd("Conteo Recursivo");
console.log(`Total nodos: ${count}`);

// Prueba lista vacía
const emptyList = createLinkedList();
console.log("\nConteo lista vacía:");
console.time("Conteo Vacío");
const emptyCount = countNodesRecursive(emptyList.head);
console.timeEnd("Conteo Vacío");
console.log(`Total nodos: ${emptyCount}`);