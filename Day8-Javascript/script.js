
// NUMBER IS POISTIVE NEGATive or 0
function exec(){let n;
  n = parseInt(prompt("Enter a number"));
  if(n>0) console.log("The number is positive");
  else if(n==0) console.log("The number is zero");
  else console.log("The number is negative");


  // let n1,n2;
  n1 = parseInt(prompt("Enter a n1 The second Assignemnt"));
  n2 = parseInt(prompt("Enter a n2 The second Assignemnt"));
  if(n1>n2) console.log(" n1 is greater");
  else if(n1==n2) console.log("The number is equal");
  else console.log("n2 is greater");

  // Arithmetic operation
  n1 = parseInt(prompt("Enter a n1 The third Assignemnt"));
  n2 = parseInt(prompt("Enter a n2 The third Assignemnt"));
  console.log("Summation=",n1+n2);
  console.log("Subtraction=",Math.abs(n1-n2));
  console.log("Multiplication=",n1*n2);
  console.log("Division=",n1/n2);
  console.log("Modulus=",n1%n2);}
  exec();



function buzzfizz()
{
  for (let i =1; i<=100; i++)
    {
      if(i%3==0 && i%5==0)
         console.log(i+": BuzzFizz\n");
      else if(i%3==0)
        console.log(i+": Fizz\n");
      else if(i%5==0)
         console.log(i+": Buzz\n");
      else
        console.log(i+"None\n");
    }
}
buzzfizz();



// FACTORIAL
function factorial()
{
  let n = parseInt(prompt("anter the factorial numbre"))
  let ans = 1;
  for (let i =1; i<=n; i++)
    {
      ans = ans*i;
    }
  console.log("Fcatorial is: "+ans);
}
factorial();


// PALLINDROME
function pallindrome()
{
  let x = prompt("Enter to check if the string is pallindrome");
  const l = x.length;
  let i=0; let j=l-1;
  while(i<=j)
    {
      if(!(x[i]===x[j]))
         {
        console.log("Nort Palllindrome");
        return ;
         }
      i++;j--;
    }
  console.log("Pallindrome");
}
pallindrome();



// SORT - USED selection
function sort()
{
  const arr = [9,8,7,5,5,3,0];
  let i =0; let l=arr.length;
  let j = 0;
  for(i=0;i<l;i++)
    {
      let mn = i;
      for(j=i+1;j<l;j++)
       {  if(arr[j]<arr[mn])
         mn = j;}
      let t = arr[i];
      arr[i] = arr[mn];
      arr[mn]=t;
      
    }
  console.log(arr);
}
sort();


// Smallest and Lgrfesy
function smallestAndLargest()
{
  const arr = [9,8,7,5,5,3,0,9,10];
  let i =0; let l=arr.length;
  let sm = 0; let lg =0;
  for(i=0;i<l;i++)
    {
      if(arr[i]>arr[lg])
        lg = i;

      if(arr[i]<arr[sm])
        sm=i;

    }
  console.log("Smallest is "+arr[sm]+"Largest is"+arr[lg]);
}
smallestAndLargest();


// Calculator
function calculator()
{
  let n1 = parseInt(prompt("Enter the first number of the Calcukator"))
  let n2 = parseInt(prompt("Enter the second number of the calculator"));
  let op =prompt("Enter the operation");

  switch (op){
    case "+" :
      console.log("Suma is="+(n1+n2));
      break;
    case "-":
      console.log("subtract is="+(n1-n2));
      break;
    case "*":
      console.log("Multiply="+(n1*n2));
      break;
    case "/":
      console.log("Division="+(n1/n2));
      break;
    case "%":
      console.log("Modulus="+(n1%n2));
      break;
    default:
      console.log("Wrong operator");
  }
}
calculator();


// User profile creation
const desg = ["Software Developer / Engineer","Front-End Developer","Back-End Developer","Full-Stack Developer","QA Tester / Test Engineer"]
function submit()
{
  console.log("Button cicked");
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let company = document.getElementById("company").value;
  let designation = document.getElementById("designation").value;

  if(name.trim() === "")
   { alert("Name is missing");
   }

  if(age.trim() === ""){
    alert("Age is missing");}

  if(company.trim() === ""){
    alert("Company is missing");}

  

  
  if(designation.trim() === "")
  {
    let n = Math.floor(Math.random()*(desg.length));
    console.log(n)
    designation = desg[n];
  }

  
  console.log(name);
  console.log(age);
  console.log(company);
  console.log(designation);
}
