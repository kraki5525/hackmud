function (c, arg) { //start:0, pages:1, level:4
    function is_npc(name) {
        var last_action = #s.users.last_action({
            name: [name, 'gibson']
        });
        return last_action[0] && last_action[0].t.getTime() == last_action[1].t.getTime();
    }

    function getLevel(level, start) {
        var a = { start: start };
        switch(level) {
            case 4:
                return #s.scripts.fullsec(a);
            case 3:
                return #s.scripts.highsec(a);
            case 2:
                return #s.scripts.midsec(a);
            case 1:
                return #s.scripts.lowsec(a);
            case 0:
                return #s.scripts.nullsec(a);
            default:
                throw 'Unknown level';
        }
    }

    var scripts = [],
        ind = arg.start * 128,
        t = getLevel(arg.level, ind);
    while (t.length > 0 && arg.pages > 0) {
        scripts = scripts.concat(t);
        ind = ind + 128;
        t = getLevel(arg.level, ind);
        arg.pages--;
    }

    var usrs = scripts
        .filter(x => {
            var y = x.split('.')[0];
            return is_npc(y);
        });

    return {
        ok: true,
        msg: usrs
    };
};