//không quan tâm kiểu dữ liệu gì
// number string boolean null array function 
var x=10; 
x = "T2505E";

var a=10;
var b= "20";
var c= "abcde";

// n + n = n
// n + s = s
// s + s = s
console.log(a+a);//20
console.log(a+b);//1020
console.log(b+a);//2010
console.log(b+c);//20abcde
var t = false;

if(a> 5){
    console.log(A);
}else if(a>=10){
    console.log(B);
}

for(var i=0;i<10;i++){
    console.log("i="+i);
}
var arr = [];//đây là một  array
// arr[0]=9;
// arr[5]=12;
// arr[2]=182;
arr.push(9);//0
arr.push(12);//1
arr.push(182);//2
for( var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
arr.map(e=>{
    console.log(e);
});
arr.map((e,i)=>{
    console.log(e);
})
arr.sort();//sắp xếp lại mảng thuật toán nổi bọt
// tìm kiếm tuyến tính 
arr.uncludes(9);//true/false
if(arr.includes(9)){

}
var pi ="3.14159";
pi = parsefloat(pi);//chuyen thanh so
pi = parseInt(pi);

function tinh_tong(a,b){
    var c = a+b;
    return c;
}
const phep_tru = function(a,b){
    var c = a-b;
    return c;
}
phep_tru(5,2);
const phep_nhan = (a,b)=>{
    var c = a*b;
    // return c;
    console.log(c);
}
phep_nhan(7,3);
alert("bạn chưa đủ trình truy cập website");//return void
// cảnh báo xong chả làm gì nữa
confirm("cam đoan rằng bạn đã đủ trình?");//return boolean
if(confirm("cam đoan rằng bạn đã đủ trình?")){
    var s = prompt("vui lòng nhập tên của bạn:");//return string
    var t = prompt("bạn bao nhiêu tuổi"); // string
    alert("chào mừng bạn gia nhập cộng đồng"+s);
}else{
    alert("vui lòng thoát khỏi website và chờ đủ trình");
}
var r = Math.random(); //return number -> double/float r= 0.12729
r = r*100; //12.729
r = parseInt(r);//12
//LUCKY NUMBER 
// tạo một số ngãu nhiên từ 0->99 (<100)
//cho người chơi nhập số dự đoán của mình 
// và nhập số tiền muốn đầu tư -> lợi nhuận x70
// đối chiếu và thông báo kết quả trúng thưởng hay không để còn trao thưởng hihihihihihi
