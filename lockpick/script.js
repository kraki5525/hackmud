function (c, a) {
    var names = ['open', 'unlock', 'release'],
        colors = ['red', 'blue', 'green', 'orange', 'yellow', 'cyan', 'purple', 'lime'],
        primes = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97],
        keys = ['tvfkyq','vc2c7q','xwz7ja'],
        locked = /correct/,
        ez21 = 'EZ_21',
        ez35 = 'EZ_35',
        ez40 = 'EZ_40',
        c001 = 'c001',
        c002 = 'c002',
        c003 = 'c003',
        l0cket = 'l0cket',
        arg = {},
        _n = (array, type) =>{
            if (!array.find(x => {
                arg[type] = x
                result = a.t.call(arg)
                if (!locked.test(result)) {
                    return true;
                }
            }))
                throw 0;
        }, 
        result = a.t.call(arg),
        locks = {
            [ez21]: ez_21,
            [ez35]: ez_35,
            [ez40]: ez_40,
            [c001]: c_001,
            [c002]: c_002,
            [c003]: c_003,
            [l0cket]: locket
        };

    try {
        while (/LOCK_ERROR/.test(result)) {
            
            var lock = Object.keys(locks).find(lock => (new RegExp('Denied.*' + lock)).test(result));
            if (lock)
                locks[lock]();
            else
                throw 0;
        }
    }
    catch (e) {
        return {isOk: false,msg:{
            result: result,
            args: arg}
        };
    }

    return {isOk: true,msg: result};

    function c_001() {
        _n(colors, c001);
        arg.color_digit = arg[c001].length;
        result = a.t.call(arg);
        return;    
    }

    function c_002() {
        _n(colors, c002);
        _n(colors, 'c002_complement');
    }

    function c_003() {
        _n(colors, c003);
        _n(colors, 'c003_triad_1');
        _n(colors, 'c003_triad_2');
    }

    function ez_21() {
        _n(names, ez21);
    }

    function ez_35() {
        _n(names, ez35);
        _n([...Array(10).keys()], "digit");
    }

    function ez_40() {
        _n(names, ez40);
        _n(primes, "ez_prime");
    }

    function locket() {
        _n(keys, l0cket);
    }
}