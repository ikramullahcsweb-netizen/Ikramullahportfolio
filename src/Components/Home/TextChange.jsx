import React, { useEffect, useState } from 'react'

const TextChange = () => {
  //  const texts=["Hi,I Am Ikramullah!" , "I am Ikramullah" ,"I am Ikramullah"]
  const texts=["Hi, I AM IKRAMULLAH"]
  
   const [currentText, setCurrentText]=useState("")
  const [endValue, setEndValue]=useState(true);
  const [isFarward, setIsFarward]=useState(true);
  const [index,setIndex]=useState(0);
 useEffect(()=>{
  const intervalid= setInterval(() => {
    setCurrentText(texts[index].substring(0,endValue))
    if(isFarward){
      setEndValue((prev)=> prev + 1);
    }
    else{
        setEndValue((prev)=> prev - 1);
    }
    if(endValue> texts[index].length+10){
      setIsFarward(false)
    }
    if(endValue < 2.1){
      setIsFarward(true)
      setIndex((prev)=>prev&texts.length)
    }
  }, 70);
   return ()=>clearInterval(intervalid)

},[endValue,isFarward,index,texts])

   return (
    <div>
      <div className='transition ease duration-300'>
      {currentText}
    </div>
    </div>
  )
}

export default TextChange
