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
    let oPhotoList = document.querySelectorAll('.photo-list');

    //obtain right panel
    let wrapper = document.querySelector('.wrapper');

    //obtain input file button.
    let fileInput = document.querySelector('#add-file');

    //current photolist status
    let currentPhListStatus = null;

    //Album Array
    let arrPh = [];
    let arrAlb = [];



    //function to add proper border to Album list, left side
    function listBorder(){
        aAlbum = document.querySelectorAll(".album");
        for(let i=0; i<aAlbum.length; i++){
            aAlbum[i].style.borderTop= '#ccc solid 1px';
            if(i === 0){
                aAlbum[i].style.borderTop = '';
            }
        }
    }
    listBorder(); // adding proper border function called

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
            };
        }
    }
    del(); // del function called

    //creating button function binded
    oBtnCreate.onclick = function (){
        let name = prompt('Name of Album');
        if(name!=null) {
            let albumListOp = '<li class="album"> <a class="album-link" href="">'+name+'</a><button>X</button></li>';
            let phListDiv = '<div class="photo-list"><div class="photo"><button>X</button><img src="bird.jpeg" alt=""></div></div>';

            oAlbumList.insertAdjacentHTML('beforeEnd', albumListOp);
            wrapper.insertAdjacentHTML('beforeEnd', phListDiv);
            del(); // re-call del function to add event on the buttons, due to new element added
            listBorder(); // re-call adding border function to the album list, due to new element added
            addDisplay();
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

    //upload new photo
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

    // add display function to album list options
    function addDisplay(){
        aLinkAlbum = document.querySelectorAll('.album-link');
        oPhotoList = document.querySelectorAll('.photo-list');
        aLinkAlbum.forEach((link, index)=>{
            link.index = index;
            link.addEventListener('click', function(event){
                const index =  event.target.index;
                if(currentPhListStatus)
                currentPhListStatus.className = 'photo-list';
                currentPhListStatus = oPhotoList[index];
                currentPhListStatus.className = 'photo-list show';
                alert(index);
            });
        });
    }
    addDisplay();

};