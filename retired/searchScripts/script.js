function(c, arg) { // user:"", name:"", fullsec:true
    function is_npc(name) {
        var last_action = #s.users.last_action({
            name: [name, "gibson"]
        });
        return last_action[0] && last_action[0].t.getTime() == last_action[1].t.getTime();
    }
    var l = hackmud.s.scripts.lib(),
        x = hackmud.s.scripts.fullsec();
    if (!arg.fullsec) {
        x = x
            .concat(#s.scripts.highsec())
            .concat(#s.scripts.midsec())
            .concat(#s.scripts.lowsec())
            .concat(#s.scripts.nullsec());
    }
    var zz = x.filter(a => {
        var split = a.split('.');
        if (arg.user && split[0] !== arg.user)
            return false;
        if (arg.name && split[1] !== arg.name)
            return false;
        return true;
    });

    return {
        ok: true,
        msg: zz.map(a => {
            var s = a.split('.');
            return {
                s: a,
                npc: is_npc(s[0])
            }
        })
    };
}