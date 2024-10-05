function fibonacci(n) {
    const fibArray = [0, 1];
  
    for (let i = 2; i <= n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2])
    }
    
    return fibArray.slice(0, n + 1)
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
