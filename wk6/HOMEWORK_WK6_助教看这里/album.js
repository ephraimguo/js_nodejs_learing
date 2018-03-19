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
    let aNavUl = document.querySelectorAll('nav>ul');
    let aPageBtn = document.querySelector('nav>ul>li');

    //Album Array
    let arrPh = [];
    let arrAlb = [];


    aPhotoList.forEach(phList=>{
        arrAlb.push(phList);                 // add the photoList to arrPlb
    });


    function addPagination(photoListIndex){
        oNav = document.querySelector('nav');
        oNav.innerHTML = '';
        aPhotoList = document.querySelectorAll('.photo-list');
        aPhotoList.forEach(phL=>{
            aPhoto = phL.querySelectorAll('.photo');
            let listHtml = '';
            let ulHtml = '';
            for(let i = 1; i<=(aPhoto.length-1)/5+1; i++){
                listHtml += '<li><a>'+i+'</a></li>';
            }
            // ulHtml = '<ul><li><a>First</a></li>'+listHtml+'<li><a>Last</a></li></ul>';
            ulHtml = '<ul>'+listHtml+'</ul>';
            oNav.insertAdjacentHTML('beforeEnd', ulHtml);

        });
        aNavUl = document.querySelectorAll('nav>ul');
        if(aNavUl[photoListIndex]!=undefined){
            aNavUl[photoListIndex].className = 'show';
        }
        else{
            console.log(aNavUl);
        }
    }
    addPagination(0);



    // add display function to album list options
    function addDisplay(){
        aLinkAlbum = document.querySelectorAll('.album-link'); // re-obtain a tag in list from left side
        aPhotoList = document.querySelectorAll('.photo-list'); // re-obtain photoList for display right side
        aAlbum = document.querySelectorAll('.album');
        aNavUl = document.querySelectorAll('nav>ul');
        aLinkAlbum.forEach((link, index)=>{                    // adding event to add 'show' class name to display photoList by forEach
            link.index = index;
            link.onclick =  function(event){
                const index =  event.target.index;
                aPhotoList.forEach(phL=>{phL.className='photo-list';});
                aAlbum.forEach(al=>{al.className = 'album'});
                aNavUl.forEach(ul=>{ul.className = ''});
                aPhotoList[index].className = 'photo-list show';
                aAlbum[index].className = 'album show';
                addPagination(index);
                pageBtnFunc();

            };
        });
    }
    addDisplay();// adding display the photo panel function called

    //想不出来怎么写了。。。。
    //page directing function for page btn
    function pageBtnFunc(){
        let sNavUl = document.querySelectorAll('.display>nav>ul[class=show]')[0];
        let aPageBtn = sNavUl.querySelectorAll('li>a');
        let sPhotoList = document.querySelector('.wrapper>[class*=show]');
        let sPhoto = sPhotoList.querySelectorAll('.photo');
        let photoArr = [];
        sPhoto.forEach(sph=>{
            photoArr.push(sph);
        });
        console.log(typeof photoArr[1]);
        sPhotoList.innerHTML = '';
        for(let i=0; i<5; i++){
            if(photoArr[i]){
                sPhotoList.appendChild(photoArr[i]);
            }
            else{
                console.log('undefined');
            }
        }
        // aPageBtn.forEach(pBtn=>{
        //     pBtn.onclick = function(){
        //         alert(pBtn.index);
        //         let phHtml2 = '';
        //         for(let i=(pBtn.index)*5; i<(pBtn.index+1)*5; i++){
        //             sPhoto[i].style.display = 'inline-block';
        //         }
        //         // console.log(phHtml2);
        //         sPhotoList.innerHTML = phHtml2;
        //     };
        // });

    }
    pageBtnFunc();


    //function of del the album from album list both left and right
    function delAlbum() {
        oBtnAlbumList = document.querySelectorAll(".album>button");     // re-obtain all the del button left side
        aAlbum = document.querySelectorAll(".album");                   // re-obtain all the albums left side
        aPhotoList = document.querySelectorAll('.photo-list');          // re-obtain photoList for display right side
        oWrapper = document.querySelector('.wrapper');
        oNav = document.querySelector('nav');
        aNavUl = oNav.querySelectorAll('ul');
        oBtnAlbumList.forEach((btnAl,i)=>{
            btnAl.onclick = function (event) {
                const index = event.target.index;
                btnAl.index = i;
                oAlbumList.removeChild(aAlbum[i]);
                oWrapper.removeChild(aPhotoList[i]);
                arrAlb.splice(i, 1);
                oNav.removeChild(aNavUl[i]);
                pageBtnFunc();
            }
        });
    }
    delAlbum(); // delAlbum function called

    //creating new album button
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
        aNavUl = document.querySelectorAll('nav>ul');
        addDisplay();
        addEvenDelPh();
        if(aNavUl.length!=0){addPagination(aNavUl.length);}
        aPhotoList.forEach(phL=>{phL.className='photo-list';});
        aAlbum.forEach(al=>{al.className = 'album'});
        // aNavUl.forEach(ul=>{ul.className = ''});
        aPhotoList[aNavUl.length-1].className = 'photo-list show';
        aAlbum[aNavUl.length-1].className = 'album show';
        pageBtnFunc();
    };


    //upload new photo
    fileInput.addEventListener('change', function(){
        let file = fileInput.files[0];
        fileInput.value = '';
        let fileReader = new FileReader();
        fileReader.onload = function(){
            let img = new Image();
            // fileReader.result;
            img.src = fileReader.result;
            let elePh = '<div class="photo"><button>X</button>'+img.outerHTML+'</div>';
            aPhotoList = document.querySelectorAll('.photo-list');
            aPhotoList.forEach(phList=>{
                if(phList.className === 'photo-list show'){
                    phList.insertAdjacentHTML('beforeEnd', elePh);
                    const btn = phList.querySelectorAll('.photo>button');
                    const latestPic = phList.querySelector('.photo:last-child');
                    btn[btn.length-1].onclick = function(){
                        phList.removeChild(latestPic);
                    };
                    oNav.querySelectorAll('ul')[phList.index].className = 'show';
                    addPagination(phList.index);
                }
            });
        };
        fileReader.readAsDataURL(file);
        addEvenDelPh();
        pageBtnFunc();
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
                    addPagination(phList.index);
                }
            });
        });

    }
    addEvenDelPh();
};





