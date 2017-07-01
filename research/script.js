function (c, a) {
    var x = a.t.call(),
        funs = [],
        other = [],
        props = Object.keys(x).map(key => {
            return {
                prop: key,
                type: typeof x[key]
            };
        }).forEach(prop => {
            if (prop.type != "object")
                funs.push(prop);
            else
                other.push(prop);
        });
        other.forEach(o => {
            funs.push(
                props = Object.keys(x[o.prop]).map(key => {
                    return {
                        prop: o.prop + '.' + key,
                        type: typeof x[o.prop][key]
                    };
                })
            );
        });
    return {
        isOk: true,
        msg: funs
    };
}