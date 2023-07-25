function muter() {
    // querySelector is used instead of getElementsByClassName because ???
    // it's newer and can directly access css DOM
    
    // never use var, it's outdated
    let jarumJam = document.querySelector(".jam");
    let jarumMenit = document.querySelector(".menit");
    let jarumDetik = document.querySelector(".detik");

    waktu = new Date();
    derajatJam = waktu.getHours()*30+waktu.getMinutes()*0.5;
    derajatMenit = waktu.getMinutes()*6+waktu.getSeconds()*0.1;
    derajatDetik = waktu.getSeconds()*6;
    
    
    // kudu make canvas deh
    // rotate(jam,30)

    // jam.style.transform = `rotate(`+(waktu.getHours()*30+waktu.getMinutes()*0.5)+`deg)`;
    jarumJam.style.transform = `rotate(${derajatJam}deg)`;
    jarumMenit.style.transform = `rotate(${derajatMenit}deg)`;
    jarumDetik.style.transform = `rotate(${derajatDetik}deg)`;
}
muter();
//call it every second
setInterval(muter, 1000);