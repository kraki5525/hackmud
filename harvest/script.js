function ___(c, a)
{
	var _ = (e, p) => { e.forEach(p) }, // loop utility method
		r = a.t.call({}), // first call to get method names
		k = /d with ([a-z]+):/.exec(r)[1], // extract command key
		j = /y with [a-z]+:"([a-z]+)"/.exec(r)[1], // extract special command
		o = / \"([a-z_]*)\"/g, // extract commands
		n = a.c, // list of commands
		p = /y ([a-zA-Z_]*) an/, // password regex
		v, // password
		x = [], // project names
		b = [], // results
		q = {},
		z = [/ject ([a-za-z_.]*) /, /e for ([a-z_0-9.]+)\. /, /on ([a-z()0-9_]+) pr/] // project name patterns
	/*
	while(c = o.exec(r)) {
		n.push(c[1])
	}
	*/
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
		b.push(r)
		/*
		_(r, g => { // for each npc loc push it in the results array
			b.push(g)
		})
		*/
	})
	
	return n
}