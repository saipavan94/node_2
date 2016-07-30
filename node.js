var fs=require('fs');
var array=[];
var array2=[];
var obj={};
var object={};
var obj2={};
var object2={};
var m=0,y=0;
function check(age){
  if(array.indexOf(age)==-1)
  {
    array.push(age);
   obj[age]={
      value:0
    };
  }
}
function create2(edu){
  if(array2.indexOf(edu)==-1)
  {
    array2.push(edu);
   obj2[edu]={
      value:0
    };
  }
}
function read(filename){
  fs.readFile(filename,"utf8",function (err,data) {
  var i=0;
  if(err) throw err;
  var lines= data.split("\n");
  var age;
  var literate;
  var total;
  if(i==0)
  {
    var line=lines[0].split(",");
    for(var i=0;i<line.length;i++)
    {
      if(line[i]=="Age-group")
      {
        age=i;
      }
      if(line[i]=="Literate - Persons"){
        literate=i;
      }
      if(line[i]=="Total/ Rural/ Urban")
      {
        total=i;
      }
    }
    i++;
  }
  for(var i=1;i<lines.length;i++)
  {
    var line=lines[i].split(",");

    if(line[total]=="Total" && line[age]!="All ages")
    {
      check(line[age]);
      obj[line[age]].value=obj[line[age]].value+parseInt(line[literate]);
      object[line[age]]={
        age:line[age],
        Total:obj[line[age]].value
      };
    }
  }
  m++;
  if(m==3){
    console.log(object);
  var file=JSON.stringify(object);
  fs.writeFile("part_1_json.json",file,"utf8",function(error){
    if(error)
    throw error;
    });
  }
    });


    fs.readFile(filename,"utf8",function (err,data) {
    var k=0;
    var e1,e2,e3,e4,e5,e6;
    var mainline;
    var arr=[];
    var total;
    var lines= data.split("\n");
    if(k==0)
    {
       var line=lines[0].split(",");
      for(var i=0;i<line.length;i++)
      {
        if(line[i]=="Age-group")
        {
          age=i;
        }
        if(line[i]=="Total/ Rural/ Urban")
        {
          total=i;
        }
        if(line[i]=="Educational level - Literate without educational level - Persons"){
          a1=i;
          arr.push(a1);
        }
        if(line[i]=="Educational level - Below Primary - Persons")
        {
          a2=i;
          arr.push(a2);
        }
        if(line[i]=="Educational level - Primary - Persons")
        {
          a3=i;
          arr.push(a3);
        }
        if(line[i]=="Educational level - Middle - Persons")
        {
          a4=i;
          arr.push(a4);
        }
        if(line[i]=="Educational level - Matric/Secondary - Persons")
        {
          a5=i;
          arr.push(a5);
        }
        if(line[i]=="Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Persons")
        {
          a6=i;
          arr.push(a6);
        }
        if(line[i]=="Educational level - Non-technical diploma or certificate not")
        {
          a7=i;
          arr.push(a7);
        }
        if(line[i]=="Educational level - Technical diploma or certificate not equal to degree - Persons")
        {
          a8=i;
          arr.push(a8);
        }
        if(line[i]=="Educational level - Non-technical diploma or certificate not")
        {
          a9=i;
          arr.push(a9);
        }
        if(line[i]=="Educational level - Graduate & above - Persons")
        {
          a10=i;
          arr.push(a10);
        }
        if(line[i]=="Educational level - Unclassified - Persons")
        {
          a11=i;
          arr.push(a11);
        }
      }
      k++;
    }
    for(var i=1;i<lines.length;i++)
    {
      var line2=lines[i].split(",");
      if(line2[total]=="Total" && line2[age]=="All ages")
      {
        for(var j=0;j<arr.length;j++)
        {
          create2(line[arr[j]]);
          obj2[line[arr[j]]].value=obj2[line[arr[j]]].value +parseInt(line2[arr[j]]);
          object2[line[arr[j]]]=
          {
            level:line[arr[j]],
            Total:obj2[line[arr[j]]].value
          };
        }
      }
    }
    y++;
    if(y==3){
      console.log(object2);
    var file=JSON.stringify(object2);
    fs.writeFile("part_2_json.json",file,"utf8",function(error){
      if(error)
      throw error;
      });
    }

});
}
read("India2011.csv");
read("IndiaSC2011.csv");
read("IndiaST2011.csv");
//console.log(object);
