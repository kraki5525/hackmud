function (c, a) {
    var names = ["open", "unlock", "release"],
        primes = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
            43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
        ],
        ez21 = 'EZ_21',
        ez35 = 'EZ_35',
        ez40 = 'EZ_40',
        arg = {},
        result = a.t.call(arg);

    try {
        while (/LOCK_ERROR/.test(result)) {
            if (result.indexOf(ez21)>0) {
                arg = ez_21(arg);
            } else if (result.indexOf(ez35) > 0) {
                arg = ez_35(arg);
            } else if (result.indexOf(ez40) > 0) {
                arg = ez_40(arg);
            }
            else {
                throw 0;
            }
        }
    }
    catch (e) {
        return {isOk: false,msg:result};
    }

    return {isOk: true,msg: result};

    function ez_21(args) {
        for (var name of names) {
            args[ez21] = name
            result = a.t.call(arg)
            if (result.indexOf('correct') < 0) {
                return args;
            }
        }
        throw 0;
    }

    function ez_35(args) {
        for (var name of names) {
            args[ez35] = name
            result = a.t.call(arg)
            if (result.indexOf('correct') < 0) {
                break;
            }
        }
        for (var i=0; i < 10; i++) {
            args.digit = i;
            result = a.t.call(arg)
            
            if (result.indexOf('correct') < 0) {
                return args;
            }
        }
        throw 0;
    }

    function ez_40(args) {
        for (var name of names) {
            args[ez40] = name
            result = a.t.call(arg)
            if (result.indexOf('correct') < 0) {
                break;
            }
        }
        for (var prime of primes) {
            args.ez_prime = prime
            result = a.t.call(arg)
            if (result.indexOf('correct') < 0) {
                return args;
            }
        }
        throw 0;
    }
}