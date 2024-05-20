console.log("------------------------------");
console.log("Anonymous Function");
console.log("------------------------------");
//Print odd numbers in an array
var res=[];
var odd=function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            res.push(arr[i]);
    }}
return res;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));
//Convert all the strings to title caps in a string array
var str=[];
var out=[];
var cap=function(arr){
    str=arr.split("");
    for(var i=0;i<str.length;i++){
      if(!str[i-1] || str[i-1]==" "){
        out.push(str[i].toUpperCase());
      }
      else
       out.push(str[i].toLowerCase());
    }
return out.join("");
}
console.log(cap("My nAMe IS samYU"));
//Sum of all numbers in an array
var arrsum=0;
var sum=function(arr){
    for(var i=0;i<arr.length;i++){
     arrsum+=+arr[i];
    }
    return arrsum;
}
console.log(sum([1,2,3,4,5,6,7,8,9,10]));
//Return all the prime numbers in an array
 var n=[]; 
 var prime=function(arr){
    for(var i=0;i<arr.length;i++){
        var IsPrime=true;
        if(arr[i]===2) 
        IsPrime=true;
        else if(arr[i]%2===0)
            IsPrime=false;
        else {
            for(var j=3;j*j<=arr[i];j+=2){
                if(arr[i]%j===0){ 
                    IsPrime=false;  
                    break;
                    }
            }
        } 
        if(IsPrime) n.push(arr[i]);      
    }   
    return "Prime Numbers: "+n.join(",");
 }
 console.log(prime([2,3,4,6,5,7,9,11,15,16,17,23,25])); 
//Return all the palindromes in an array
var a=[];
var palin=function(arr){
    for(var i=0;i<arr.length;i++){
    var count1=0;
        var str=arr[i].split('');
        var n=str.length,k=n-1;
        for(var j=0;j<=k;j++){
           if(str[j]===str[k]){
             count1++; 
             k--;
        }}
        if(count1>n/2) a.push(arr[i]);
    }  return "Palindrome Words: "+a.join(",");
}
console.log(palin(["madam","happy","level","good","dad"]));
//Return median of two sorted arrays of the same size.
var m=[],m1,m2;
var med=function(arr1, arr2){
     let s1=arr1.sort(function(a,b){ return a-b;});
     let n1=s1.length;
     let s2=arr2.sort(function(a,b){ return a-b;});
     let n2=s2.length;
     if(n1%2!==0){
     m1=s1[Math.floor(n1/2)];
     m2=s2[Math.floor(n2/2)];
     }
     else{
        m1=(s1[Math.floor(n1/2)]+s1[(Math.floor(n1/2))+1])/2;
        m2=(s2[Math.floor(n2/2)]+s2[(Math.floor(n2/2))+1])/2;
     }
console.log(m1,m2);
return "Median of two array : "+(m1+m2)/2;
}
console.log(med([10,7,6,9,8],[4,3,1,5,2]));
//Remove duplicates from an array
var d=[];
var dup=function(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                delete(arr[j]);
            break;
        }
        }  if(arr[i]!=null)d.push(arr[i]);
    }
    return "Array without duplicate: "+d.join(",");
}
console.log(dup(["a","a","p","p","l","e"]));
//Rotate an array by k times
var a=[];
var rott=function(arr){
    let n=arr.length;
    //console.log(arr);
    for(var i=0;i<n;i++){
        var r=[];
        if(i===(n-1)) {
            for(let p=0;p<n;p++){
             r.push(arr[p]);
            } 
        }
        else{
          for(var j=i+1;j<n;j++){
             r.push(arr[j]);
              if(j===(n-1)){
                for(var k=0;k<=i;k++){
                  r.push(arr[k]);
                }
                break;
            } }
        } a.push(r); 
    }  return a;
}
console.log(rott(["k","e","t","t","l","e"]));
//-------------------------------------------
console.log("------------------------------");
console.log("IIFE Function");
console.log("------------------------------");
//-------------------------------------------
//Print odd numbers in an array
var res=[];
(function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            res.push(arr[i]);
    }}
  console.log(res);
})([1,2,3,4,5,6,7,8,9,10]);
//Convert all the strings to title caps in a string array
var str=[];
var out=[];
(function(arr){
    str=arr.split("");
    for(var i=0;i<str.length;i++){
      if(!str[i-1] || str[i-1]==" "){
        out.push(str[i].toUpperCase());
      }
      else
       out.push(str[i].toLowerCase());
    }
console.log(out.join(""));
}) ("My nAMe IS samYU");
//Sum of all numbers in an array
var arrsum=0;
(function(arr){
    for(var i=0;i<arr.length;i++){
     arrsum+=+arr[i];
    }
    console.log(arrsum);
}) ([1,2,3,4,5,6,7,8,9,10]);
//Return all the prime numbers in an array
 var n=[]; 
 (function(arr){
    for(var i=0;i<arr.length;i++){
        var IsPrime=true;
        if(arr[i]===2) 
        IsPrime=true;
        else if(arr[i]%2===0)
            IsPrime=false;
        else {
            for(var j=3;j*j<=arr[i];j+=2){
                if(arr[i]%j===0){ 
                    IsPrime=false;  
                    break;
                    }
            }
        } 
        if(IsPrime) n.push(arr[i]);      
    }   
    console.log("Prime Numbers: "+n.join(","));
 }) ([2,3,4,6,5,7,9,11,15,16,17,23,25]); 
//Return all the palindromes in an array
var a=[];
(function(arr){
    for(var i=0;i<arr.length;i++){
    var count1=0;
        var str=arr[i].split('');
        var n=str.length,k=n-1;
        for(var j=0;j<=k;j++){
           if(str[j]===str[k]){
             count1++; 
             k--;
        }}
        if(count1>n/2) a.push(arr[i]);
    }  
    console.log("Palindrome Words: "+a.join(","));
}) (["madam","happy","level","good","dad"]);
//Return median of two sorted arrays of the same size.
var m=[],m1,m2;
(function(arr1, arr2){
     let s1=arr1.sort(function(a,b){ return a-b;});
     let n1=s1.length;
     let s2=arr2.sort(function(a,b){ return a-b;});
     let n2=s2.length;
     if(n1%2!==0){
     m1=s1[Math.floor(n1/2)];
     m2=s2[Math.floor(n2/2)];
     }
     else{
        m1=(s1[Math.floor(n1/2)]+s1[(Math.floor(n1/2))+1])/2;
        m2=(s2[Math.floor(n2/2)]+s2[(Math.floor(n2/2))+1])/2;
     }
console.log(m1,m2);
console.log("Median of two array : "+(m1+m2)/2);
}) ([10,7,6,9,8],[4,3,1,5,2]);
//Remove duplicates from an array
var d=[];
(function(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                delete(arr[j]);
            break;
        }
        }  if(arr[i]!=null)d.push(arr[i]);
    }
    console.log("Array without duplicate: "+d.join(","));
}) (["a","a","p","p","l","e"]);
//Rotate an array by k times
var a=[];
(function(arr){
    let n=arr.length;
    //console.log(arr);
    for(var i=0;i<n;i++){
        var r=[];
        if(i===(n-1)) {
            for(let p=0;p<n;p++){
             r.push(arr[p]);
            } 
        }
        else{
          for(var j=i+1;j<n;j++){
             r.push(arr[j]);
              if(j===(n-1)){
                for(var k=0;k<=i;k++){
                  r.push(arr[k]);
                }
                break;
            } }
        } a.push(r); 
    }  console.log(a);
}) (["k","e","t","t","l","e"]);
//------------------------------------
console.log("------------------------------");
console.log("ARROW Function:(TASK-2)");
console.log("--------------------------------");
//--------------------------------------
//Print odd numbers in an array
var res=[];
var odd=(arr) => {
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            res.push(arr[i]);
    }}
return res;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));
//Convert all the strings to title caps in a string array
var str=[];
var out=[];
var cap=(arr) => {
    str=arr.split("");
    for(var i=0;i<str.length;i++){
      if(!str[i-1] || str[i-1]==" "){
        out.push(str[i].toUpperCase());
      }
      else
       out.push(str[i].toLowerCase());
    }
return out.join("");
}
console.log(cap("My nAMe IS samYU"));
//Sum of all numbers in an array
var arrsum=0;
var sum=(arr) => {
    for(var i=0;i<arr.length;i++){
     arrsum+=+arr[i];
    }
    return arrsum;
}
console.log(sum([1,2,3,4,5,6,7,8,9,10]));
//Return all the prime numbers in an array
 var n=[]; 
 var prime=(arr) => {
    for(var i=0;i<arr.length;i++){
        var IsPrime=true;
        if(arr[i]===2) 
        IsPrime=true;
        else if(arr[i]%2===0)
            IsPrime=false;
        else {
            for(var j=3;j*j<=arr[i];j+=2){
                if(arr[i]%j===0){ 
                    IsPrime=false;  
                    break;
                    }
            }
        } 
        if(IsPrime) n.push(arr[i]);      
    }   
    return "Prime Numbers: "+n.join(",");
 }
 console.log(prime([2,3,4,6,5,7,9,11,15,16,17,23,25])); 
//Return all the palindromes in an array
var a=[];
var palin=(arr) => {
    for(var i=0;i<arr.length;i++){
    var count1=0;
        var str=arr[i].split('');
        var n=str.length,k=n-1;
        for(var j=0;j<=k;j++){
           if(str[j]===str[k]){
             count1++; 
             k--;
        }}
        if(count1>n/2) a.push(arr[i]);
    }  return "Palindrome Words: "+a.join(",");
}
console.log(palin(["madam","happy","level","good","dad"]));
//-----------------------------------------

