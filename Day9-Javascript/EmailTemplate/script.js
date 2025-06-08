// Accept name, department, joining date and create a mail tmeplate .
let name = prompt("Enter the Candiate name");
let department = prompt("enter the department");
let jod = prompt("Enter the joining date");

function produce(name, department, jod)
{
  const mail = document.createElement('div');
  mail.innerHTML=`Dear ${name}, <br>
  Welcome to ${department} team. Your joining date is ${jod}.<br>
  Regards.`;
  //mail.appendChild(text);
  document.getElementsByClassName("container")[0].appendChild(mail);
}
produce(name, department, jod);
