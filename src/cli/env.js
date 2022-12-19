export const parseEnv = () => {
	let rss =[];
	const env_variables = Object.keys(process.env).filter(el => el.includes('RSS_'))
	env_variables.forEach(el => rss.push(el + ' = ' + process.env[el]))
	if(rss.length>0) console.log(rss)
 };
 
 parseEnv();