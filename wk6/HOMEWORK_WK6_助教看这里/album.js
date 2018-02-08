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

    //obtain wrapper object performing as container of photoList
    let oWrapper = document.querySelector('.wrapper');

    //obtain del photo button, right side, on photo right top
    let aBtnDelPh = document.querySelectorAll('.photo>button');

    //obtain photos

    //obtain photo list, container of photos, right side main part
    let aPhotoList = document.querySelectorAll('.photo-list');

    //obtain photo object, right side
    // let aPhoto = document.querySelectorAll('.photo');

    //obtain right panel
    let wrapper = document.querySelector('.wrapper');

    //obtain input file button.
    let fileInput = document.querySelector('#add-file');

    let oNav = document.querySelector('nav');
    let aNavUl = document.querySelector('nav>ul');
    let aPageBtn = document.querySelector('nav>ul>li');

    //Album Array
    let arrPh = [];
    let arrAlb = [];


    aPhotoList.forEach(phList=>{
        arrAlb.push(phList);                 // add the photoList to arrPlb
    });


    function addPagination(){
        oNav = document.querySelector('nav');
        aPhotoList = document.querySelectorAll('.photo-list');
        aPhotoList.forEach((phL,index)=>{
            phL.index = index;
            let length = phL.children.length;
            let pageNav;
            let html = '';
            for(let i=1; i<=length/10+1; i++){
                html += '<li><a>'+i+'</a></li>';
            }
            pageNav = '<ul><li><a>First</a></li>'+html+'<li><a>Last</a></li></ul>';
            if(oNav[index]){
                oNav[index].innerHTML = pageNav;

            }else{
                oNav.insertAdjacentHTML('beforeEnd', pageNav);

            }
        });

    }
    addPagination();
    oNav.querySelectorAll('ul')[0].className = 'show';



    // add display function to album list options
    function addDisplay(){
        aLinkAlbum = document.querySelectorAll('.album-link'); // re-obtain a tag in list from left side
        aPhotoList = document.querySelectorAll('.photo-list'); // re-obtain photoList for display right side
        aAlbum = document.querySelectorAll('.album');
        aNavUl = document.querySelectorAll('nav>ul');
        aLinkAlbum.forEach((link, index)=>{                    // adding evnet to add 'show' class name to display photoList by forEach
            link.index = index;
            link.onclick =  function(event){
                const index =  event.target.index;
                aPhotoList.forEach(phL=>{phL.className='photo-list';});
                aAlbum.forEach(al=>{al.className = 'album'});
                aNavUl.forEach(ul=>{ul.className = ''});
                aPhotoList[index].className = 'photo-list show';
                aAlbum[index].className = 'album show';
                aNavUl[index].className = 'show';
                // alert(arrAlb[index].innerHTML);
            };
            // aPhotoList.forEach(phL=>{
            //     let length = phL.children.length;
            //     let pageNav;
            //     let html;
            // });

        });
    }
    addDisplay();// adding display the photo panel function called


    //function of del the album from album list both left and right
    function delAlbum() {
        oBtnAlbumList = document.querySelectorAll(".album>button");     // re-obtain all the del button left side
        aAlbum = document.querySelectorAll(".album");                   // re-obtain all the albums left side
        aPhotoList = document.querySelectorAll('.photo-list');          // re-obtain photoList for display right side
        oWrapper = document.querySelector('.wrapper');
        for (let i = 0; i < oBtnAlbumList.length; i++) {                 // add onclick event to del buttons
            oBtnAlbumList[i].onclick = function () {
                oAlbumList.removeChild(aAlbum[i]);
                oWrapper.removeChild(aPhotoList[i]);
                arrAlb.splice(i,1);
                // alert(arrAlb.length);
            };
        }
    }
    delAlbum(); // delAlbum function called

    //creating button function binded
    oBtnCreate.onclick = function (){
        let name = prompt('Name of Album');
        aPhotoList = document.querySelectorAll('.photo-list');
        if(name!=null && name!='') {
            let albumListOp = '<li class="album"> <a class="album-link">'+name+'</a><button>X</button></li>';
            let phListDiv = '<div class="photo-list"></div>';
            oAlbumList.insertAdjacentHTML('beforeEnd', albumListOp);
            wrapper.insertAdjacentHTML('beforeEnd', phListDiv);
            delAlbum(); // re-call del function to add event on the buttons, due to new element added
        }

        addEvenDelPh();
        arrAlb.push(wrapper.lastChild);
        arrAlb.forEach(al=> {
            console.log(al);
        });
        addDisplay();
    };


    //upload new photo
    fileInput.addEventListener('change', function(){
        let file = fileInput.files[0];
        fileInput.value = '';
        let fileReader = new FileReader();
        fileReader.onload = function(){
            let img = new Image();
            fileReader.result;
            img.src = fileReader.result;
            let elePh = '<div class="photo"><button>X</button>'+img.outerHTML+'</div>';
            aPhotoList = document.querySelectorAll('.photo-list');
            aPhotoList.forEach(phList=>{
                if(phList.className === 'photo-list show'){
                    phList.insertAdjacentHTML('beforeEnd', elePh);
                    const btn = phList.querySelectorAll('.photo>button');
                    const latestPic = phList.querySelector('.photo:last-child');
                    addPagination();
                    btn[btn.length-1].onclick = function(){
                        phList.removeChild(latestPic);
                    };
                    oNav.querySelectorAll('ul')[phList.index].className = 'show';
                }
            });
            // addPagination();
        };
        fileReader.readAsDataURL(file);
    });


    // add del photo function to all the del button at photo
    function addEvenDelPh(){
        aPhotoList = document.querySelectorAll('.photo-list');
        aPhotoList.forEach((phList, index)=>{
            phList.index = index;
            const delPhBtn = phList.querySelectorAll('.photo>button');
            const aPhotoPhList = phList.querySelectorAll('.photo');
            delPhBtn.forEach((btn, i)=>{
                btn.index = i;
                btn.onclick = function(){
                    phList.removeChild(aPhotoPhList[btn.index]);
                }
            });
        });
    }
    addEvenDelPh();
};





