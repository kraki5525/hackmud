function(c, args) { //name: ""
    function is_npc(name) {
        var last_action = #s.users.last_action({
            name: [name, "gibson"]
        });
        return last_action[0] && last_action[0].t.getTime() == last_action[1].t.getTime();
    }

    return {
        ok: true,
        message: is_npc(args.name)
    }
}