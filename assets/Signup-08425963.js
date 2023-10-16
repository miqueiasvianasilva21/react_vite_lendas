import{r as p,j as v,u as Ce,B as je,L as ke,Q as ie}from"./index-b8209a64.js";import{f as Ae}from"./index-c34815e8.js";function fe(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=fe(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function pe(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=fe(e))&&(o&&(o+=" "),o+=t);return o}function Se(){for(var e=0,t,r,o="";e<arguments.length;)(t=arguments[e++])&&(r=be(t))&&(o&&(o+=" "),o+=r);return o}function be(e){if(typeof e=="string")return e;for(var t,r="",o=0;o<e.length;o++)e[o]&&(t=be(e[o]))&&(r&&(r+=" "),r+=t);return r}var Q="-";function Me(e){var t=$e(e),r=e.conflictingClassGroups,o=e.conflictingClassGroupModifiers,i=o===void 0?{}:o;function s(a){var d=a.split(Q);return d[0]===""&&d.length!==1&&d.shift(),ge(d,t)||Ne(a)}function n(a,d){var c=r[a]||[];return d&&i[a]?[].concat(c,i[a]):c}return{getClassGroupId:s,getConflictingClassGroupIds:n}}function ge(e,t){var n;if(e.length===0)return t.classGroupId;var r=e[0],o=t.nextPart.get(r),i=o?ge(e.slice(1),o):void 0;if(i)return i;if(t.validators.length!==0){var s=e.join(Q);return(n=t.validators.find(function(a){var d=a.validator;return d(s)}))==null?void 0:n.classGroupId}}var se=/^\[(.+)\]$/;function Ne(e){if(se.test(e)){var t=se.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}function $e(e){var t=e.theme,r=e.prefix,o={nextPart:new Map,validators:[]},i=Ie(Object.entries(e.classGroups),r);return i.forEach(function(s){var n=s[0],a=s[1];Z(a,o,n,t)}),o}function Z(e,t,r,o){e.forEach(function(i){if(typeof i=="string"){var s=i===""?t:le(t,i);s.classGroupId=r;return}if(typeof i=="function"){if(ze(i)){Z(i(o),t,r,o);return}t.validators.push({validator:i,classGroupId:r});return}Object.entries(i).forEach(function(n){var a=n[0],d=n[1];Z(d,le(t,a),r,o)})})}function le(e,t){var r=e;return t.split(Q).forEach(function(o){r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r}function ze(e){return e.isThemeGetter}function Ie(e,t){return t?e.map(function(r){var o=r[0],i=r[1],s=i.map(function(n){return typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(function(a){var d=a[0],c=a[1];return[t+d,c]})):n});return[o,s]}):e}function Ee(e){if(e<1)return{get:function(){},set:function(){}};var t=0,r=new Map,o=new Map;function i(s,n){r.set(s,n),t++,t>e&&(t=0,o=r,r=new Map)}return{get:function(n){var a=r.get(n);if(a!==void 0)return a;if((a=o.get(n))!==void 0)return i(n,a),a},set:function(n,a){r.has(n)?r.set(n,a):i(n,a)}}}var me="!";function Ge(e){var t=e.separator||":",r=t.length===1,o=t[0],i=t.length;return function(n){for(var a=[],d=0,c=0,f,u=0;u<n.length;u++){var m=n[u];if(d===0){if(m===o&&(r||n.slice(u,u+i)===t)){a.push(n.slice(c,u)),c=u+i;continue}if(m==="/"){f=u;continue}}m==="["?d++:m==="]"&&d--}var y=a.length===0?n:n.substring(c),w=y.startsWith(me),h=w?y.substring(1):y,x=f&&f>c?f-c:void 0;return{modifiers:a,hasImportantModifier:w,baseClassName:h,maybePostfixModifierPosition:x}}}function Pe(e){if(e.length<=1)return e;var t=[],r=[];return e.forEach(function(o){var i=o[0]==="[";i?(t.push.apply(t,r.sort().concat([o])),r=[]):r.push(o)}),t.push.apply(t,r.sort()),t}function Re(e){return{cache:Ee(e.cacheSize),splitModifiers:Ge(e),...Me(e)}}var Oe=/\s+/;function Ve(e,t){var r=t.splitModifiers,o=t.getClassGroupId,i=t.getConflictingClassGroupIds,s=new Set;return e.trim().split(Oe).map(function(n){var a=r(n),d=a.modifiers,c=a.hasImportantModifier,f=a.baseClassName,u=a.maybePostfixModifierPosition,m=o(u?f.substring(0,u):f),y=!!u;if(!m){if(!u)return{isTailwindClass:!1,originalClassName:n};if(m=o(f),!m)return{isTailwindClass:!1,originalClassName:n};y=!1}var w=Pe(d).join(":"),h=c?w+me:w;return{isTailwindClass:!0,modifierId:h,classGroupId:m,originalClassName:n,hasPostfixModifier:y}}).reverse().filter(function(n){if(!n.isTailwindClass)return!0;var a=n.modifierId,d=n.classGroupId,c=n.hasPostfixModifier,f=a+d;return s.has(f)?!1:(s.add(f),i(d,c).forEach(function(u){return s.add(a+u)}),!0)}).reverse().map(function(n){return n.originalClassName}).join(" ")}function Te(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o,i,s,n=a;function a(c){var f=t[0],u=t.slice(1),m=u.reduce(function(y,w){return w(y)},f());return o=Re(m),i=o.cache.get,s=o.cache.set,n=d,d(c)}function d(c){var f=i(c);if(f)return f;var u=Ve(c,o);return s(c,u),u}return function(){return n(Se.apply(null,arguments))}}function b(e){var t=function(o){return o[e]||[]};return t.isThemeGetter=!0,t}var ve=/^\[(?:([a-z-]+):)?(.+)\]$/i,Le=/^\d+\/\d+$/,We=new Set(["px","full","screen"]),Be=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ue=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Fe=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function j(e){return M(e)||We.has(e)||Le.test(e)||q(e)}function q(e){return N(e,"length",Ke)}function _e(e){return N(e,"size",he)}function Ze(e){return N(e,"position",he)}function qe(e){return N(e,"url",Qe)}function O(e){return N(e,"number",M)}function M(e){return!Number.isNaN(Number(e))}function He(e){return e.endsWith("%")&&M(e.slice(0,-1))}function I(e){return ce(e)||N(e,"number",ce)}function l(e){return ve.test(e)}function E(){return!0}function S(e){return Be.test(e)}function Je(e){return N(e,"",Xe)}function N(e,t,r){var o=ve.exec(e);return o?o[1]?o[1]===t:r(o[2]):!1}function Ke(e){return Ue.test(e)}function he(){return!1}function Qe(e){return e.startsWith("url(")}function ce(e){return Number.isInteger(Number(e))}function Xe(e){return Fe.test(e)}function Ye(){var e=b("colors"),t=b("spacing"),r=b("blur"),o=b("brightness"),i=b("borderColor"),s=b("borderRadius"),n=b("borderSpacing"),a=b("borderWidth"),d=b("contrast"),c=b("grayscale"),f=b("hueRotate"),u=b("invert"),m=b("gap"),y=b("gradientColorStops"),w=b("gradientColorStopPositions"),h=b("inset"),x=b("margin"),A=b("opacity"),k=b("padding"),X=b("saturate"),W=b("scale"),Y=b("sepia"),D=b("skew"),ee=b("space"),re=b("translate"),B=function(){return["auto","contain","none"]},U=function(){return["auto","hidden","clip","visible","scroll"]},F=function(){return["auto",l,t]},g=function(){return[l,t]},te=function(){return["",j]},G=function(){return["auto",M,l]},oe=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},P=function(){return["solid","dashed","dotted","double","none"]},ne=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},_=function(){return["start","end","center","between","around","evenly","stretch"]},$=function(){return["","0",l]},ae=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},z=function(){return[M,O]},R=function(){return[M,l]};return{cacheSize:500,theme:{colors:[E],spacing:[j],blur:["none","",S,l],brightness:z(),borderColor:[e],borderRadius:["none","","full",S,l],borderSpacing:g(),borderWidth:te(),contrast:z(),grayscale:$(),hueRotate:R(),invert:$(),gap:g(),gradientColorStops:[e],gradientColorStopPositions:[He,q],inset:F(),margin:F(),opacity:z(),padding:g(),saturate:z(),scale:z(),sepia:$(),skew:R(),space:g(),translate:g()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[S]}],"break-after":[{"break-after":ae()}],"break-before":[{"break-before":ae()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(oe(),[l])}],overflow:[{overflow:U()}],"overflow-x":[{"overflow-x":U()}],"overflow-y":[{"overflow-y":U()}],overscroll:[{overscroll:B()}],"overscroll-x":[{"overscroll-x":B()}],"overscroll-y":[{"overscroll-y":B()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",I]}],basis:[{basis:F()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:$()}],shrink:[{shrink:$()}],order:[{order:["first","last","none",I]}],"grid-cols":[{"grid-cols":[E]}],"col-start-end":[{col:["auto",{span:["full",I]},l]}],"col-start":[{"col-start":G()}],"col-end":[{"col-end":G()}],"grid-rows":[{"grid-rows":[E]}],"row-start-end":[{row:["auto",{span:[I]},l]}],"row-start":[{"row-start":G()}],"row-end":[{"row-end":G()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal"].concat(_())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(_(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(_(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[k]}],px:[{px:[k]}],py:[{py:[k]}],ps:[{ps:[k]}],pe:[{pe:[k]}],pt:[{pt:[k]}],pr:[{pr:[k]}],pb:[{pb:[k]}],pl:[{pl:[k]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[ee]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ee]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",l,t]}],"min-w":[{"min-w":["min","max","fit",l,j]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[S]},S,l]}],h:[{h:[l,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",l,j]}],"max-h":[{"max-h":[l,t,"min","max","fit"]}],"font-size":[{text:["base",S,q]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",O]}],"font-family":[{font:[E]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",M,O]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",l,j]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[A]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[A]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(P(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",j]}],"underline-offset":[{"underline-offset":["auto",l,j]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:g()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[A]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(oe(),[Ze])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",_e]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},qe]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[A]}],"border-style":[{border:[].concat(P(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[A]}],"divide-style":[{divide:P()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:[""].concat(P())}],"outline-offset":[{"outline-offset":[l,j]}],"outline-w":[{outline:[j]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:te()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[A]}],"ring-offset-w":[{"ring-offset":[j]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",S,Je]}],"shadow-color":[{shadow:[E]}],opacity:[{opacity:[A]}],"mix-blend":[{"mix-blend":ne()}],"bg-blend":[{"bg-blend":ne()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",S,l]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[u]}],saturate:[{saturate:[X]}],sepia:[{sepia:[Y]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[A]}],"backdrop-saturate":[{"backdrop-saturate":[X]}],"backdrop-sepia":[{"backdrop-sepia":[Y]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[n]}],"border-spacing-x":[{"border-spacing-x":[n]}],"border-spacing-y":[{"border-spacing-y":[n]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:R()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:R()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[W]}],"scale-x":[{"scale-x":[W]}],"scale-y":[{"scale-y":[W]}],rotate:[{rotate:[I,l]}],"translate-x":[{"translate-x":[re]}],"translate-y":[{"translate-y":[re]}],"skew-x":[{"skew-x":[D]}],"skew-y":[{"skew-y":[D]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":g()}],"scroll-mx":[{"scroll-mx":g()}],"scroll-my":[{"scroll-my":g()}],"scroll-ms":[{"scroll-ms":g()}],"scroll-me":[{"scroll-me":g()}],"scroll-mt":[{"scroll-mt":g()}],"scroll-mr":[{"scroll-mr":g()}],"scroll-mb":[{"scroll-mb":g()}],"scroll-ml":[{"scroll-ml":g()}],"scroll-p":[{"scroll-p":g()}],"scroll-px":[{"scroll-px":g()}],"scroll-py":[{"scroll-py":g()}],"scroll-ps":[{"scroll-ps":g()}],"scroll-pe":[{"scroll-pe":g()}],"scroll-pt":[{"scroll-pt":g()}],"scroll-pr":[{"scroll-pr":g()}],"scroll-pb":[{"scroll-pb":g()}],"scroll-pl":[{"scroll-pl":g()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[j,O]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var De=Te(Ye);function xe(...e){return De(pe(e))}const V=p.forwardRef(({className:e,type:t,...r},o)=>v.jsx("input",{type:t,className:xe("flex h-9 w-full rounded-md bg-slate-700 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:o,...r}));V.displayName="Input";function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},H.apply(this,arguments)}function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},J.apply(this,arguments)}function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},L.apply(this,arguments)}function er(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function rr(...e){return t=>e.forEach(r=>er(r,t))}const ye=p.forwardRef((e,t)=>{const{children:r,...o}=e,i=p.Children.toArray(r),s=i.find(or);if(s){const n=s.props.children,a=i.map(d=>d===s?p.Children.count(n)>1?p.Children.only(null):p.isValidElement(n)?n.props.children:null:d);return p.createElement(K,L({},o,{ref:t}),p.isValidElement(n)?p.cloneElement(n,void 0,a):null)}return p.createElement(K,L({},o,{ref:t}),r)});ye.displayName="Slot";const K=p.forwardRef((e,t)=>{const{children:r,...o}=e;return p.isValidElement(r)?p.cloneElement(r,{...nr(o,r.props),ref:t?rr(t,r.ref):r.ref}):p.Children.count(r)>1?p.Children.only(null):null});K.displayName="SlotClone";const tr=({children:e})=>p.createElement(p.Fragment,null,e);function or(e){return p.isValidElement(e)&&e.type===tr}function nr(e,t){const r={...t};for(const o in t){const i=e[o],s=t[o];/^on[A-Z]/.test(o)?i&&s?r[o]=(...a)=>{s(...a),i(...a)}:i&&(r[o]=i):o==="style"?r[o]={...i,...s}:o==="className"&&(r[o]=[i,s].filter(Boolean).join(" "))}return{...e,...r}}const ar=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],ir=ar.reduce((e,t)=>{const r=p.forwardRef((o,i)=>{const{asChild:s,...n}=o,a=s?ye:t;return p.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),p.createElement(a,J({},n,{ref:i}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),sr=p.forwardRef((e,t)=>p.createElement(ir.label,H({},e,{ref:t,onMouseDown:r=>{var o;(o=e.onMouseDown)===null||o===void 0||o.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault()}}))),we=sr,de=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,ue=pe,lr=(e,t)=>r=>{var o;if((t==null?void 0:t.variants)==null)return ue(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:i,defaultVariants:s}=t,n=Object.keys(i).map(c=>{const f=r==null?void 0:r[c],u=s==null?void 0:s[c];if(f===null)return null;const m=de(f)||de(u);return i[c][m]}),a=r&&Object.entries(r).reduce((c,f)=>{let[u,m]=f;return m===void 0||(c[u]=m),c},{}),d=t==null||(o=t.compoundVariants)===null||o===void 0?void 0:o.reduce((c,f)=>{let{class:u,className:m,...y}=f;return Object.entries(y).every(w=>{let[h,x]=w;return Array.isArray(x)?x.includes({...s,...a}[h]):{...s,...a}[h]===x})?[...c,u,m]:c},[]);return ue(e,n,d,r==null?void 0:r.class,r==null?void 0:r.className)},cr=lr("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),T=p.forwardRef(({className:e,...t},r)=>v.jsx(we,{ref:r,className:xe(cr(),e),...t}));T.displayName=we.displayName;const fr=()=>{const e=Ce(),[t,r]=p.useState(!1),[o,i]=p.useState({name:"",email:"",password:""}),s=async()=>{r(!0);const n=await Ae.signup({nome:o.name,email:o.email,senha:o.password});console.log("res: ",n),console.log(n.message),n.message==="Cadastrado com sucesso!"?(e("/users"),ie.success("Conta criada com sucesso!",{toastId:"account-created-success"})):ie.error("Erro ao criar conta!",{toastId:"account-create-error"}),r(!1)};return v.jsxs("main",{className:"h-screen w-full flex flex-col md:flex-row text-white",children:[v.jsxs("div",{className:"relative w-full h-full bg-black bg-cover bg-no-repeat flex items-center justify-center",children:[v.jsx("div",{className:"absolute top-0 left-0 h-screen w-full opacity-25",style:{backgroundImage:'url("/bg_login.jpg")'}}),v.jsxs("div",{className:"relative font-extrabold text-4xl lg:text-6xl z-20 flex flex-col justify-center items-center gap-10",children:[v.jsx("img",{src:"/logo.png",className:"h-fit w-fit"}),v.jsx("h1",{className:"drop-shadow-lg",children:"Lendas da Amazônia"})]})]}),v.jsxs("div",{className:"w-full md:w-[600px] h-full px-10 md:px-16 col-span-1 bg-slate-900 flex flex-col items-center justify-center gap-5",children:[v.jsx("p",{className:"font-bold text-lg",children:"Criar conta"}),v.jsxs("div",{className:"flex flex-col gap-2 w-full",children:[v.jsx(T,{children:"Nome"}),v.jsx(V,{className:"w-full",placeholder:"ex: Cristian Aragão",value:o.name,onChange:n=>i(a=>({...a,name:n.target.value}))})]}),v.jsxs("div",{className:"flex flex-col gap-2 w-full",children:[v.jsx(T,{children:"E-mail"}),v.jsx(V,{className:"w-full",placeholder:"Ex: example@gmail.com",value:o.email,onChange:n=>i(a=>({...a,email:n.target.value}))})]}),v.jsxs("div",{className:"flex flex-col gap-2 w-full",children:[v.jsx(T,{children:"Senha"}),v.jsx(V,{type:"password",placeholder:"Sua senha",value:o.password,onChange:n=>i(a=>({...a,password:n.target.value}))})]}),v.jsx(je,{loading:t,onClick:async()=>await s(),children:"Criar"}),v.jsx(ke,{to:"/login",className:"text-sm underline text-blue-500",children:"Já possui uma conta? Faça login."})]})]})};export{fr as default};
