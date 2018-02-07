window.onload = function () {
    //obtain album name list object which is the father element for Albums, left side
    let oAlbumList = document.getElementsByClassName('album-list')[0];

    //obtain album name object, left side
    let aAlbum = document.querySelectorAll(".album");

    //obtain del button for Album list, left side
    let oBtnAlbumList = document.querySelectorAll(".album>button");

    //obtain album link object
    let aLinkAlbum = document.querySelectorAll('.album-link');

    //obtain create new Album button, right side top
    let oBtnCreate = document.querySelector('.button-grp>form>input[type=button]');

    //obtain del photo button, right side, on photo right top
    let oBtnDelPh = document.querySelectorAll('.photo>button');

    //obtain photo object, right side
    let aPhoto = document.querySelectorAll('.photo');

    //obtain photo list, container of photos, right side main part
    let oPhotoList = document.querySelector('.photo-list');

    //obtain input file button.
    let fileInput = document.querySelector('#add-file');

    //photo Array
    let arrPh = [];


    //iterate first cycle for adding the arr for those album alr exist.
    for(let i=0; i<aAlbum.length; i++){
        var arr = [];
        arrPh.push(arr);
        // alert(arrPh.length);
    }


    //function to add proper border to Album list, left side
    function listBroder(){
        aAlbum = document.querySelectorAll(".album");
        for(let i=0; i<aAlbum.length; i++){
            aAlbum[i].style.borderTop= '#ccc solid 1px';
            if(i === 0){
                aAlbum[i].style.borderTop = '';
            }
        }
    }
    listBroder(); // adding proper border function called

    //function of del the album from album list left side.
    function del() {
        // re-obtain all the del button left side
        oBtnAlbumList = document.querySelectorAll(".album>button");
        // re-obtain all the albums left side
        aAlbum = document.querySelectorAll(".album");
        // add onclick event to del buttons
        for (let i = 0; i < oBtnAlbumList.length; i++) {
            oBtnAlbumList[i].onclick = function () {
                oAlbumList.removeChild(aAlbum[i]);
                arrPh.splice(i,1);
                // alert(arrPh.length);
            };
        }
    }
    del(); // del function called

    //creating button function binded
    oBtnCreate.onclick = function (){
        let name = prompt('Name of Album');
        if(name!=null) {
            var arr = [];
            arrPh.push(arr);
            let str = '<li class="album"><a class=\'album-link\' href="">' + name + '</a><button>X</button></li>';
            oAlbumList.insertAdjacentHTML('beforeEnd', str);
            del(); // re-call del function to add event on the buttons, due to new element added
            listBroder(); // re-call adding border function to the album list, due to new element added
        }
    };


    // add del photo function to all the del button at photo
    function addEvenDelPh(){
        oBtnDelPh = document.querySelectorAll('.photo>button');
        aPhoto = document.querySelectorAll('.photo');
        oPhotoList = document.querySelector('.photo-list');
        for(let i=0; i<aPhoto.length; i++){
            oBtnDelPh[i].onclick = function() {
                oPhotoList.removeChild(aPhoto[i]);
            }
        }
    }
    addEvenDelPh(); //del photo function called

    fileInput.addEventListener('change', function(){
       const file = fileInput.files[0];
       const fileReader = new FileReader();
       fileReader.onload = function(){
           const img = new Image();
           fileReader.result;
           img.src = fileReader.result;
           let elePh = '<div class="photo"><button>X</button>'+img.outerHTML+'</div>';
           oPhotoList.insertAdjacentHTML('beforeEnd', elePh);
           addEvenDelPh();
       };
       fileReader.readAsDataURL(file);
    });

};