function (c, arg) {
	function is_npc(name) {
		var last_action = #s.users.last_action({ name: [name, 'gibson'] });
		return last_action[0] && last_action[0].t.getTime() == last_action[1].t.getTime();
	}

	var scripts = [],
		ind = 0,
		t = #s.scripts.fullsec({ start: ind });
	while (t.length > 0) {
		scripts = scripts.concat(t);
		ind = ind + 128;
		t = #s.scripts.fullsec({ start: ind });
	}

	// var usrs = scripts.map(x => x.split('.')[0])
	// 	.filter(x => {
	// 		return is_npc(x);
	// 	});

	return {
		ok: true,
		msg: scripts
	};
};