<template>
    <div class="home-view">
        <div class="main">
            <div class="house"></div>
            <div class="pig"></div>
            <a href="https://www.pushin-ranch.com/view.aspx"><div class="horse"></div></a>
            <a href="https://www.pushin-ranch.com/view.aspx"><div class="rabbit"></div></a>
            <a href="https://www.pushin-ranch.com/view.aspx"><div class="cow"></div></a>
            <a href="https://www.pushin-ranch.com/view.aspx"><div class="sheep"></div></a>
            <div class="main-text"></div>
            <div class="btr"></div>
            <a href="https://www.facebook.com/pushinranch/"><div class="btp"></div></a>
            <a href="https://www.facebook.com/pushinranch/"><div class="pu"></div></a>
            <a href="https://vidol.tv/"><div class="vidol"></div></a>
        </div>
        <div class="footer">
            <div class="footer-text">
                <a>©2019 Vidol All Rights Reserved 版權所有 盜用必究</a>
            </div>
            <a href="https://www.facebook.com/pushinranch/"><div class="mpu"></div></a>
            <div class="fb-share"></div>
            <div class="ln-share"></div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>


<style>




.main{
     height:65vw;
     background-image:url("./WebImage/main.jpg");
     background-size: cover;
     width: 100% ;
     background-repeat: no-repeat;
     position:relative;

}
.pu{
    background-image:url("./WebImage/PUlogo.png");
    width: 10vw;
    height: 4vw;
    top:2vw;
    left:25vw;
    background-repeat: no-repeat;
    background-size: 100% ;
    position: absolute;
}
.vidol{
    background-image:url("./WebImage/LOGO.png");
    width: 7vw;
    height: 3.7vw;
    top:2vw;
    left:16.7vw;
    background-repeat: no-repeat;
    background-size: 100% ;
    position: absolute;
}

.house{
    width: 34vw;
    height: 40vw;
    background-image:url("./WebImage/風車.gif");
    background-repeat: no-repeat;
    background-size: 100% ;
    position: absolute;
}
.pig{
    margin: 0;
    height:18vw;
    width:11vw;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image:url("./WebImage/pigP.gif");
    top : 36vw;
    position: absolute;

    animation:pigrun 8s;
	-moz-animation:pigrun 8s; /* Firefox */
	-webkit-animation:pigrun 8s; /* Safari and Chrome */
	-o-animation:pigrun 8s; /* Opera */
	animation-iteration-count: infinite;
}
@keyframes pigrun
{
	0%   {right:100%;top:36vw;}
	25%  {right:80%;top:36.5vw;}
	50%  {right:50%;top:31.5vw;}
	75%  {right:30%;top:34vw;}
	100% {right:0%;top:36vw;}
}
@-moz-keyframes pigrun /* Firefox */
{
	0%   {right:100%;top:36vw;}
	25%  {right:80%;top:36.5vw;}
	50%  {right:50%;top:31.5vw;}
	75%  {right:30%;top:34vw;}
	100% {right:0%;top:36vw;}
}
@-webkit-keyframes pigrun /* Safari and Chrome */
{
	0%   {right:100%;top:36vw;}
	25%  {right:80%;top:36.5vw;}
	50%  {right:50%;top:31.5vw;}
	75%  {right:30%;top:34vw;}
	100% {right:0%;top:36vw;}
}
@-o-keyframes pigrun /* Opera */
{
	0%   {right:100%;top:36vw;}
	25%  {right:80%;top:36.5vw;}
	50%  {right:50%;top:31.5vw;}
	75%  {right:30%;top:34vw;}
	100% {right:0%;top:36vw;}
}


.horse{
    background-image:url("./WebImage/0_Horse.png");
    width:16vw;
    height:18vw;
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    top:44.5vw;
    left:10vw;
    margin: 0;

    animation:shake 8s;
	-moz-animation:shake 8s; /* Firefox */
	-webkit-animation:shake 8s; /* Safari and Chrome */
	-o-animation:shake 8s; /* Opera */
	animation-iteration-count: infinite;
}

@keyframes shake
{
	0%   {transform: rotate(0deg);}
	20%   {transform: rotate(-10deg);}
	30%  {transform: rotate(0deg);}
	50%  {transform: rotate(10deg);}
	60%  {transform: rotate(0deg);}
	70%  {transform: rotate(-10deg);}
	80%  {transform: rotate(0deg);}
	90%  {transform: rotate(10deg);}
	100%  {transform: rotate(0deg);}
}

@-moz-keyframes shake /* Firefox */
{
	0%   {transform: rotate(0deg);}
	20%   {transform: rotate(-10deg);}
	30%  {transform: rotate(0deg);}
	50%  {transform: rotate(10deg);}
	60%  {transform: rotate(0deg);}
	70%  {transform: rotate(-10deg);}
	80%  {transform: rotate(0deg);}
	90%  {transform: rotate(10deg);}
	100%  {transform: rotate(0deg);}
}

@-webkit-keyframes shake /* Safari and Chrome */
{
	0%   {transform: rotate(0deg);}
	20%   {transform: rotate(-10deg);}
	30%  {transform: rotate(0deg);}
	50%  {transform: rotate(10deg);}
	60%  {transform: rotate(0deg);}
	70%  {transform: rotate(-10deg);}
	80%  {transform: rotate(0deg);}
	90%  {transform: rotate(10deg);}
	100%  {transform: rotate(0deg);}
}

@-o-keyframes shake /* Opera */
{
	0%   {transform: rotate(0deg);}
	20%   {transform: rotate(10deg);}
	30%  {transform: rotate(0deg);}
	50%  {transform: rotate(-10deg);}
	60%  {transform: rotate(0deg);}
	70%  {transform: rotate(10deg);}
	80%  {transform: rotate(0deg);}
	90%  {transform: rotate(-10deg);}
	100%  {transform: rotate(0deg);}
}
.rabbit{
    background-image:url("./WebImage/0_Rabbit.png");
    width:8.8vw;
    height:9.7vw;
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    top:42vw;
    left:34vw;
    margin: 0;

    animation:shake 7s;
	-moz-animation:shake 7s; /* Firefox */
	-webkit-animation:shake 7s; /* Safari and Chrome */
	-o-animation:shake 7s; /* Opera */
	animation-iteration-count: infinite;
}
.cow{
    background-image:url("./WebImage/0_cow.png");
    width:18.2vw;
    height:13.7vw;
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    top:44vw;
    left:51vw;
    margin: 0;

    animation:shake 8s;
	-moz-animation:shake 8s; /* Firefox */
	-webkit-animation:shake 8s; /* Safari and Chrome */
	-o-animation:shake 8s; /* Opera */
	animation-iteration-count: infinite;
}
.sheep{
    background-image:url("./WebImage/0_sheep.png");
    width:10.75vw;
    height:8.8vw;
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    top:44.5vw;
    left:78vw;
    margin: 0;

    animation:shake 6s;
	-moz-animation:shake 6s; /* Firefox */
	-webkit-animation:shake 6s; /* Safari and Chrome */
	-o-animation:shake 6s; /* Opera */
	animation-iteration-count: infinite;
}


.main-text{
    background-image:url("./WebImage/大標.png");
    width:68vw;
    height:39vw;
    left:16vw;
    top:3vw;
    position: absolute;
    background-repeat: no-repeat;
    background-size: 100%;
}
.btp{
    background-image:url("./WebImage/BT_P.png");
    position: absolute;
    background-repeat: no-repeat;
    left: 40.5vw;
    top:33vw;
    width:19vw;
    height:6vw;
    background-size: 100%;
    opacity: 0;
}
.btp:hover{
    opacity: 0.9;
}
.btr{
    background-image:url("./WebImage/BT_R.png");
    position: absolute;
    background-repeat: no-repeat;
    left: 40.5vw;
    top:33vw;
    width:19vw;
    height:6vw;
    background-size: 100%;
}
.footer{
    background-color:#880000;
    width:100%;
    height:5vw;
    bottom:0;

}
.footer-text{
    padding-top:2vw;
    padding-left:5vw;
    color:white;
}
.fb-share{
    background-image:url("./WebImage/Share_FB.png");
    position: absolute;
    background-repeat: no-repeat;
    left: 77vw;
    top:66vw;
    width: 6vw;
    height: 3.5vw;
    background-size: 100%;
    margin: 0;
    padding:0;
}
.ln-share{
    background-image:url("./WebImage/Share_Line.png");
    position: absolute;
    background-repeat: no-repeat;
    left: 84.7vw;
    top:66vw;
    width: 6vw;
    height: 3.5vw;
    background-size: 100%;
    margin: 0;
    padding:0;
}









@media screen and (max-width: 1023px) {
    .main{
        background-image:url("./MobileImage/mo_main.jpg");
        width:100%;
        height:320vw;
        position:relative;
    }
    .house{
        background-image:url("./MobileImage/fan.png");
        width:28vw;
        height:24vw;
        top:91vw;
        left:-7vw;
        animation:turn 5s;
	    -moz-animation:turn 5s; /* Firefox */
	    -webkit-animation:turn 5s; /* Safari and Chrome */
	    -o-animation:turn 5s; /* Opera */
	    animation-iteration-count: infinite;
    }
    .pig{
        display:none;
    }
    .main-text{
        display:none;
    }
    .cow{
        background-image:url("./MobileImage/mo_Cow.png");
        width:60vw;
        height:45vw;
        left: 4vw;
        top:127vw;

    }
    .rabbit{
        background-image:url("./MobileImage/mo_Rabbit.png");
        width:36vw;
        height:48vw;
        left: 48vw;
        top:167vw;

    }
    .horse{
        background-image:url("./MobileImage/mo_Horse.png");
        width:56vw;
        height:64vw;
        left: 8vw;
        top:210vw;

    }
    .sheep{
        background-image:url("./MobileImage/mo_Sheep.png");
        width:40vw;
        height:32vw;
        left: 49vw;
        top:270vw;

    }
    .btr{
        left:25vw;
        top:100vw;
        width:55vw;
        height:27vw;

    }
    .btp{
        left:25vw;
        top:100vw;
        width:55vw;
        height:27vw;


        animation:change 1s;
	    -moz-animation:change 1s; /* Firefox */
	    -webkit-animation:change 1s; /* Safari and Chrome */
	    -o-animation:change 1s; /* Opera */
	    animation-iteration-count: infinite;
    }
    .vidol{
    background-image:url("./WebImage/LOGO.png");
    width: 18vw;
    height: 10vw;
    top:4vw;
    left:5vw;
    }
    .pu{
        display:none;
    }
    .footer{
        width:100%;
        height:13vw;
        bottom:0;
        position:fixed;
    }
    .footer-text{
        display:none;
    }
    .mpu{
        background-image:url("./WebImage/PUlogo.png");
        width: 35vw;
        height: 30vw;
        top:2vw;
        left:10vw;
        background-repeat: no-repeat;
        background-size: 100% ;
        position: absolute;
    }
    .fb-share{
    left: 65vw;
    top:3vw;
    width: 15vw;
    height: 12vw;
    }
    .ln-share{
    left: 81vw;
    top:3vw;
    width: 15vw;
    height: 12vw;
    }
}



@keyframes turn
{
	0%   {transform: rotate(0deg);}
	20%   {transform: rotate(40deg);}
	30%  {transform: rotate(80deg);}
	50%  {transform: rotate(120deg);}
	60%  {transform: rotate(180deg);}
	70%  {transform: rotate(240deg);}
	80%  {transform: rotate(280deg);}
	90%  {transform: rotate(320deg);}
	100%  {transform: rotate(360deg);}
}

@-moz-keyframes turn /* Firefox */
{
	0%   {transform: rotate(0deg);}
	20%   {transform: rotate(40deg);}
	30%  {transform: rotate(80deg);}
	50%  {transform: rotate(120deg);}
	60%  {transform: rotate(180deg);}
	70%  {transform: rotate(240deg);}
	80%  {transform: rotate(280deg);}
	90%  {transform: rotate(320deg);}
	100%  {transform: rotate(360deg);}
}

@-webkit-keyframes turn /* Safari and Chrome */
{
	0%   {transform: rotate(0deg);}
	20%   {transform: rotate(40deg);}
	30%  {transform: rotate(80deg);}
	50%  {transform: rotate(120deg);}
	60%  {transform: rotate(180deg);}
	70%  {transform: rotate(240deg);}
	80%  {transform: rotate(280deg);}
	90%  {transform: rotate(320deg);}
	100%  {transform: rotate(360deg);}
}

@-o-keyframes turn /* Opera */
{
	0%   {transform: rotate(0deg);}
	20%   {transform: rotate(40deg);}
	30%  {transform: rotate(80deg);}
	50%  {transform: rotate(120deg);}
	60%  {transform: rotate(180deg);}
	70%  {transform: rotate(240deg);}
	80%  {transform: rotate(280deg);}
	90%  {transform: rotate(320deg);}
	100%  {transform: rotate(360deg);}
}




@keyframes change
{
	0%   {opacity: 0.9;}
	30%  {opacity: 0;}
	50%  {opacity: 0.9;}
	80%  {opacity: 0;}
	100%  {opacity: 0.9;}
}

@-moz-keyframes change /* Firefox */
{
	0%   {transform: rotate(0deg);}
	20%   {transform: rotate(40deg);}
	30%  {transform: rotate(80deg);}
	50%  {transform: rotate(120deg);}
	60%  {transform: rotate(180deg);}
	70%  {transform: rotate(240deg);}
	80%  {transform: rotate(280deg);}
	90%  {transform: rotate(320deg);}
	100%  {transform: rotate(360deg);}
}

@-webkit-keyframes change /* Safari and Chrome */
{
	0%   {transform: rotate(0deg);}
	20%   {transform: rotate(40deg);}
	30%  {transform: rotate(80deg);}
	50%  {transform: rotate(120deg);}
	60%  {transform: rotate(180deg);}
	70%  {transform: rotate(240deg);}
	80%  {transform: rotate(280deg);}
	90%  {transform: rotate(320deg);}
	100%  {transform: rotate(360deg);}
}

@-o-keyframes change /* Opera */
{
	0%   {transform: rotate(0deg);}
	20%   {transform: rotate(40deg);}
	30%  {transform: rotate(80deg);}
	50%  {transform: rotate(120deg);}
	60%  {transform: rotate(180deg);}
	70%  {transform: rotate(240deg);}
	80%  {transform: rotate(280deg);}
	90%  {transform: rotate(320deg);}
	100%  {transform: rotate(360deg);}
}
</style>
