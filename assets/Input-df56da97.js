import{j as t}from"./index-85a749a5.js";const l=e=>t.jsxs("div",{className:`
	  transition duration-300 w-full
		${e.error?"text-red-500":""}
		`,children:[e.label&&t.jsx("p",{className:"text-slate-200 text-sm mb-1 truncate",children:e.label}),t.jsx("div",{className:"relative rounded-md shadow-sm",children:t.jsx("input",{...e,className:`
					disabled:bg-slate-200 text-black placeholder:text-slate-500 duration-200 disabled:cursor-not-allowed w-full rounded bg-slate-300 h-10 px-3 border
					focus:border-slate-500 text-sm font-semibold outline-none
			
					${e.error?"border-red-800 focus:border-red-500 text-red-500":"focus:border-blue-500 border-transparent"}
					`})}),e.helperText&&t.jsx("p",{className:`
				text-sm mt-2 mb-0 ${e.error?"text-red-500":"text-slate-400"}
			`,children:e.helperText})]});export{l as I};
