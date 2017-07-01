function (c, a) {
    var names = ["open", "unlock", "release"],
        result,
        arg = {};
    for (var name of names) {
        arg.EZ_35= name
        result = a.t.call(arg)
        if (result.indexOf('digit') >-1)
            break;
    }
    for (var i = 0; i < 10; i++) {
        arg.digit=i
        result = a.t.call(arg)
        if (result.indexOf('LOCK_ERROR') < 0) {
            return {
                isOk: true,
                msg: {
                    m: result,
                    digit: i
                }
            };
        }
    }
    return {
        isOk: false
    };
}