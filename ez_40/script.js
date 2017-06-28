function(c, a) {
    var names = ["open", "unlock", "release"];
    var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
        43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
    ];
    for (let i of primes) {
        var result = a.t.call({
            EZ_40: "open",
            ez_prime: i
        });
        if (result.indexOf('Denied') < 0 &&
            result.indexOf('LOCK_ERROR') < 0) {
            return {
                isOk: true,
                msg: {
                    m: result,
                    prime: i
                }
            };
        }
    }
    return {
        isOk: false
    };
}