var jualMobil = {
    nama : 'tompel',
    merek : 'Avanza',
    tahun : 2017,
    iklan : function(){
        document.write(`Bu, saya ${this.nama}, jual mobil ${this.merek}, tahun ${this.tahun}, bekas`);
    }

}
jualMobil.iklan();