import { useState} from "react";


function CuontDown(props) {
    //state
    const [number, setNumber]= useState(0)
        const countUpHandle = ()=>{
            //giảm number
            setNumber(Number(number)-1); // number = number -1
            console.log(number);
        }

        const onChangeHanlde = (evt)=>{
            setNumber(evt.target.value);//lấy giá trị input hiện tại
        }

    return(
        <>
            <input type="text" value={number} onChange={onChangeHanlde}/>
            <button onClick={countUpHandle}>Down</button>
        </>

    );
}

export default CuontDown;