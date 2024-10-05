function fibonacci(n) {
    if (n === 0) {
        return [0];
      }
      if (n === 1) {
        return [0, 1];
      }
      
      const fibArray = fibonacci(n - 1); // Rekursi untuk mendapatkan array sebelumnya
      fibArray.push(fibArray[n - 1] + fibArray[n - 2]); // Tambahkan elemen berikutnya
      return fibArray;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
