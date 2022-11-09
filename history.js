


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
var dataset=[ ];
// GET ALL Data
function SelectAllData(){
    firebase.database().ref('Trang_thai_can/').once('value',
    function(AllRecords){
        AllRecords.forEach(
            function(CurrentRecord){
                var bx = CurrentRecord.val().Bien_so_xe;
                var lx = CurrentRecord.val().Ten_lai_xe;
                var tlbt = CurrentRecord.val().Trong_luong_ban_than;
                var tlh = CurrentRecord.val().Trong_luong_hang;
                var tlc = CurrentRecord.val().Trong_luong_khi_can;
                var vtt = CurrentRecord.val().Xe_vuot_tai_trong;

                AddItemsToTable(bx,lx,tlbt,tlh,tlc,vtt);

            }
        );
        console.log(dataset);
        jQuery(document).ready(function($){
            $('#myTable').DataTable({
                data: dataset,
                columns: [
                    { title: 'Biển số' },
                    { title: 'Lái xe' },
                    { title: 'Trọng lượng bản thân' },
                    { title: 'Trọng lượng hàng' },
                    { title: 'Trọng lượng khi cân' },
                    { title: 'Vượt tải trọng' },
                ],
            });
        });
            });
}


window.onload = SelectAllData;
// FILLING THE TABLE 
// var stdNo = 0;
function AddItemsToTable(bx,lx,tlbt,tlh,tlc,vtt){
    // var tbody = document.getElementById('tbody1');
    // var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
  

    td1.innerHTML = bx;
    td2.innerHTML = lx;
    td3.innerHTML = tlbt;
    td4.innerHTML = tlh;
    td5.innerHTML = tlc ;
    td6.innerHTML = vtt ;
    dataset.push([
        bx,
        lx,
        tlbt,
        tlh,
        tlc,
        vtt
    ]);
    
}
