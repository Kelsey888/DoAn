import { useState} from "react";

function Dlavn(){

    const [dollar,setDollar] =useState();
    const [vnd,setVnd] = useState(null);

    const onChangedollar = (e)=>{
        setDollar(e.target.value);
    }
    const onClickdoi = ()=>{
        const tigia= 24500;
        setVnd(dollar*tigia);
    }
    return(
        <>
            <input type="text" placeholder="USD" value={dollar} onChange={onChangedollar}/>
            <button onClick={onClickdoi}>Đổi</button>
            <input type="text" placeholder="VND" value={vnd}/>
        </>


    );

}
export default Dlavn;