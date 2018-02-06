window.onload = function () {
    let oAlbumList = document.getElementsByClassName('album-list')[0];
    let aAlbum = document.querySelectorAll(".album");
    let oBtnAlbumList = document.querySelectorAll(".album>button");
    let oBtnCreate = document.querySelector('.button-grp>form>input[type=button]');
    let oBtnDelPh = document.querySelectorAll('.photo>button');
    let aPhoto = document.querySelectorAll('.photo');
    let oPhotoList = document.querySelector('.photo-list');

    function listBroder(){
        aAlbum = document.querySelectorAll(".album");
        for(let i=0; i<aAlbum.length; i++){
            aAlbum[i].style.borderTop= '#ccc solid 1px';
            if(i == 0){
                aAlbum[i].style.borderTop = '';
            }
        }
    }
    listBroder();

    function del() {
        oBtnAlbumList = document.querySelectorAll(".album>button");
        aAlbum = document.querySelectorAll(".album");

        for (let i = 0; i < oBtnAlbumList.length; i++) {
            oBtnAlbumList[i].onclick = function () {
                oAlbumList.removeChild(aAlbum[i]);
            };
        }
    }
    del();

    oBtnCreate.onclick = function (){
        let name = prompt('Name of Album');
        let str = '<li class="album"><a class=\'album-link\' href="">'+name+'</a><button>X</button></li>';
        oAlbumList.insertAdjacentHTML('beforeEnd', str);
        del();
        listBroder();
    };


    function addEvenDelPh(){
        oBtnDelPh = document.querySelectorAll('.photo>button');
        aPhoto = document.querySelectorAll('.photo');
        for(let i=0; i<aPhoto.length; i++){
            oBtnDelPh[i].onclick = function () {
                oPhotoList.removeChild(aPhoto[i]);
            }
        }
    }
    addEvenDelPh();

};