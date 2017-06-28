function (c, arg) { 
    function is_npc(name) {
        var last_action = #s.users.last_action({ name: [name, 'gibson'] });
        return last_action[0] && last_action[0].t.getTime() == last_action[1].t.getTime();
    }

    var l = #s.scripts.lib(),	
        scripts = #s.scripts.fullsec(),
        usrs = scripts.map(x => x.split('.')[0])
            .filter(x => { 
                return is_npc(x);
            });
	
    return { ok:true, msg: usrs	};
};


