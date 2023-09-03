const lodash=require("lodash")
let items=[1,[2,[3,[4,[5]]]]]
console.log(items)
let newitems =lodash.flattenDeep(items)
console.log(newitems)