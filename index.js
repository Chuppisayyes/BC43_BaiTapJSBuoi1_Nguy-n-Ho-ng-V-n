
console.log('Bài 1: Viết Chương trình tính tiền lương nhân viên. Lương 1 ngày:100.000, nhân viên làm 28 ngày. Công thức tính lương: Lương 1 ngày * số ngày làm');
/* input: tienLuong1Ngay: number, soNgayLam: number */  
var luong1Ngay = 100000;
var soNgayLam = 28;
// Output: tienLuongNhanVien: number
var tienLuongNhanVien = 0;
// Process:
tienLuongNhanVien = luong1Ngay * soNgayLam;
console.log('    Input: tienLuong1Ngay: number, soNgayLam: number');
console.log('          var luong1Ngay = 100000;');
console.log('          var soNgayLam = 28;');
console.log('    Output: tienLuongNhanVien: number');
console.log('          var tienLuongNhanVien = 0;');
console.log('    Process:');
console.log('          tienLuongNhanVien = luong1Ngay * soNgayLam;');
console.log('               Tiền Lương Nhân Viên','=',tienLuongNhanVien .toLocaleString()); 

console.log('________________________________________________________________________________________________________');
console.log('Bài 2: Viết Chương trình tính giá trị trung bình. Tính giá trị trung bình của 5 số thực : 5 10 35 60 90. Công thức tính: cộng tất cả 5 số thực lại rồi chia cho 5');
/* input: soA: number, soB: number, soC: number, soD: number, soE: number,*/  
var soA = 5;
var soB = 10;
var soC = 35;
var soD = 60;
var soE = 90;
// Output: giaTriTrungBinh
var giaTriTrungBinh = 0;
// Process:
giaTriTrungBinh = (soA + soB + soC + soD + soE)/5;

console.log('         Input: soA: number, soB: number, soC: number, soD: number, soE: number,');
console.log('               var soA = 5;');
console.log('               var soB = 10;');
console.log('               var soC = 35;');
console.log('               var soD = 60;');
console.log('               var soE = 90;');
console.log('         Output: giaTriTrungBinh');
console.log('               var giaTriTrungBinh = 0;');
console.log('         Process:');
console.log('               giaTriTrungBinh = (soA + soB + soC + soD + soE)/5;');
console.log('                   Giá trị trung bình','=',giaTriTrungBinh .toLocaleString());


console.log('________________________________________________________________________________________________________');
console.log('Bài 3: Viết Chương trình Quy đổi tiền. Giá USD hiện nay là 23.500 VND , quy đổi 6880 USD sang VND. Công thức tính: số tiền USD * 23.500');
/* input: usdPrice: number; soTienUsd: number*/  
const usdPrice = 23500;
var soTienUsd = 6680;
// Output: soTienQuyDoiSangVND;
var soTienQuyDoiSangVND = 0;
// Process:
soTienQuyDoiSangVND = usdPrice * soTienUsd;
console.log('       Input: usdPrice: number; soTienUsd: number');
console.log('               const usdPrice = 23500;');
console.log('               var soTienUsd = 6680;');
console.log('       Output: soTienQuyDoiSangVND;');
console.log('               var soTienQuyDoiSangVND = 0;');
console.log('       Process:');
console.log('               soTienQuyDoiSangVND = usdPrice * soTienUsd;');
console.log('                   Số tiền quy đổi sang VNĐ','=',soTienQuyDoiSangVND .toLocaleString());


console.log('________________________________________________________________________________________________________');
console.log('Bài 4: Viết Chương trình tính diện tích, chu vi hình chữ nhật. Chiều dài: 43, Chiều rộng 18. Công thức tính diện tích: chiều dài * chiều rộng ; ct tính chu vi: (chiều dài + chiều rộng )*2');
// Input: chieuDai:number, chieuRong:nuumber
var chieuDai = 43;
var chieuRong = 17;
// Output: chuVi:number, dienTich:number
var chuVi = 0;
var dienTich = 0;
// Process:
dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong) * 2;
console.log('       Input: chieuDai:number, chieuRong:nuumber');
console.log('               var chieuDai = 43;');
console.log('               var chieuRong = 17;');
console.log('       Output: chuVi:number, dienTich:number');
console.log('               var chuVi = 0;');
console.log('               var dienTich = 0;');
console.log('       Process:');
console.log('               dienTich = chieuDai * chieuRong;');
console.log('               chuVi = (chieuDai + chieuRong) * 2;');
console.log('                   Diện tích', '=', dienTich .toLocaleString());
console.log('                   Chu Vi', '=', chuVi .toLocaleString());


console.log('________________________________________________________________________________________________________');
console.log('Bài 5: Viết Chương trình tính tổng 2 ký số của số: 37.  ');
// Input: var soCanTinh: number, soHangDonVi: number, soHangChuc: number
var soCanTinh = 37;
var soHangDonVi = 0;
var soHangChuc =0;
// Output: dapso:number
var dapSo = 0;
// Process:
soHangDonVi = soCanTinh % 10;
soHangChuc = (soCanTinh - soHangDonVi) / 10;
dapSo = soHangDonVi + soHangChuc;
console.log('       Input: var soCanTinh: number, soHangDonVi: number, soHangChuc: number');
console.log('               var soCanTinh = 37;');
console.log('               var soHangDonVi = 0;');
console.log('               var soHangChuc =0;');
console.log('       Output: dapso:number');
console.log('               var dapSo = 0;');
console.log('       Process:');
console.log('               soHangDonVi = soCanTinh % 10;');
console.log('                   số Hàng Đơn Vị', '=', soHangDonVi .toLocaleString());
console.log('               soHangChuc = (soCanTinh - soHangDonVi) / 10;');
console.log('                   số Hàng Chục', '=', soHangChuc .toLocaleString());
console.log('               dapSo = soHangDonVi + soHangChuc;');
console.log('                   Tổng 2 ký số của số cần Tính', '=', dapSo .toLocaleString());
