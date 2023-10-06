import { useState} from "react";


function CuontUp(props) {
    //state
    const [number, setNumber]= useState(props.number)   ;
        const countUpHandle = ()=>{
            //tăng number
            setNumber(Number(number)+1); // number = number + 1
            console.log(number);
        }

        const onChangeHanlde = (evt)=>{
            setNumber(evt.target.value);//lấy giá trị input hiện tại
        }

    return(
        <>
            <input type="text" value={number} onChange={onChangeHanlde}/>
            <button onClick={countUpHandle}>Up</button>
        </>

    );
}

export default CuontUp;