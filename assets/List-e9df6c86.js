import{u as m,a as x,r as n,j as e,B as p}from"./index-b8209a64.js";import{I as u}from"./Input-50affb29.js";import{f as h}from"./index-c34815e8.js";const g=(s={})=>({_id:(s==null?void 0:s._id)||"",nome:(s==null?void 0:s.nome)||"",email:(s==null?void 0:s.email)||""}),w=()=>{const s=m(),{users:t,setUsers:c}=x(),[r,d]=n.useState("");n.useEffect(()=>{(async()=>{let l=await h.getUsers();l=l.map(o=>g(o)),c(l)})()},[]);let i=t.sort((a,l)=>a.nome.normalize("NFD").toLowerCase()<l.nome.normalize("NFD").toLowerCase()?-1:1);return i=i.filter(a=>a.nome.normalize("NFD").toLowerCase().includes(r.normalize("NFD").toLowerCase())||a.email.normalize("NFD").toLowerCase().includes(r.normalize("NFD").toLowerCase())),e.jsx("div",{className:"w-full flex justify-center px-5",children:e.jsxs("div",{className:"w-full max-w-4xl",children:[e.jsx("p",{className:"text-3xl font-bold",children:"Usuários"}),e.jsxs("div",{className:"grid grid-cols-3 mt-5",children:[e.jsx(u,{placeholder:"Pesquisar...",value:r,onChange:a=>d(a.target.value)}),e.jsx("div",{}),e.jsx(p,{className:"truncate",onClick:()=>{s("/polices/add")},children:"Criar novo usuário"})]}),e.jsxs("div",{className:"flex flex-col gap-3 mt-10",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-1 px-5 font-medium",children:[e.jsxs("div",{className:"col-span-1 flex items-center gap-3",children:[e.jsx("p",{children:"Nome"}),e.jsx("div",{className:"w-20 "})]}),e.jsx("div",{className:"col-span-1 hidden lg:flex",children:e.jsx("p",{children:"Email"})})]}),e.jsx("div",{className:"flex flex-col gap-3",children:i.map(a=>e.jsxs("div",{className:"grid group grid-cols-2 gap-3 h-14 py-1 rounded px-5 bg-slate-200 group duration-200 border border-slate-300 hover:border-slate-700 cursor-pointer",children:[e.jsx("div",{className:"col-span-1 items-center hidden lg:flex",children:e.jsx("p",{children:a.nome})}),e.jsx("div",{className:"col-span-1 items-center hidden lg:flex",children:e.jsx("p",{children:a.email})})]},a._id))})]})]})})};export{w as default};
