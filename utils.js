// utilities available in next.js backend and client side
module.exports = {
  
  isClient: typeof window !== 'undefined',

  // only log when on the client
  log(...args) {
    if (this.isClient) {
      console.log(...args)
    }
  }

}