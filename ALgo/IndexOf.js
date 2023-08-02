function indexOf(items,searchItem){
    var number=-1;var i=0;
    var find=false;
    while(i<items.length && find==false)
    {
        if (items[i]===searchItem)
        { number=i;
          find=true;}
       else 
         {i++;}
    }
    return number;
}
const arr1 = ["a", "b", "c"];
const searchItem1 = "c";
const expected1 = 2;
const result1 = indexOf(arr1, searchItem1);
console.log(result1, "should be", expected1);

const arr2 = ["a", "b", "c"];
const searchItem2 = 5;
const expected2 = -1;
const result2 = indexOf(arr2, searchItem2);
console.log(result2, "should be", expected2);

const arr3 = ["c", "a", "b", "c"];
const searchItem3 = "c";
const expected3 = 0;
const result3 = indexOf(arr3, searchItem3);
console.log(result3, "should be", expected3);

const arr4 = [];
const searchItem4 = 5;
const expected4 = -1;
const result4 = indexOf(arr4, searchItem4);
console.log(result4, "should be", expected4);