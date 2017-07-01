function (c, a) {
    var names = ["open", "unlock", "release"],
        result,
        arg = {};
    for (var name of names) {
        arg.EZ_21= name
        result = a.t.call(arg)
        if (result.indexOf('LOCK_ERROR') < 0) {
            return {
                isOk: true,
                msg: {
                    m: result
                }
            };
        }
    }
    return {
        isOk: false
    };
}