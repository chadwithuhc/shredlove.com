module.exports = {
  
  isClient: typeof window !== 'undefined',

  log(...args) {
    if (this.isClient) {
      console.log(...args)
    }
  }

}