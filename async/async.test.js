const lib = require ('../async_function.js')

testCall('async callback', (done) => {
    function callback(param){
        expect(param). toBe(10)
        done(20)
    }
    
    lib.callbefore2(10, callback)
});