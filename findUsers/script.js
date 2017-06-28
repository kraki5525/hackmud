function (c, arg) { //start:0, pages:1
	function is_npc(name) {
		var last_action = #s.users.last_action({ name: [name, 'gibson'] });
		return last_action[0] && last_action[0].t.getTime() == last_action[1].t.getTime();
	}

	var scripts = [],
		ind = arg.start * 128,
		t = #s.scripts.fullsec({ start: ind });
	while (t.length > 0 && arg.pages > 0) {
		scripts = scripts.concat(t);
		ind = ind + 128;
		t = #s.scripts.fullsec({ start: ind });
		arg.pages--;
	}

	var usrs = scripts.map(x => x.split('.')[0])
		.filter(x => {
			return is_npc(x);
		});

	return {
		ok: true,
		msg: usrs
	};
};