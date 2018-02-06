window.onload = function () {
    const oAlbumList = document.querySelector('.album-list');
    const aAlbum = document.querySelectorAll(".album");
    const oBtnAlbumList = document.querySelectorAll(".album>button");

    for(let i=0; i<aAlbum.length; i++){
        aAlbum[i].style.borderBottom= '#ccc solid 1px';
        // console.log(aAlbum[i].style.border);
        if(i == aAlbum.length-1){
            aAlbum[i].style.borderBottom = '';
        }
    }

    for(let i=0; i<oBtnAlbumList.length; i++){
        oBtnAlbumList[i].onclick = function(){
            oAlbumList.removeChild(aAlbum[i]);
        }
    }
};