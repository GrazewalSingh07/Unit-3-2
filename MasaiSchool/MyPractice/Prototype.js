var grandParent={
    height:"5.5 feet",
    color:"Brown",
    HairColor:"Black",
    Eye_Color:"black"
}
var Parents=Object.create(grandParent);
Parents.property=true;
Parents.nationality="Australian";
var me=Object.create(Parents);
me.height="5.1 feet";
me.color="Brown";
console.log(me)
 