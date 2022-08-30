// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.



// Heap's Algorithm

function printArr(a,n)
{
    document.write(a.join(" ")+"<br>");
     
}

function heapPermutation(a,size,n)
{
        // if size becomes 1 then prints the obtained
        // permutation
        if (size == 1)
            printArr(a, n);
  
        for (let i = 0; i < size; i++) {
            heapPermutation(a, size - 1, n);
  
            // if size is odd, swap 0th i.e (first) and
            // (size-1)th i.e (last) element
            if (size % 2 == 1) {
                let temp = a[0];
                a[0] = a[size - 1];
                a[size - 1] = temp;
            }
  
            // If size is even, swap ith
            // and (size-1)th i.e last element
            else {
                let temp = a[i];
                a[i] = a[size - 1];
                a[size - 1] = temp;
            }
        }
}
 
// Driver code
let a=[1, 2, 3, 4, 5];
heapPermutation(a, a.length, a.length);