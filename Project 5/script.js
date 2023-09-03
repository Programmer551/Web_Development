let input=document.getElementById('input')
	let display=input.value
	let num1=()=>{
      console.log(input.value=input.value+"1")
	}
	let num2=()=>{
      console.log(input.value=input.value+"2")
	}
	let num3=()=>{
      console.log(input.value=input.value+'3')
	}
	let num4=()=>{
      console.log(input.value=input.value+'4')
	}
	let num5=()=>{
      console.log(input.value=input.value+'5')
	}
	let num6=()=>{
      console.log(input.value=input.value+'6')
	}
	let num7=()=>{
      console.log(input.value=input.value+'7')
	}
	let num8=()=>{
      console.log(input.value=input.value+'8')
	}
	let num9=()=>{
      console.log(input.value=input.value+'9')
	}
	let num0=()=>{
      console.log(input.value=input.value+'0')
	}
	let add=()=>{
      console.log(input.value=input.value+"+")
	}
	let sub=()=>{
      console.log(input.value=input.value+"-")
	}
	let mult=()=>{
      console.log(input.value=input.value+"*")
	}
	let div=()=>{
      console.log(input.value=input.value+"/")
	}
	let equal=()=>{
		try{
      console.log(input.value=eval(input.value))
      input.classList.remove("error")
      input.placeholder=""

		}
		catch{
            input.classList.add("error")
            input.value=""
            input.placeholder="Invalid Value"
		}
	}
	let C=()=>{
      console.log(input.value="")
        input.classList.remove("error")
      input.placeholder=""
	}
	let decimal=()=>{
      console.log(input.value=input.value+".")
	}
	let del=()=>{
      let str =input.value;
      console.log(str.length)
      let num=str.length-1;
      let str2=str.slice(0,num)
      console.log(str2)
      input.value=str2
      // let a=input.value[num]=""
      // console.log(a)

	}
	