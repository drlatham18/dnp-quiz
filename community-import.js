/* Parse original question uploads locally; no file leaves the browser. */
(function(root){
'use strict';
function csv(text){
 var rows=[],row=[],cell='',quoted=false;
 for(var i=0;i<text.length;i++){var c=text[i];if(c==='"'){if(quoted&&text[i+1]==='"'){cell+='"';i++;}else if(quoted){quoted=false;}else if(!cell){quoted=true;}else throw Error('Unexpected quote in CSV.');}
 else if(c===','&&!quoted){row.push(cell);cell='';}
 else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&text[i+1]==='\n')i++;row.push(cell);if(row.some(Boolean))rows.push(row);row=[];cell='';}
 else cell+=c;}
 if(quoted)throw Error('Unclosed CSV quote.');row.push(cell);if(row.some(Boolean))rows.push(row);return rows;
}
function answers(value,count){
 var a=Array.isArray(value)?value:String(value||'').toUpperCase().split(',').map(function(x){x=x.trim();if(!/^[A-F]$/.test(x))throw Error('Use answer letters such as A or A,C.');return x.charCodeAt(0)-65;});
 if(!a.length||a.length>=count||new Set(a).size!==a.length||a.some(function(n){return !Number.isInteger(n)||n<0||n>=count;}))throw Error('Choose valid correct answers.');return a;
}
function normalize(q){
 if(!q||typeof q!=='object'||Array.isArray(q))throw Error('Each question must be an object.');
 var options=q.options||['a','b','c','d','e','f'].map(function(k){return q['option_'+k];}).filter(function(v){return typeof v==='string'&&v.trim();});
 if(!Array.isArray(options)||options.length<3||options.length>6||options.some(function(v){return typeof v!=='string'||!v.trim()||v.length>600;}))throw Error('Each question needs 3–6 choices.');
 var stem=q.stem||q.question,rationale=q.rationale;
 if(typeof stem!=='string'||stem.trim().length<25||stem.length>2000)throw Error('Question must be 25–2,000 characters.');
 if(typeof rationale!=='string'||rationale.trim().length<30||rationale.length>3000)throw Error('Add an explanation of 30–3,000 characters.');
 var sources=q.sources||[{title:q.source_title,url:q.source_url}];
 if(!Array.isArray(sources)||!sources.length||sources.length>5)throw Error('Include 1–5 supporting sources.');
 sources=sources.map(function(s){if(!s||typeof s.title!=='string'||s.title.trim().length<3)throw Error('Give each source a title.');var u;try{u=new URL(s.url);}catch(e){throw Error('Source URL is invalid.');}if(u.protocol!=='https:'||u.username||u.password)throw Error('Use an HTTPS source link.');return {title:s.title.trim(),url:u.href};});
 if(!['rn','bsn','np','dnp'].includes(q.track))throw Error('Track must be rn, bsn, np, or dnp.');
 if(typeof q.topic!=='string'||q.topic.trim().length<2||q.topic.length>80)throw Error('Add a topic of 2–80 characters.');
 return {stem:stem.trim(),options:options.map(function(x){return x.trim();}),answer:answers(q.answer,options.length),rationale:rationale.trim(),topic:q.topic.trim(),track:q.track,sources:sources,author:typeof q.author==='string'?q.author.trim():''};
}
function parse(text,name){
 if(new TextEncoder().encode(text).length>100000)throw Error('Keep files under 100 KB.');text=text.replace(/^\uFEFF/,'');var data;
 if(/\.json$/i.test(name)){try{data=JSON.parse(text);}catch(e){throw Error('This JSON file is not valid.');}if(!Array.isArray(data))data=[data];}
 else if(/\.csv$/i.test(name)){var rows=csv(text);if(rows.length<2)throw Error('CSV needs a header and question.');var headers=rows.shift().map(function(x){return x.trim().toLowerCase();});if(new Set(headers).size!==headers.length)throw Error('CSV has duplicate column names.');data=rows.map(function(r){if(r.length!==headers.length)throw Error('CSV column counts do not match.');var o={};headers.forEach(function(k,i){o[k]=r[i];});return o;});}
 else throw Error('Choose a CSV or JSON file.');
 if(!data.length||data.length>5)throw Error('Upload 1–5 questions at a time.');return data.map(normalize);
}
var api={parse:parse,normalize:normalize,answers:answers};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.NursingImport=api;
})(typeof window==='undefined'?globalThis:window);
