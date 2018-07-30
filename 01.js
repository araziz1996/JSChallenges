function reverseWord(string){
    
    //ubah kalimat yang dimasukan kedalam array dengan split()
    
    let wordsArr = string.split(' ');
    
    // inisialisasi variabel untuk menampung kalimat berbentuk array yang telah di reverse.

    let reversedWordArr = [];

    // lakukan pengulangan variabel hasil split kalimat
    wordsArr.forEach(index => {
        // variabel untuk menampung kata yang di reverse
        let reversedWord = '';
        //perulangan untuk reverse satu kata
        for (let i = index.length - 1; i >= 0; i--){
            reversedWord += index[i];
        }
        // memasukan kata yang di reverse ke array
        reversedWordArr.push(reversedWord);
    });

    return reversedWordArr.join(' ');
}

let coba = reverseWord("Go Refactory")
console.log(coba);