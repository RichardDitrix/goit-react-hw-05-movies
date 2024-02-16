"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[176],{1176:(t,a,e)=>{e.r(a),e.d(a,{default:()=>w});var s=e(6936),n=e(9060),i=e(2149),c=e(7504);var E,d,v=e(7136),r=e(4312),g=e(6880);const k=g.cp.ul(E||(E=(0,r.c)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 30px 20px;\n"]))),Y=g.cp.img(d||(d=(0,r.c)(["\n  display: block;\n  max-width: 100%;\n  height: 340px;\n  object-fit: cover;\n"])));var m=e(2496);const w=()=>{const{movieId:t}=(0,s.W4)(),{cast:a,status:e,error:E}=(t=>{const[a,e]=(0,n.useState)([]),[s,E]=(0,n.useState)(c.b.IDLE),[d,v]=(0,n.useState)(null);return(0,n.useEffect)((()=>{!async function(){E(c.b.PENDING);try{const a=await(0,i.QL)(t);e(a),E(c.b.RESOLVED)}catch(d){v(d),E(c.b.REJECTED)}}()}),[t]),{cast:a,status:s,error:d}})(t);return e===c.b.PENDING?(0,m.jsx)(v.c,{}):e===c.b.REJECTED?(0,m.jsxs)("div",{children:["Error: ",E.message]}):e===c.b.RESOLVED&&0===a.length?(0,m.jsx)("div",{children:"We don't have cast for this movie."}):(0,m.jsx)(k,{children:a.map((t=>{let{name:a,profile_path:e,character:s,id:n}=t;return(0,m.jsxs)("li",{children:[(0,m.jsx)(Y,{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"data:image/jpeg;base64,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",alt:"".concat(a)}),(0,m.jsx)("h3",{children:a}),(0,m.jsxs)("p",{children:["Character: ",s||"unknown"]})]},n)}))})}},2149:(t,a,e)=>{e.d(a,{MD:()=>r,Q9:()=>c,QL:()=>v,W:()=>E,mw:()=>d});var s=e(6536),n=e.n(s);const i="80dd5d087ca76f72d259ad6d0e54d71f";n().defaults.baseURL="https://api.themoviedb.org/3";const c=async()=>(await n().get("/trending/all/day?api_key=".concat(i))).data.results,E=async t=>(await n().get("/movie/".concat(t,"?api_key=").concat(i))).data,d=async t=>(await n().get("/movie/".concat(t,"/reviews?api_key=").concat(i))).data.results,v=async t=>(await n().get("/movie/".concat(t,"/credits?api_key=").concat(i))).data.cast,r=async t=>(await n().get("/search/movie?query=".concat(t,"&api_key=").concat(i))).data.results},7504:(t,a,e)=>{e.d(a,{b:()=>s});const s={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}}}]);
//# sourceMappingURL=176.9e81812a.chunk.js.map