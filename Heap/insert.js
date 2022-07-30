function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  let l = 2 * i + 1; // left = 2*i + 1
  let r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (l < n && arr[l] > arr[largest]) largest = l;

  // If right child is larger than largest so far
  if (r < n && arr[r] > arr[largest]) largest = r;

  // If largest is not root
  if (largest != i) {    
    let swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}
