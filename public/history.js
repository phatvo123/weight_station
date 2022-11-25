
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
var dataset=[ ];
function SelectAllData(){
    firebase.database().ref('Trang_thai_can/').once('value',
    function(AllRecords){
        AllRecords.forEach(
            function(CurrentRecord){
                var bx = CurrentRecord.val().Bien_so_xe;
                var lx = CurrentRecord.val().Ten_lai_xe;
                var gplx = CurrentRecord.val().Ten_lai_xe;
                var gv = CurrentRecord.val().Gio_vao;
                var nc = CurrentRecord.val().Ngay_can;
                var tlbt = CurrentRecord.val().Trong_luong_ban_than;
                var tlh = CurrentRecord.val().Trong_luong_hang_hoa;
                var tlc = CurrentRecord.val().Trong_luong_khi_can;
                var vtt = CurrentRecord.val().Xe_vuot_tai_trong;
                var phan_tram = CurrentRecord.val().Phan_tram_vtt;

                AddItemsToTable(bx,lx,gv,nc,tlbt,tlh,tlc,vtt,phan_tram,gplx);
            }
        );
        console.log(dataset);
        jQuery(document).ready(function($){
            $('#myTable').DataTable({
                data: dataset,
                columns: [
                    { title: 'Biển số' },
                    { title: 'Lái xe' },
                    { title: 'GPLX' },
                    { title: 'Giờ vào' },
                    { title: 'Ngày cân' },
                    { title: 'Trọng lượng bản thân' },
                    { title: 'Trọng lượng hàng' },
                    { title: 'Trọng lượng khi cân' },
                    { title: 'Vượt tải trọng' },
                    { title: 'Phần trăm VTT' },
                ],
            });
        });
            });
}


window.onload = SelectAllData;
function AddItemsToTable(bx,lx,gv,nc,tlbt,tlh,tlc,vtt,phan_tram,gplx){
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');
    var td10 = document.createElement('td');
  

    td1.innerHTML = bx;
    td2.innerHTML = lx;
    td3.innerHTML = gplx;
    td4.innerHTML = gv;
    td5.innerHTML = nc;
    td6.innerHTML = tlbt ;
    td7.innerHTML = tlh ;
    td8.innerHTML = tlc;
    td9.innerHTML = vtt ;
    td10.innerHTML = phan_tram ;
    dataset.push([
        bx,
        lx,
        gplx,
        gv,
        nc,
        tlbt,
        tlh,
        tlc,
        vtt,
        phan_tram
    ]);
    
}
