import Avatar from "./avatar";
import Hoten from "./hoten";
import Thanhvien from "./thanhvien";
import ThoiGian from "./date";

function TheThanhVien(props){
    return(
       <>
        <Avatar url={props.mb.avatar}/>
        <Hoten Hoten={props.mb.hoten}/>
        <Thanhvien vip={props.mb.thanhvien}/>
        <ThoiGian datetime={props.mb.ThoiGian}/>
        </>
    );
}
export default TheThanhVien;