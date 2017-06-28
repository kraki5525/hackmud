function ___(c, args) { //target:,sArgs:{}
    var lib = hackmud.s.scripts.lib(),
        method = args.target;

    var data = method.call(args.sArgs),
        lines = data.toString().split('\n'),
        regs = [
            / (\S*) since it was /,
            / critical review of (\S*) /,
            / continues on (\S*),/,
            / developments on (\S*) /,
            / initial launch of (\S*) /,
            / release date for (\S*)\./,
            /^(\S*) announces/,
        ],
        results = [];

    for (let line of lines) {
        for (let reg of regs) {
            let result = reg.exec(line);
            if (result && result.length > 1) {
                results.push(result[1]);
            }
        }
    }

    return {
        ok: true,
        message: results
    }
}