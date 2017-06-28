function ___(c, args) { //target: #s., sArgs:{}
    function is_npc(name) {
        var last_action = hackmud.s.users.last_action({
            name: [name, "gibson"]
        });
        return last_action[0] && last_action[0].t.getTime() == last_action[1].t.getTime();
    }

    var lib = hackmud.s.scripts.lib(),
        method = args.target;

    var data = method.call(args.sArgs),
        results = data
        .filter(line => line.indexOf('.') > -1)
        .map(line => {
            let user = line.split('.')[0];
            return {
                user: user,
                is_npc: is_npc(user),
                full_sec: hackmud.s.scripts.get_level({
                    name: line
                }),
                script: line
            };
        });

    return {
        ok: true,
        message: results
    }
}