var mergeTwoLists = function(list1, list2) {
    if(!list1?.length) return list2
    if(!list2?.length) return list1
    console.log(list1.concat(list2).sort())
    return list1.concat(list2).sort()
};
mergeTwoLists([1,2,4],[1,3,4])