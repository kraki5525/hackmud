function (c, a) {
    var colors = ["red","blue","green","yellow","purple","orange","cyan","lime"],
        result,
        arg = {};
    for (var color of colors) {
        arg.c001= color
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
        isOk: false,
        msg:result
    };
}