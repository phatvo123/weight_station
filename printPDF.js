
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
  firebase.initializeApp(firebaseConfig);
  function Ready(){
    bsx = document.getElementById('plate_number').value;
  }


  document.getElementById("select").onclick = function(){
    Ready();
    firebase.database().ref('Thong_tin_xe/'+bsx).on('value',function(snapshot){
        document.getElementById('bsx').value=snapshot.val().Bien_so_xe;
        document.getElementById('lx').value=snapshot.val().Loai_xe;
        document.getElementById('chu_xe').value=snapshot.val().Ten_chu_xe;
        document.getElementById('so_xe').value=snapshot.val().So_truc_xe;
        document.getElementById('tlbt').value=snapshot.val().Trong_luong_ban_than;
        document.getElementById('tlhh').value=snapshot.val().Trong_luong_hang_hoa;

    });
    firebase.database().ref('PDF/').on('value',function(snapshot){
      document.getElementById('ten').value=snapshot.val().Ten_lai_xe;
      document.getElementById('gplx').value=snapshot.val().GPLX;
      document.getElementById('tg').value=snapshot.val().Gio_vao;
      document.getElementById('date').value=snapshot.val().Ngay_can;
      document.getElementById('tlbt').value=snapshot.val().Trong_luong_ban_than;
      document.getElementById('ttlx').value=snapshot.val().Trong_luong_khi_can;
  
      document.getElementById('vtt').value=snapshot.val().Xe_vuot_tai_trong;
      document.getElementById('kq').value=snapshot.val().Phan_tram_vtt;
      document.getElementById('myimg').src = snapshot.val().Anh;
      console.log(snapshot.val().Anh);
      
  });

    

}
  