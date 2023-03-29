console.log('Function start')
const form=document.getElementById('myform');
const tableBody=document.querySelector('#tbl tbody')
form.addEventListener('submit',(event)=>{event.preventDefault()

const name=document.getElementById('name').value;
const date=document.getElementById('date').value;
const age=document.getElementById('age').value;
const reg=document.getElementById('reg').value;
const college=document.getElementById('college').value;
const dept=document.getElementById('dep').value;

const newRow=document.createElement('tr');
const nameCell=document.createElement('td');
const dateCell=document.createElement('td');
const ageCell=document.createElement('td');
const regnCell=document.createElement('td');
const collCell=document.createElement('td');
const deptCell=document.createElement('td');

nameCell.textContent=name;
dateCell.textContent=date;
ageCell.textContent=age;
regnCell.textContent=reg;
collCell.textContent=college;
deptCell.textContent=dept;

newRow.appendChild(nameCell);
newRow.appendChild(dateCell);
newRow.appendChild(ageCell);
newRow.appendChild(regnCell);
newRow.appendChild(collCell);
newRow.appendChild(deptCell);

tableBody.appendChild(newRow);

form.reset();
});
