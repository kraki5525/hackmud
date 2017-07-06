function (c, a)
{
	var _ = (c, p) => { c.forEach(p) }, // loop utility method
        u = a.t.call(),
		r = a.t.call({}), // first call to get method names
        d = /y with ([a-z]+):"([a-z]+)"/.exec(r),
		k = d[1], // extract command key
		j = d[2], // extract special command
        o = /([a-z_]*) \|/g,
		n = [o.exec(u)[1],o.exec(u)[1]], // list of commands
		p = /y ([a-zA-Z_]*) an/, // password regex
		v, // password
		x = [], // project names
		b = [], // results
		q = {},
		z = [/ject ([a-zA-Z_.]*) /, /e for ([a-z_0-9.]+)\. /, /on ([a-z()0-9_]+) pr/] // project name patterns	

	_(n, c => { // for each command
		q[k] = c
		r = a.t.call(q) // run the script
		
		if((typeof r)[0]!="s") // if we get an array parse the individual items for projects
			_(r, q => {
				_(z, z => {
					o = z.exec(q)
					if(o) x.push(o[1])
				})
			})
		else { // if we get a single item parse it for passwords
			o = p.exec(r)
			if(o) v = o[1]
		}
	})

	_(x, h => { // for each project
		p = {project: h, password: v, pass: v, p: v}
		p[k] = j
		r = a.t.call(p) // call the script to get the npc locs
        if((typeof r)[0]!="s")
			_(r, c => {
				if (#s.scripts.get_level({ name: c }) === 4)
				b.push(`dentist_cat.lockpick{t:#s.${c}}`)
			})			
	})
	
	return b
}