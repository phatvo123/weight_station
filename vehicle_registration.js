
const webCamElement = document.getElementById('webcam_real');
        const canvasElement = document.getElementById('canvas');
        const webcam= new Webcam(webCamElement,"user",canvasElement);
        webcam.start();
        var picture ;
    function takeAPicture(){
            picture = webcam.snap();
            document.querySelector('a').src = picture;

           
}   

            

        //     var number = document.getElementById('input_car').value
        //     var number_1 = document.getElementById('plate_number').value
        //    var a = number_1 - number;
        //    // alert(a)
        //    document.getElementById('result').value = a;
        


        var ImgName, ImgUrl;
        var files = [];
        var reader 


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

        var chuxe, bsx, tlx, stx,sl,sk,loaixe,tlbtx,sln,cdx,namsx,klx,sm,tsnx;
    function Ready(){
        chuxe = document.getElementById('input_car').value;
        bsx = document.getElementById('plate_number').value;
        tlx = document.getElementById('name_car').value;
        stx = document.getElementById('trucxe').value;
        sl = document.getElementById('soloai').value;
        sk = document.getElementById('sokhung').value;
        loaixe = document.getElementById('typecar').value;
        tlbtx = document.getElementById('tlbt').value;
        sln = document.getElementById('person').value;
        cdx = document.getElementById('cdcs').value;
        namsx = document.getElementById('year').value;
        klx = document.getElementById('weight_before').value;
        sm = document.getElementById('somay').value;
        tenx = document.getElementById('namecar').value;
    }
        var plate_number = document.getElementById('plate_number');
        var dbRef = firebase.database().ref().child('hihi');

        dbRef.on('value', snap => plate_number.innerText = snap.val());

    //------------------- insert
        document.getElementsByClassName('insert').onclick = async () => {
            Ready();
           

            
            var storageRef = firebase.storage().ref('Images/'+Date.now().toString()+".png");
            var task = await storageRef.putString(picture?.replace('data:image/png;base64,', ''), 'base64', {
                contentType: 'image/jpeg'
            })
            const picture_url = await task.ref.getDownloadURL()

            firebase.database().ref('Thong_tin_xe/').push({
             Anh:picture_url,
              Chu_xe: chuxe,
              Ten_lai_xe:tlx,
              So_truc_xe:stx,
              So_loai: sl,
              SO_khung :sk,
              Loai_xe:loaixe, 
              Trong_luong_ban_than:tlbtx,
              So_luong_nguoi:sln,
              Chieu_dai_xe:cdx,
              Nam_san_xuat: namsx,
              Khoi_luong_truoc_can:klx,
              SO_may:sm,
              Nhan_hieu:tenx
            })
           
        }
            
         
         
        
       
        

        
 
