const mergeTwoLists = (l1, l2) => {
  let mergedLists = [];
  mergedLists = [...mergedLists, ...l1, ...l2].sort();

  return mergedLists;
};

console.log(mergeTwoLists([], [0]));
