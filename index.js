// Soal 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

for(var i = 0; i < daftarHewan.length; i++){
    for(var j = i + 1; j < daftarHewan.length; j++){
        if(daftarHewan[i] > daftarHewan[j]){
            var temp = daftarHewan[i];
            daftarHewan[i] = daftarHewan[j];
            daftarHewan[j] = temp;
        }
    }
}
console.log(daftarHewan.join("\n"));
// --------------------------------------------------------------------------------------------------------------------- //

// Soal 2
function introduce(name, age, address, hobby){
    return "Nama saya " + name + ", umur saya " + age + ", alamat saya " + address + ", dan saya punya hobby " + hobby;
}
console.log(introduce("John", 30, "Jalan Pelesiran", "Gaming"));
// --------------------------------------------------------------------------------------------------------------------- //

// Soal 3
function hitung_huruf_vocal(kalimat) {
    var vocal = ["a", "i", "u", "e", "o"];
    var count = 0;
    for(var i = 0; i < kalimat.length; i++){
        for(var j = 0; j < vocal.length; j++){
            if(kalimat[i] === vocal[j]){
                count++;
            }
        }
    }
    return count;
}
var hitung_1 = hitung_huruf_vocal("Aldy Fikhri Muhammad");
var hitung_2 = hitung_huruf_vocal("Dinda Tri");
console.log(hitung_1 , hitung_2);
// --------------------------------------------------------------------------------------------------------------------- //

// Soal 4
function hitung()
{
    
}
console.log(hitung(0));
console.log(hitung(1));
console.log(hitung(2));
console.log(hitung(3));
console.log(hitung(5));


// --------------------------------------------------------------------------------------------------------------------- //