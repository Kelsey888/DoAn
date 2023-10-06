import Hinhanh from "./hinhanh";
import TenSanPham from "./ten_sp";
import GiaTien from "./gia_tien";
import Mua from "./mua";
function LoaiSP(props) {
    return(
        <>
            <Hinhanh  url={props.lsp.hinhanh}/>
            <TenSanPham tenSP={props.lsp.tenSP}/>
            <GiaTien gia={props.lsp.gia}/>
            <Mua mua={props.lsp.mua}/>
        </>
    );




}
export default LoaiSP;