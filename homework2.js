// 100 NILAI RANDOM
var acak = []
for (let i=0; i<100; i++) {
    var value = Math.round(Math.random() * 100) ;
    acak.push(value);
}
console.log(acak)

// MEMECAH 2 ARRAY
var array_genap = [];
var array_ganjil = [];
for (var i = 0; i < acak.length; i++) {
  if (acak[i] % 2 == 0) {
    array_genap.push(acak[i]);
  } else {
    array_ganjil.push(acak[i]);
  }
}
console.log("Genap" +array_genap); 
console.log("Ganjil" +array_ganjil);

// MIN DAN MAX ARRAY GENAP
    let min_genap = array_genap[0];
    let max_genap = array_genap[0];
  
    for (let i = 0; i < array_genap.length; i++) {
      if (array_genap[i] < min_genap) {
        min_genap = array_genap[i];
      } else if (array_genap[i] > max_genap) {
        max_genap = array_genap[i];
      }
    }
  
  console.log("min genap" + min_genap);   
  console.log("max genap" + max_genap); 

// MIN DAN MAX ARRAY GANJIL
    let min_ganjil = array_ganjil[0];
    let max_ganjil = array_ganjil[0];
  
    for (let i = 0; i < array_ganjil.length; i++) {
      if (array_ganjil[i] < min_ganjil) {
        min_ganjil = array_ganjil[i];
      } else if (array_ganjil[i] > max_ganjil) {
        max_ganjil = array_ganjil[i];
      }
    }
    console.log("min ganjil" + min_ganjil);   
    console.log("max ganjil" + max_ganjil);   

// TOTAL GANJIL
var total_ganjil = 0;
for (var i = 0; i < array_ganjil.length; i++) {
    total_ganjil += array_ganjil[i];
}
console.log("total ganjil" + total_ganjil); 

// TOTAL GENAP
var total_genap = 0;
for (var i = 0; i < array_genap.length; i++) {
    total_genap += array_genap[i];
}
console.log("Total genap" + total_genap); 

// RATA-RATA
var jumlahElemenArray_ganjil = array_ganjil.length;
var jumlahElemenArray_genap = array_genap.length;
var rataRataArrayGanjil= total_genap / jumlahElemenArray_ganjil;
var rataRataArrayGenap = total_ganjil / jumlahElemenArray_genap;
console.log("Rata-rata Array Ganjil" + rataRataArrayGanjil);
console.log("Rata-rata Array Genap" + rataRataArrayGenap);

// Komparasi MAX
let hasil_max
if (max_ganjil == max_genap) {
    hasil_max = "Nilai sama"
  } else if (max_ganjil >= max_genap) {
    hasil_max = "Max Ganjil Lebih Besar"
  } else if (max_ganjil <= max_genap) {
    hasil_max = "Max genap lebih besar"
  }
console.log(hasil_max)

// Komparasi MIN
let hasil_min
if (min_ganjil == min_genap) {
    hasil_min = "Nilai sama"
  } else if (min_ganjil >= min_genap) {
    hasil_min = "Min Ganjil Lebih Besar"
  } else if (min_ganjil <= min_genap) {
    hasil_min = "Min genap lebih besar"
  }
console.log(hasil_min)

// Komparasi TOTAL
let hasil_total
if (total_ganjil == total_genap) {
    hasil_total = "Nilai sama"
  } else if (total_ganjil >= total_genap) {
    hasil_total = "total Ganjil Lebih Besar"
  } else if (total_ganjil <= total_genap) {
    hasil_total = "total genap lebih besar"
  }
console.log(hasil_total)

// Komparasi RATA-RATA
let hasil_rataRata
if (rataRataArrayGanjil == rataRataArrayGenap) {
    hasil_rataRata = "Nilai sama"
  } else if (rataRataArrayGanjil >= rataRataArrayGenap) {
    hasil_rataRata = "Rata-rata Ganjil Lebih Besar"
  } else if (rataRataArrayGanjil <= rataRataArrayGenap) {
    hasil_rataRata = "Rata-rata genap lebih besar"
  }
console.log(hasil_rataRata)


