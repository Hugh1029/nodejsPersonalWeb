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
    
    
    //飞行动画
    setInterval(function(){
            $('.my-picture').animate({
            left: '100%',
            top: '60%',
            width: '80px',
            opacity: '0.6'
        },6000,function(){
                $('.my-picture').css({'left':'-20px','top':'0','width':'20px'});
            });
    },10000);
    
    //人物动画1
    setInterval(function(){
        $('.my-picture-person').animate({
            opacity:0.6
        },6000);
        $('.my-picture-person').animate({
            top:'0%',
            opacity:0,
            width:'20px'
        },8000,function(){
            $('.my-picture-person').css('top','43%');
        });
    },40000);
    
    //人物动画2
     setInterval(function(){
         $('.my-picture-person1').animate({
            opacity:0.5
        },300);
        $('.my-picture-person1').animate({
            top:'20%',
            left: '20%',
            opacity:0,
            width:'10px'
        },8000,function(){
            $('.my-picture-person1').css({'top':'54%','left':'37%','width':'30px'});
        });
    },30000);
    
    
     //时间控制黑夜和白天
    var date = new Date();
    var hours = date.getHours();
    if((hours >= 16 && hours<19) || (hours >= 6 && hours<8)){
        $('.night').css('opacity','0.2');
        $('.star').css('opacity','0.1');
        $('.star3').css('opacity','0.1');
    }else if((hours >= 19 && hours < 20) || (hours > 4 && hours <= 5)){
        $('.night').css('opacity','0.5');
        $('.star').css('opacity','0.5');
        $('.star3').css('opacity','0.4');
    }else if(hours > 20 || (hours > 0 && hours <= 4)){
        $('.night').css('opacity','0.7');
        $('.star').css('opacity','0.9');
        $('.star3').css('opacity','0.8');
    }
    
     //剑动画
    setInterval(function(){
        $('.jian').animate({
        left: '-20%',
        top: '120%'
        },2000,function(){
            $('.jian').attr('src','http://answering-1253124701.cossh.myqcloud.com/person/images/jian2.png');
        });

         $('.jian').animate({
            left: '50%',
            top: '-20%'
        },1500,function(){
            $('.jian').attr('src','http://answering-1253124701.cossh.myqcloud.com/person/images/jian3.png');
        });

        $('.jian').animate({
            left: '120%',
            top: '140%'
        },1500,function(){
            $('.jian').attr('src','http://answering-1253124701.cossh.myqcloud.com/person/images/jian1.png').css({'left':'120%','top':'-20%'});
        });
    },8000);
   
    
    
    
});


//下一张动画
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

//上一张动画
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