function (c, a) {
    var names = ['open', 'unlock', 'release'],
        colors = ['red', 'blue', 'green', 'orange', 'yellow', 'cyan', 'purple', 'lime'],
        primes = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
            43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
        ],
        locked = /correct/,
        ez21 = 'EZ_21',
        ez35 = 'EZ_35',
        ez40 = 'EZ_40',
        c001 = 'c001',
        arg = {},
        _ = (array, func) => array.forEach(func),
        result = a.t.call(arg);

    try {
        while (/LOCK_ERROR/.test(result)) {
            if (result.indexOf(ez21)>0) {
                arg = ez_21(arg);
            } else if (result.indexOf(ez35) > 0) {
                arg = ez_35(arg);
            } else if (result.indexOf(ez40) > 0) {
                arg = ez_40(arg);
            } else if (result.indexOf(c001) > 0) {
                arg = c_001(arg);
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

    function c_001(args) {
        _(colors, color => {
            args[c001] = color
            result = a.t.call(args)
            if (!locked.test(result)) {
                return;
            }
        });

        args.color_digit = args[c001].length;
        result = a.t.call(args);
        return args;    
    }
    function ez_21(args) {
        _(names, name => {
            args[ez21] = name
            result = a.t.call(args)
            if (!locked.test(result)) {
                return args;
            }
        })

        throw 0;
    }

    function ez_35(args) {
        _(names, name => {
            args[ez35] = name
            result = a.t.call(args)
            if (!locked.test(result)) {
                return;
            }
        });

        for (var i=0; i < 10; i++) {
            args.digit = i;
            result = a.t.call(args)
            
            if (!locked.test(result)) {
                return args;
            }
        }
        throw 0;
    }

    function ez_40(args) {
        _(names, name => {
            args[ez40] = name
            result = a.t.call(args)
            if (!locked.test(result)) {
                return;
            }
        });

        _(primes, prime => {
            args.ez_prime = prime
            result = a.t.call(args)
            if (!locked.test(result)) {
                return args;
            }
        });

        throw 0;
    }
}