
// ========== Things I discarded but kept for future references maybe ==========

// function recurseChildFinder(element: Element, childToFind: Element): boolean {
//   /*
//   check if current child matches the element to find.
//   if true, terminate the recursion and return true
//   if false, check if it has children. if true, try to find the target child again.
//   */
//   const elChildren = Array.from(element.children);
//   let isFoundChildren = false;
//   console.log(element, elChildren);
//   for (const child of elChildren) {
//     if (isFoundChildren) {
//       break;
//     }
//     const currentChild = child;
//     if (currentChild === childToFind) {
//       isFoundChildren = true;
//       break;
//     }
//     if (currentChild.childElementCount > 0) {
//       isFoundChildren = recurseChildFinder(currentChild, childToFind);
//     }
//   }

//   return isFoundChildren;
// }

// Reason for discarding: because I thought i needed a way to verify if some clicked element is a descendant for my dark button toggle. turns out I can just attach an event listener to the parent
