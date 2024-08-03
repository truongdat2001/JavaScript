//slide
var anhArr = [];
var cont = 0;
var nguoiDung = false;

function play() {
    for(let i=0; i<5; i++){
        anhArr[i]=new Image;
        anhArr[i].src = "imgs/anh"+i+".png";
    }
    hinh1();
    
}   
    setTimeout(() => {
        next();
    }, 3000);
function next() {
    if(cont<4){
        cont++;
        if(cont==0){
            hinh1()
            setTimeout(() => {
                next();
            }, 3000);
        }else if(cont==1){
            hinh2();
            setTimeout(() => {
                next();
            }, 3000);
        }else if(cont==2){
            hinh3();
            setTimeout(() => {
                next();
            }, 3000);
        }else if(cont==3){
            hinh4();
            setTimeout(() => {
                next();
            }, 3000);
        }else if(cont==4){
            hinh5();
            setTimeout(() => {
                next()
            }, 3000);
    }
    }else{
        cont=-1;
        next();
    }
}

function prev() {
    if(cont>0){
        cont--;
        if(cont==0){
            hinh1()
        }else if(cont==1){
            hinh2();
        }else if(cont==2){
            hinh3();
        }else if(cont==3){
            hinh4();
        }else if(cont==4){
            hinh5();
    }
    }else{
        cont = 5
        prev();
    }
}

function hinh1() {
    cont=0;
    document.getElementById("slide").src = anhArr[0].src;
    for(let i =0;i<5;i++)document.getElementsByClassName("dot")[i].setAttribute("style","background-color: none;")
    document.getElementsByClassName("dot")[0].setAttribute("style","background-color: #717171;")
}
function hinh2() {
    cont=1;
    document.getElementById("slide").src = anhArr[1].src;
    for(let i =0;i<5;i++)document.getElementsByClassName("dot")[i].setAttribute("style","background-color: none;")
    document.getElementsByClassName("dot")[1].setAttribute("style","background-color: #717171;")
}
function hinh3() {
    cont=2;
    document.getElementById("slide").src = anhArr[2].src;
    for(let i =0;i<5;i++)document.getElementsByClassName("dot")[i].setAttribute("style","background-color: none;")
    document.getElementsByClassName("dot")[2].setAttribute("style","background-color: #717171;")
}
function hinh4() {
    cont=3;
    document.getElementById("slide").src = anhArr[3].src;
    for(let i =0;i<5;i++)document.getElementsByClassName("dot")[i].setAttribute("style","background-color: none;")
    document.getElementsByClassName("dot")[3].setAttribute("style","background-color: #717171;")
}
function hinh5() {
    cont=4;
    document.getElementById("slide").src = anhArr[4].src;
    for(let i =0;i<5;i++)document.getElementsByClassName("dot")[i].setAttribute("style","background-color: none;")
    document.getElementsByClassName("dot")[4].setAttribute("style","background-color: #717171;")
}

//hover anh
function hover1(id,anh1,anh2) {
    document.getElementById(id).style.display = "block"
    document.getElementById(anh1).style.display = "none"
    document.getElementById(anh2).style.display = "block"
}
function unHover1(id,anh1,anh2){
    document.getElementById(id).style.display = "none"
    document.getElementById(anh1).style.display = "block"
    document.getElementById(anh2).style.display = "none"
}
function hienThiSP(icon) {
    document.getElementById("thongTinSP").style.display = "block"
    document.getElementById("main").style.opacity = "0.2"

    var box = icon.parentElement.parentElement.cloneNode(true);
    var tenSP = box.getElementsByTagName("h4")[0].innerHTML;
    var img = box.getElementsByTagName("img")[0].src;
    var giaSP = box.getElementsByTagName("p")[0].innerHTML
    var hinh1 = box.getElementsByTagName("img")[0].src;
    var hinh2 = box.getElementsByTagName("img")[1].src

    document.getElementById("tenSP").innerHTML = tenSP;
    document.getElementById("hinhSP").src = img;
    document.getElementById("giaSP").innerHTML = giaSP;
    document.getElementById("hinh1").src = hinh1;
    document.getElementById("hinh2").src = hinh2;

    document.getElementById("DangCap").innerHTML = "sdsd";
    document.getElementById("DangCap").innerHTML = giaSP;
    document.getElementById("hinhTrangChuyen").scr = hinh2;
    return tenSP,giaSP;
}

function hienThiTrang() {
    hienThiSP();
    document.getElementById("hinhTrangChuyen").scr = hinh2;
    
}

function chuyenHinh1() {
    var img = document.getElementById("hinh1").src;
    document.getElementById("hinhSP").src = img;
}

function chuyenHinh2() {
    var img = document.getElementById("hinh2").src;
    document.getElementById("hinhSP").src = img;
}
function tatSP() {
    document.getElementById("thongTinSP").style.display = "none"
    document.getElementById("main").style.opacity = "1"
    document.getElementById("bangDangNhap").style.display = "none"
}

///
function dangNhap() {
    document.getElementById("bangDangNhap").style.display = "block"
    document.getElementById("thongTinSP").style.display = "none"
    document.getElementById("main").style.opacity = "0.1"

}



function login() {
    var use = document.getElementById("useName").value;
    var pw = document.getElementById("password").value;
        
    var check = true
    
    if(nguoiDung==true){
        alert("Đăng nhập thành công")
    }else{ 
        if(use == ''){
            document.getElementById("checkUseName").innerText = "Không được bỏ trống"
            check = false
        }
        if(pw=='') {
            document.getElementById("checkPass").innerText = "Không được bỏ trống"
            check = false
        }
    
        if(use!=''&&pw!=''){
            if(use=='admin123'&&pw=='@123456'){
                document.getElementById("trangThai").style.display = "block"
                document.getElementById("trangThai").innerHTML = "Thành công .........."
            }else{
                document.getElementById("nhapSai").innerHTML = "Bạn nhập sai tài khoản hoặc mật khẩu!"
                check =false
            }
        }
    }
    return check

}
function nhapUse() {
    var use = document.getElementById("useName").value;
    var dem = use.length
    
    if(dem<8||dem>30){
        document.getElementById("checkUseName").innerText = "Bạn phải nhập từ 8-30 kí tự"
        document.getElementById("useName").style.borderBottom = "1px red solid"
    }else{
        document.getElementById("checkUseName").innerText = ""
        document.getElementById("useName").style.borderBottom = "1px green solid"
        return nguoiDung = true;
    }
    if(dem == 0){
        document.getElementById("checkUseName").innerText = "Không được bỏ trống"
    }
}
function nhapPass() {
    var pw = document.getElementById("password").value;
    var dem =pw.length
    if(dem<6||dem>18){
        document.getElementById("checkPass").innerHTML = "Bạn phải nhập từ 6 đến 18 kí tự"
        document.getElementById("password").style.borderBottom = "1px red solid"
    }else{
        document.getElementById("checkPass").innerHTML = ""
        document.getElementById("password").style.borderBottom = "1px green solid"
        return nguoiDung = true;
    }
    if(pw=='') {
        document.getElementById("checkPass").innerText = "Không được bỏ trống"
    }
}


//bat sony
function sony() {
    document.getElementById("canon").style.display = "none"
    document.getElementById("sony").style.display = "block"
}
function canon() {
    document.getElementById("canon").style.display = "block"
    document.getElementById("sony").style.display = "none"
}

//Giỏ hàng

function gioHang() {
    document.getElementById("content").style.display="none"
    document.getElementById("gioHang").style.display="block"
}

var tong=0;

function them(span){
    var box = span.parentElement.cloneNode(true);
    
    //xóa thuộc tính ko cần thiết
    var giamGia = box.getElementsByTagName("div")[3]
    var them = box.getElementsByTagName("div")[4]
    var icon = box.getElementsByTagName("div")[5]
    box.removeChild(giamGia)
    box.removeChild(them)
    box.removeChild(icon)
    document.getElementById("sidebar-main").appendChild(box)

    var box = span.parentElement.cloneNode(true);
    
    //xóa thuộc tính ko cần thiết
    var giamGia = box.getElementsByTagName("div")[3]
    var them = box.getElementsByTagName("div")[4]
    var icon = box.getElementsByTagName("div")[5]
    box.removeChild(giamGia)
    box.removeChild(them)
    box.removeChild(icon)

    //Thêm thuộc tính
    var button = document.createElement("button")
    button.innerText= "Xóa"
    button.setAttribute('onclick','xoa(this)');
    box.appendChild(button)

    document.getElementById("thongTinDonHang").appendChild(box);


    tong++;
    document.getElementById("soDonHang").innerHTML = tong
    document.getElementById("soDonHang-gioHang").innerText = tong

    tinhTongSoTien(box)
}

function xoa(button){

    // var roww = button.parentElement.cloneNode(true);
    // document.getElementById("sidebar-main").removeChild(roww)

    var box = button.parentElement.cloneNode(true);
    var row = button.parentElement;
    document.getElementById("thongTinDonHang").removeChild(row);


    tong--;
    document.getElementById("soDonHang").innerHTML = tong
    document.getElementById("soDonHang-gioHang").innerText = tong
    tinhTongSoTien(box)
}

function tinhTongSoTien(box) {
    //Thêm số tiền
    var tongSoTien=0;
    var cart = document.getElementById("thongTinDonHang")
    var rows = cart.getElementsByClassName("box")

    for(var i=0; i<rows.length; i++){
        var giaTien = box.getElementsByTagName('div')[2].getElementsByTagName("p")[0].textContent
        giaTien=giaTien.replace('₫','').replace(/\./g,'');
        tongSoTien+=parseFloat(giaTien);
    }

    var tongSoTienFormatted = tongSoTien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    document.getElementById("tongSoTien").innerHTML = tongSoTienFormatted;
    document.getElementById("soTien-ThanhToan").innerHTML = tongSoTienFormatted;
}


//Thanh  toan
function thanhToan() {
    var soTien = document.getElementById("tongSoTien").textContent
    if(soTien==''){
        alert("Bạn chưa có đơn hàng nào trong giỏ hàng")
    }else{
        document.getElementById("gioHang").style.display='none'
        document.getElementById("form-main").style.display = 'block'
    }
}


///check form
function validation() {
    var TF = true
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value

    if(name!=''){
        document.getElementById("checkName").innerHTML = ""
        document.getElementById("name").style.border = "1px solid green"

    }else{
        document.getElementById("checkName").innerHTML = "Bạn chưa nhập tên"
        document.getElementById("name").style.border = "1px solid red"
        TF=false
    }

    if(email!=''){
        document.getElementById("checkEmail").innerHTML = ""
        document.getElementById("email").style.border = "1px solid green"

    }else if(email==""){
        document.getElementById("checkEmail").innerHTML = "Bạn chưa nhập email"
        document.getElementById("email").style.border = "1px solid red"

        TF=false
    }

    if(isNaN(contact)){
        document.getElementById("checkContact").innerHTML = "Bạn vui lòng nhập số điện thoại"
        document.getElementById("contact").style.border = "1px solid red"
        TF = false
    }else{
        if(contact.length==10){
            document.getElementById("checkContact").innerHTML = ""
            document.getElementById("contact").style.border = "1px solid green"
        }else{
            document.getElementById("checkContact").innerHTML = "Bạn vui lòng nhập số điện thoại"
            document.getElementById("contact").style.border = "1px solid red"
            TF = false
        }
    }

    if(address!=''){
        document.getElementById("checkAddress").innerHTML = ""
        document.getElementById("address").style.border = "1px solid green"
    }else {
        document.getElementById("checkAddress").innerHTML = "Bạn chưa nhập địa chỉ"
        document.getElementById("address").style.border = "1px solid red"
        TF=false
    }

    var radio = document.getElementById("radio").getElementsByTagName('input')

    var check=0
    for(let i=0;i<radio.length;i++) {
        if(radio[i].checked){
            check++;
        }
    }
    if(check==0){
        document.getElementById("checkRadio").innerHTML ="Bạn chưa chọn hình thức thanh toán"
        TF= false
    }else{
        document.getElementById("checkRadio").innerHTML =""
    }

    return TF
    
}


//hien Dang Ky
function hienDangKy() {
    document.getElementById("bangDangNhap").style.display = "none"
    document.getElementById("dangKy").style.display ='block'
}

function validationForm2(){
    var TF = true
    var name = document.getElementById("name").value;
    var use = document.getElementById("use").value;
    var pass= document.getElementById("pass").value;
    var newPass=document.getElementById("newPass").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;

    if(name!=''){
        document.getElementById("checkName").innerHTML = ""
        document.getElementById("name").style.border = "1px solid green"

    }else{
        document.getElementById("checkName").innerHTML = "Bạn chưa nhập tên"
        document.getElementById("name").style.border = "1px solid red"
        TF=false
    }

    if(email!=''){
        document.getElementById("checkEmail").innerHTML = ""
        document.getElementById("email").style.border = "1px solid green"

    }else if(email==""){
        document.getElementById("checkEmail").innerHTML = "Bạn chưa nhập email"
        document.getElementById("email").style.border = "1px solid red"

        TF=false
    }

    if(isNaN(contact)){
        document.getElementById("checkContact").innerHTML = "Bạn vui lòng nhập số điện thoại"
        document.getElementById("contact").style.border = "1px solid red"
        TF = false
    }else{
        if(contact.length==10){
            document.getElementById("checkContact").innerHTML = ""
            document.getElementById("contact").style.border = "1px solid green"
        }else{
            document.getElementById("checkContact").innerHTML = "Bạn vui lòng nhập số điện thoại"
            document.getElementById("contact").style.border = "1px solid red"
            TF = false
        }
    }

    if(use!=''){
        if(use.length<8) {
            document.getElementById("checkUse").innerHTML = "Tên đăng nhập phải trên 8 kí tự"
            document.getElementById("use").style.border = "1px solid red"
            TF= false
        }else{
            document.getElementById("checkUse").innerHTML = ""
            document.getElementById("use").style.border = "1px solid green"
        }
    }else {
        document.getElementById("checkUse").innerHTML = "Vui lòng nhập tên đăng nhập"
        document.getElementById("use").style.border = "1px solid red"
        TF= false
    }

    if(pass!='') {
        if(pass.length<6){
            document.getElementById("checkPassDK").innerHTML ="Mật khẩu phải trên 6 kí tự"
            document.getElementById("pass").style.border = "1px solid red"
            TF = false
        }else {
            document.getElementById("checkPassDK").innerHTML =""
            document.getElementById("pass").style.border = "1px solid green"
        }
        if(newPass!=''){
            if(newPass!=pass) {
                document.getElementById("checkNewPass").innerHTML = "Bạn nhập lại mật khẩu không chính sát"
                document.getElementById("newPass").style.border = "1px solid red"
                TF = false
            }else{
                document.getElementById("checkNewPass").innerHTML = ""
                document.getElementById("newPass").style.border = "1px solid green"
            }
        }
    }else {
        document.getElementById("checkPassDK").innerHTML ="Vui lòng nhập mật khẩu"
        document.getElementById("pass").style.border = "1px solid red"
        TF = false
        if(newPass!=''){
                document.getElementById("checkNewPass").innerHTML = "Bạn phải nhập mật khẩu trước"
                document.getElementById("newPass").style.border = "1px solid red"
        }
    }

    

    if(TF){
        alert("Đăng kí thành công")
    }
    return TF
}