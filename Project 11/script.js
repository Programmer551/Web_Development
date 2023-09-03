 const ul=document.getElementById('ul')
   const input=document.getElementById('input')
   const add=document.getElementById('add')
   const remove=document.getElementById('remove')
   const reset=document.getElementById('reset')
   const value=input.value
let update=()=>{
	let li=document.createElement("li")
	li.classList.add("li")
	let value=input.value
	localStorage.setItem(value,value)
	let v=localStorage.getItem(value)
	li.innerHTML=v
	ul.append(li)
}
let finish=()=>{
	localStorage.clear()
	ul.innerHTML=""
}
   add.addEventListener("click",update)
   reset.addEventListener("click",finish)
  for(let i =0;i<localStorage.length;i++){
    let li=document.createElement("li")
    li.classList.add("li")
	let value=input.value
	let v=localStorage.key(i)
	li.innerHTML=v
	ul.append(li)
  }