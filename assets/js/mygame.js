/*
#
# Project       : Proxytia Game
# Author        : eksant@gmail.com
# Description   : Weekly project phase 0 week 2 - Hacktiv8
#
*/

function init(bg_image = 'background') {
    document.body.style.background = 'url(assets/image/background.png) no-repeat center center fixed';
    document.body.style.backgroundSize = 'cover';
}

function changeBackground(id) {
    var bg_image = ['background', 'background-battle', 'background-win', 'background-lose'];
    var bg = document.body.style;

    bg.background = 'url(assets/image/' + bg_image[id-1] + '.png) no-repeat center center fixed';
    bg.backgroundSize = 'cover';
}

function showDiv(idInfo, idPeran = '') {
    var nama = document.getElementById('name').value;
    var umur = document.getElementById('age').value;
    var namaPeran = document.getElementById('peran').value;
    var sel = document.getElementById('containers').getElementsByTagName('div');    
    var html = 'Masukan Nama dan Umur Kemudian Pilih Peran Dibawah ini.';

    if (nama === '') {
        alert('Masukkan Nama Anda !');
    } else if (umur === '') {
        alert('Masukkan Umur Anda !');
    } else {
        for (var i=0; i<sel.length; i++) { 
            sel[i].style.display = 'none';
        }
        
        changeBackground(idInfo);

        switch (idInfo) {
            case 2:     html = 'Selamat datang di Dunia Proxytia, <strong>' + nama + '</strong>';
                        switch (idPeran) {
                            case 'ksatria': 
                                html = html.concat('<br>Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
                                break;
                            case 'penyihir': 
                                html = html.concat('<br>Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
                                break;
                            case 'tabib': 
                                html = html.concat('<br>Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
                                break;
                        }
                        //html = html.concat('<br><br>Pasukan Anda dalam keadaan siap menyerang. Lakukan penyerangan sekarang juga dengan menekan tombol "WAR".');
                        document.getElementById('peran').setAttribute('value', idPeran);
                        document.getElementById('imgPeran').setAttribute('src', 'assets/image/' + idPeran + '.png');
                        //document.getElementById('imgPeran').setAttribute('alt', capFirstLetter(idPeran));
                        break;

            case 3:     if (playerWin(nama, umur, namaPeran)) {
                            html = '<strong>Selamat, ' + capFirstLetter(namaPeran) + ' ' + nama + ' memenangkan pertarungan!</strong>';
                            document.getElementById('imgWinner').setAttribute('src', 'assets/image/' + namaPeran + '.png');
                        } else {
                            html = '<strong>Sayang sekali, ' + capFirstLetter(namaPeran) + ' ' + nama + ' dikalahkan monster...</strong>';
                            document.getElementById('imgWinner').setAttribute('src', 'assets/image/monster.png');
                            changeBackground(4);
                        }
                        break;
        }
        
        document.getElementById('container'+idInfo).style.display = 'block';
        document.getElementById('content'+idInfo).style.display = 'block';
        document.getElementById('content'+idInfo).innerHTML = html;
    }
    
    return false;
}

function playerWin(idNama, idUmur, idPeran) {
    var i = 1;
    var tahunSkr = new Date().getFullYear();
    var tahunLahir = Number(tahunSkr) - Number(idUmur);
    var playerHealth = tahunLahir * Math.random();
    var monsterHealth = tahunLahir * Math.random();
    var kodeMonster = Math.floor(Math.pow(100, Math.random()));
    var intUmur = Math.pow(idUmur, i);
    var intKodeMonster = Math.pow(kodeMonster, i);

    for (i; i <= tahunLahir; i ++) {
        if (i === intUmur) {
            intUmur = idUmur * i;
            monsterHealth = monsterHealth - idUmur;
        }
        if (i === intKodeMonster) {
            intKodeMonster = kodeMonster * i; 
            playerHealth = playerHealth - kodeMonster;
        }
        if ((i === intUmur) && (i === intKodeMonster)) {
            playerHealth = playerHealth + kodeMonster;
            monsterHealth = monsterHealth + idUmur;
        }
    }

    if (playerHealth > monsterHealth) {
        return true;
    } else {
        return false;
    }
}

function capFirstLetter(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    //return str.charAt(0).toUpperCase();
    //return str.toLowerCase().replace(/\b[a-z]/g, function(letter) {return letter.toUpperCase()});
}


