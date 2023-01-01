
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
      
        firebase.initializeApp(firebaseConfig);

    var chuxe, bsx, tlx, stx,sl,sk,loaixe,tlbtx,sln,cdx,namsx,klx,sm,tsnx;;
        function Ready(){
            tgsd = document.getElementById('tgsd').value;
            bsx = document.getElementById('plate_number').value;
            tcx = document.getElementById('name_owner').value;
            stx = document.getElementById('trucxe').value;
            sl = document.getElementById('soloai').value;
            sk = document.getElementById('sokhung').value;
            loaixe = document.getElementById('typecar').value;
            tlbtx = document.getElementById('tlbt').value;
            sln = document.getElementById('person').value;
            cdx = document.getElementById('cdcs').value;
            namsx = document.getElementById('year').value;
            trong_luong_hh = document.getElementById('trong_luong_hh').value;
            sm = document.getElementById('somay').value;
            tenx = document.getElementById('namecar').value;
    
          }
          var plate_number = document.getElementById('plate_number');
          var dbRef = firebase.database().ref().child('bienso');
  
          dbRef.on('value', snap => plate_number.innerText = snap.val());
          //------------------- insert
          document.getElementById('insert').onclick = async () => {
            Ready();

            var storageRef = firebase.storage().ref('Images/'+Date.now().toString()+".png");
            var task = await storageRef.putString(picture?.replace('data:image/png;base64,', ''), 'base64', {
                contentType: 'image/jpeg'
            })
            const picture_url = await task.ref.getDownloadURL()
            firebase.database().ref('Thong_tin_xe/'+sk).on('value',function(snapshot){

            });

            firebase.database().ref('Thong_tin_xe/'+sk).set({
             Anh:picture_url,
             Bien_so_xe:bsx,
            Niên_hạn : tgsd,
              Ten_chu_xe:tcx,
              So_truc_xe:stx,
              So_loai: sl,
              SO_khung :sk,
              Loai_xe:loaixe, 
              Trong_luong_ban_than:tlbtx,
              So_luong_nguoi:sln,
              Chieu_dai_xe:cdx,
              Nam_san_xuat: namsx,
              Trong_luong_hang_hoa:trong_luong_hh,
              So_may:sm,
              Nhan_hieu:tenx
            })
           
        }
            
