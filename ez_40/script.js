function (c, a) {
    var names = ["open", "unlock", "release"],
        primes = [0,1,2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
                  43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97],
        result,
        arg = {};
    for (var name of names) {
        arg.EZ_40= name
        result = a.t.call(arg)
        if (result.indexOf('prime') >-1)
            break;
    }
    for (let i of primes) {
        arg.ez_prime=i
        result = a.t.call(arg)
        if (result.indexOf('LOCK_ERROR') < 0) {
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
        isOk: false,
        msg: result
    };
}