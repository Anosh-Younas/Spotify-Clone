
function hideanounce() {
    const x = document.getElementById("anounce");
    x.style.display = "none";
}
function showmade() {
    if (document.getElementById("showmadebtn").style.height == "250px") {
        document.getElementById("showmadebtn").style.height = "520px";
        document.getElementById("drop").style.rotate = "180deg";

    } else {
        document.getElementById("showmadebtn").style.height = "250px";
        document.getElementById("drop").style.rotate = "0deg";
    }

}
function mute() {
    if (document.getElementById("mute").className == "fa-solid fa-volume-high volbtn") {
        document.getElementById("mute").classList.add("fa-volume-xmark");
        document.getElementById("mute").classList.remove("fa-volume-high");
        document.getElementById("mute").style.color="#1DB954";
    } else {
        document.getElementById("mute").classList.remove("fa-volume-xmark");
        document.getElementById("mute").classList.add("fa-volume-high");
        document.getElementById("mute").style.color="white";

    }

}
var au;
var crntvol;
function playfn() {
    document.getElementById("playid").style.display = "none";
    document.getElementById("stopid").style.display = "block";

    // au.src="/1.mp3";
    // const songplayed=new Audio("/1.mp3");
    au = document.getElementById("audio");
    if (au.paused) {
        console.log(parseInt(au.duration/60)+ "."+ ((eval( ((au.duration).toFixed(2)/60).toFixed(2)-parseInt(((au.duration).toFixed(2)/60).toFixed(2)) ).toFixed(2))*60).toFixed(0));      
        au.play();

    }
    // au.play();

}
function chngvol() {
    document.getElementById("audio").volume = document.getElementById("vol").value / 100;

}
function stopfn() {
    document.getElementById("playid").style.display = "block";
    document.getElementById("stopid").style.display = "none";

    if (!au.paused) {
        au.pause();
    }

}
function togglefullscreen() {
    if (document.getElementById("bottombar").style.height == "100px") {
        document.getElementById("bottombar").style.height = "100vh";
        document.getElementById("cover").style.position = "relative";
        document.getElementById("btmlftid").style.left = "28%";
        document.getElementById("btmlftid").style.bottom = "300%";
        document.getElementById("btmlftid").style.transform = "scale(5)";
        document.getElementById("btmmain").style.bottom = "5vh";
        document.getElementById("tglfl").style.color = "#1DB954";
        const myTimeout = setTimeout(defbtm, 1000);
        function defbtm() {
            document.getElementById("btmmain").style.bottom = "0px";
        }
    } else {
        document.getElementById("bottombar").style.height = "100px";
        document.getElementById("btmmain").style.bottom = "0px";
        document.getElementById("tglfl").style.color = "white";
        document.getElementById("btmlftid").style.left = "0%";
        document.getElementById("btmlftid").style.bottom = "0%";
        document.getElementById("btmlftid").style.transform = "scale(1)";


    }
}