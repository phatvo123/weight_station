
const webCamElement = document.getElementById('webcam_real');
const canvasElement = document.getElementById('canvas');
const webcam= new Webcam(webCamElement,"user",canvasElement);
webcam.start();
var picture ;
function takeAPicture(){
    picture = webcam.snap();
    document.querySelector('a').src = picture;
   
}   


const firebaseConfig = {
  apiKey: "AIzaSyAT9Jm0ObdHVUhjYTbUXFTraRukK3cQyPg",
  authDomain: "phatttttt-3336d.firebaseapp.com",
  databaseURL: "https://phatttttt-3336d.firebaseio.com",
  projectId: "phatttttt-3336d",
  storageBucket: "phatttttt-3336d.appspot.com",
  messagingSenderId: "465952679511",
  appId: "1:465952679511:web:6114fa212edc4d0966a512",
  measurementId: "G-E42TYWF65T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function startTime() {
  const today = new Date();

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  document.getElementById('ngayc').innerHTML =today.toLocaleDateString();
  setTimeout(startTime, 1000);


}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
var  a,bsx, tenlx, ngay,gio,tlbt,tlkc,tlhh,vtt,trong_luong_hh_tab2;
function Ready(){

  bsx = document.getElementById('plate_number').value;
  khung = document.getElementById('khung_xe').value;
  tenlx = document.getElementById('tenlx').value;
  gplx = document.getElementById('gplx').value;
  ngay = document.getElementById('ngayc').value;
  gio = document.getElementById('txt').value;
  trong_luong_hh= document.getElementById('trong_luong_hh_tab2').value;
  tlbt = document.getElementById('tbbt').value;
  tlkc = document.getElementById('tlkc').value;
  vtt = document.getElementById('vtt').value;
  phan_tram = document.getElementById('phan_tram').value;

}


  var tlkc = document.getElementById('tlkc');
  var dbRef = firebase.database().ref().child('kl');
  dbRef.on('value', snap => tlkc.innerText = snap.val());

 

//------------------- insert
document.getElementById("calc").onclick = function(){
  Ready();
  firebase.database().ref('Thong_tin_xe/'+khung).on('value',function(snapshot){

      document.getElementById('tbbt').value=snapshot.val().Trong_luong_ban_than;
      document.getElementById('trong_luong_hh_tab2').value=snapshot.val().Trong_luong_hang_hoa;
      document.getElementById('plate_number').value=snapshot.val().Bien_so_xe;
      var trong_luong_hh = document.getElementById('trong_luong_hh_tab2').value
      var trong_luong_bt = document.getElementById('tbbt').value
      var trong_luong_can = document.getElementById('tlkc').value
      var bien_so_xe= document.getElementById('plate_number').value
  
      var kl = (trong_luong_can-trong_luong_hh-trong_luong_bt)
      var kq = kl.toFixed(2);
      var n = (kq/(trong_luong_hh*100))*10000
      var phan_tram = n.toFixed(2);
      var khong = 0;
      if (phan_tram < 0){
        document.getElementById('phan_tram').value =khong;
      }
     else{
      document.getElementById('phan_tram').value =phan_tram;
     }
      document.getElementById('vtt').value =kq;  
      document.getElementById('bsx').value =bien_so_xe;  
      
  });
  

}

document.getElementById('insert-tab2').onclick = async () => {
  Ready();

  var storageRef = firebase.storage().ref('Images/'+Date.now().toString()+".png");
  var task = await storageRef.putString(picture?.replace('data:image/png;base64,', ''), 'base64', {
      contentType: 'image/jpeg'
  })
  const picture_url = await task.ref.getDownloadURL()

  firebase.database().ref('Trang_thai_can/').push({
   Anh:picture_url,
   Bien_so_xe:bsx,
   Ten_lai_xe:tenlx,
   GPLX:gplx,
   Ngay_can: ngay,
   Gio_vao:gio,
   Trong_luong_hang_hoa:trong_luong_hh, 
   Trong_luong_ban_than:tlbt,
   Trong_luong_khi_can:tlkc,
   Xe_vuot_tai_trong:vtt,
   Phan_tram_vtt:phan_tram

  })

  firebase.database().ref('Pictures/').set({
    Link:picture_url,
  })
  firebase.database().ref('PDF/').set({
    Anh:picture_url,
    Bien_so_xe:bsx,
    Ten_lai_xe:tenlx,
    GPLX:gplx,
    Ngay_can: ngay,
    Gio_vao:gio,
    Trong_luong_hang_hoa:trong_luong_hh, 
    Trong_luong_ban_than:tlbt,
    Trong_luong_khi_can:tlkc,
    Xe_vuot_tai_trong:vtt,
    Phan_tram_vtt:phan_tram
  })
 
}

