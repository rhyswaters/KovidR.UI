(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{241:function(e,t,a){},403:function(e,t,a){"use strict";a.r(t);var n=a(34),r=a.n(n),i=a(0),c=a.n(i),s=(a(241),a(26)),o=a(110),l=a(56),d=a(10),j=a(450),h=a(457),p=a(464),u=a(458),b=a(459),x=a(97),O=a(460),g=a(461),m=a(462),f=a(406),y=a(451),v=a(440),S=a(441),w=a(442),B=a(443),N=a(196),C=a.n(N),T=a(197),M=a.n(T),W=a(198),A=a.n(W),D=a(199),_=a.n(D),R=a(200),k=a.n(R),E=a(121),I=a.n(E),F=a(3),L=(v.a,S.a,C.a,w.a,v.a,S.a,M.a,w.a,v.a,S.a,A.a,w.a,v.a,S.a,_.a,w.a,v.a,S.a,k.a,w.a,B.a,v.a,S.a,I.a,w.a,v.a,S.a,I.a,w.a,v.a,S.a,I.a,w.a,a(444)),Y=a(445),H=a(446),U=a(216),G=a(217),K=a(36),P=a(224);function z(e){return Object(F.jsx)(x.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}function J(e,t){return{time:e,amount:t}}var V=[J("00:00",0),J("03:00",300),J("06:00",600),J("09:00",800),J("12:00",1500),J("15:00",2e3),J("18:00",2400),J("21:00",2400),J("24:00",void 0)];function X(){var e=Object(L.a)();return Object(F.jsxs)(c.a.Fragment,{children:[Object(F.jsx)(z,{children:"Today"}),Object(F.jsx)(Y.a,{children:Object(F.jsxs)(H.a,{data:V,margin:{top:16,right:16,bottom:0,left:24},children:[Object(F.jsx)(U.a,{dataKey:"time",stroke:e.palette.text.secondary}),Object(F.jsx)(G.a,{stroke:e.palette.text.secondary,children:Object(F.jsx)(K.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary},children:"Sales ($)"})}),Object(F.jsx)(P.a,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1})]})})]})}function $(e){e.preventDefault()}var q=Object(j.a)({depositContext:{flex:1}});function Q(){var e=q();return Object(F.jsxs)(c.a.Fragment,{children:[Object(F.jsx)(z,{children:"Recent Deposits"}),Object(F.jsx)(x.a,{component:"p",variant:"h4",children:"$3,024.00"}),Object(F.jsx)(x.a,{color:"textSecondary",className:e.depositContext,children:"on 15 March, 2019"}),Object(F.jsx)("div",{children:Object(F.jsx)(y.a,{color:"primary",href:"#",onClick:$,children:"View balance"})})]})}var Z=a(452),ee=a(456),te=a(455),ae=a(453),ne=a(454);function re(e,t,a,n,r,i){return{id:e,date:t,name:a,shipTo:n,paymentMethod:r,amount:i}}var ie=[re(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),re(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),re(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),re(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),re(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79)];function ce(e){e.preventDefault()}var se=Object(j.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));function oe(){var e=se();return Object(F.jsxs)(c.a.Fragment,{children:[Object(F.jsx)(z,{children:"Recent Orders"}),Object(F.jsxs)(Z.a,{size:"small",children:[Object(F.jsx)(ae.a,{children:Object(F.jsxs)(ne.a,{children:[Object(F.jsx)(te.a,{children:"Date"}),Object(F.jsx)(te.a,{children:"Name"}),Object(F.jsx)(te.a,{children:"Ship To"}),Object(F.jsx)(te.a,{children:"Payment Method"}),Object(F.jsx)(te.a,{align:"right",children:"Sale Amount"})]})}),Object(F.jsx)(ee.a,{children:ie.map((function(e){return Object(F.jsxs)(ne.a,{children:[Object(F.jsx)(te.a,{children:e.date}),Object(F.jsx)(te.a,{children:e.name}),Object(F.jsx)(te.a,{children:e.shipTo}),Object(F.jsx)(te.a,{children:e.paymentMethod}),Object(F.jsx)(te.a,{align:"right",children:e.amount})]},e.id)}))})]}),Object(F.jsx)("div",{className:e.seeMore,children:Object(F.jsx)(y.a,{color:"primary",href:"#",onClick:ce,children:"See more orders"})})]})}var le=a(120),de="FETCH_RESULTS_BY_DAYS_WON_START",je="FETCH_RESULTS_BY_DAYS_WON_SUCCESS",he="FETCH_RESULTS_BY_DAYS_WON_FAIL",pe=a(219),ue=a.n(pe).a.create({withCredentials:!1,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"}}),be=function(e){return console.log("days won api start"),ue.get("/api/v1/Guess/GetResultsByDaysWon",{baseURL:"http://localhost:8000"})},xe=function(e){return console.log("fetchResultsByDaysWon action"),function(t){console.log("inside dispatch"),t((console.log("fetchResultsByDaysWonStart action"),{type:de})),console.log("days won pre api call"),be(e).then((function(e){var a={};for(var n in e.data)a.push(Object(l.a)(Object(l.a)({},e.data[n]),{},{userName:n}));t({type:je,daysWon:a})})).catch((function(e){t({type:he,error:e})}))}};function Oe(){return Object(F.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(F.jsx)(y.a,{color:"inherit",href:"https://kovidr.ie/",children:"KovidR"})," ",(new Date).getFullYear(),"."]})}var ge=Object(j.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(l.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(o.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));var me=Object(le.b)((function(e){return{daysWon:e.guess.daysWon}}),(function(e){return{fetchDaysWon:function(){return e(xe)}}}))((function(e){var t=ge(),a=c.a.useState(!1),n=Object(s.a)(a,2),r=n[0],i=(n[1],Object(d.a)(t.paper,t.fixedHeight));return c.a.useEffect((function(){e.fetchDaysWon()}),[]),Object(F.jsxs)("div",{className:t.root,children:[Object(F.jsx)(h.a,{}),Object(F.jsx)(u.a,{position:"absolute",className:Object(d.a)(t.appBar,r&&t.appBarShift),children:Object(F.jsxs)(b.a,{className:t.toolbar,children:[Object(F.jsx)(x.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title,children:"KovidR."}),Object(F.jsx)(O.a,{color:"inherit"})]})}),Object(F.jsxs)("main",{className:t.content,children:[Object(F.jsx)("div",{className:t.appBarSpacer}),Object(F.jsxs)(g.a,{maxWidth:"lg",className:t.container,children:[Object(F.jsx)("button",{onClick:e.fetchDaysWon,children:"fetch"}),Object(F.jsxs)(m.a,{container:!0,spacing:3,children:[Object(F.jsx)(m.a,{item:!0,xs:12,md:8,lg:9,children:Object(F.jsx)(f.a,{className:i,children:Object(F.jsx)(X,{})})}),Object(F.jsx)(m.a,{item:!0,xs:12,md:4,lg:3,children:Object(F.jsx)(f.a,{className:i,children:Object(F.jsx)(Q,{})})}),Object(F.jsx)(m.a,{item:!0,xs:12,children:Object(F.jsx)(f.a,{className:t.paper,children:Object(F.jsx)(oe,{})})})]}),Object(F.jsx)(p.a,{pt:4,children:Object(F.jsx)(Oe,{})})]})]})]})})),fe=a(221),ye=a(463),ve=Object(fe.a)({palette:{primary:{main:"#0d611b"}}});var Se=function(){return Object(F.jsx)("div",{children:Object(F.jsx)(ye.a,{theme:ve,children:Object(F.jsx)(me,{})})})},we=a(95),Be=a(220),Ne=function(e,t){return Object(l.a)(Object(l.a)({},e),t)},Ce={daysWon:null,guessForTodaySubmitted:!1,loading:!1},Te=function(e,t){return console.log("reducer start"),Ne(e,{loading:!0})},Me=function(e,t){return Ne(e,{daysWon:t.daysWon,loading:!1})},We=function(e,t){return Ne(e,{loading:!1})},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return Te(e);case je:return Me(e,t);case he:return We(e);default:return e}},De=a(223),_e=Object(we.b)({guess:Ae}),Re=we.c,ke=Object(we.d)(_e,Re(Object(we.a)(Be.a))),Ee=Object(F.jsx)(le.a,{store:ke,children:Object(F.jsx)(De.a,{children:Object(F.jsx)(Se,{})})});r.a.render(Ee,document.getElementById("root"))}},[[403,1,2]]]);
//# sourceMappingURL=main.4e0901ae.chunk.js.map