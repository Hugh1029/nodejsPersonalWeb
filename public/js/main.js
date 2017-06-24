$(function(){
    var myPhotoId;
    $('.my-photo').on('click',function(){
        var photo = $(this).attr('id');
        if(photo == 'photo1'){
            myPhotoId = 1;
        }else if(photo == 'photo2'){
            myPhotoId = 2;
        }else if(photo == 'photo3'){
            myPhotoId = 3;
        }else if(photo == 'photo4'){
            myPhotoId = 4;
        }else if(photo == 'photo5'){
            myPhotoId = 5;
        }else if(photo == 'photo6'){
            myPhotoId = 6;
        }else if(photo == 'photo7'){
            myPhotoId = 7;
        }else if(photo == 'photo8'){
            myPhotoId = 8;
        }
        displayPhoto(myPhotoId);
    });
    
    
    $('.image-close').on('click',function(event){
        event.preventDefault();
        $('.main-shade').css('display','none');
        $('.img-box').css('display','none');
    });
    
    $('.image-prev').on('click',function(event){
        event.preventDefault();
        myPhotoId = (myPhotoId - 1) % 8;
        animatePhotoRight(myPhotoId);
    });
    
    $('.image-next').on('click',function(event){
        event.preventDefault();
        myPhotoId = (myPhotoId + 1) % 8;
        animatePhotoLeft(myPhotoId);
    });
    
    
});


function animatePhotoLeft(myPhotoId){
    $('.img-content').animate({
        left: '-800px'
    },function(){
         displayPhoto(myPhotoId);
         $('.img-content').css('left','1920px');
    });
   
    $('.img-content').animate({
        left: '30%'
    });
}

function animatePhotoRight(myPhotoId){
    $('.img-content').animate({
        left: '1920px'
    },function(){
        displayPhoto(myPhotoId);
        $('.img-content').css('left','-800px');
    });
    $('.img-content').animate({
        left: '30%'
    });
}


function displayPhoto(photoId){
        var imageAddress;
        switch(photoId){
            case 1:
                imageAddress = "http://answering-1253124701.cossh.myqcloud.com/person/images/photo1.jpg";
                break;
            case 2:
                imageAddress = "http://answering-1253124701.cossh.myqcloud.com/person/images/photo2.jpg";
                break;
            case 3:
                imageAddress = "http://answering-1253124701.cossh.myqcloud.com/person/images/photo3.jpg";
                break;
            case 4:
                imageAddress = "http://answering-1253124701.cossh.myqcloud.com/person/images/photo4.jpg";
                break;
            case 5:
                imageAddress = "http://answering-1253124701.cossh.myqcloud.com/person/images/photo5.jpg";
                break;
            case 6:
                imageAddress = "http://answering-1253124701.cossh.myqcloud.com/person/images/photo6.jpg";
                break;
            case 7:
                imageAddress = "http://answering-1253124701.cossh.myqcloud.com/person/images/photo7.jpg";
                break;
            case 8:
                imageAddress = "http://answering-1253124701.cossh.myqcloud.com/person/images/photo8.jpg";
                break;
        }
        
        $('.main-shade').css('display','block');
        $('.img-box').css('display','block');
        $('.image-show').attr('src',imageAddress);
    }