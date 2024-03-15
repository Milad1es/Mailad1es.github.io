import{S as Rt,i as Ut,s as Ft,k as n,a as s,q as h,l as e,c as o,m as i,r as p,h as l,n as c,b as bt,D as t,B as Ot}from"../../../chunks/index-3384a1fb.js";function Vt(qt){let D,S,f,g,w,q,z,G,A,R,U,M,F,V,d,Y,j,J,K,Q,B,W,r,v,X,Z,_,$,tt,b,rt,nt,O,et,at,T,lt,it,L,st,ot,P,ct,ht,k,pt,dt,C,gt,xt,y,mt,ft,H,ut,Et,I,Dt,vt,N,_t;return{c(){D=n("!DOCTYPE"),S=s(),f=n("html"),g=n("head"),w=n("meta"),q=s(),z=n("meta"),G=s(),A=n("title"),R=h("Todo App"),U=s(),M=n("style"),F=h(`h1 {\r
            color:black; \r
            text-align: center;\r
            font-size: 200%;\r
        }\r
        .ram {\r
            border: 10px solid black; \r
            background-color: orange;\r
            height: 300px; \r
            }\r
        .aaa { \r
            margin-top: 20px;\r
            margin-left: 200px;\r
            text-align: left;\r
            }\r
        .bbb{\r
            text-align: center;\r
            margin-top: -165px;\r
            font-size: 200%;\r
        }\r
        .ccc{\r
            text-align: right;\r
            margin-right: 200px;\r
            margin-top: -160px;\r
            font-size: 200%;\r
        }\r
        .ddd{\r
            margin-left: 200px;\r
        }\r
        .eee{\r
            margin-left: 200px;\r
        }\r
        .fff{\r
            margin-left: 200px;\r
        }\r
        .ggg{\r
            text-align: center;\r
            margin-top: -7px;\r
        }\r
        .hhh{\r
            text-align: center;\r
        }\r
        .lll{\r
            text-align: center;\r
        }\r
        .mmm{\r
            text-align: right;\r
            margin-right: 200px;\r
            margin-top: -20px;\r
        }\r
        .nnn{\r
            text-align: right;\r
            margin-right: 200px;\r
            margin-top: 0px;\r
        }\r
        .ppp{\r
            text-align: right;\r
            margin-right: 200px;\r
            margin-top: 0px;  \r
        }`),V=s(),d=n("body"),Y=n("h1"),j=h("TODO"),J=s(),K=n("hr"),Q=s(),B=n("ul"),W=s(),r=n("div"),v=n("h1"),X=h("TODO"),Z=s(),_=n("p"),$=h("Din text här..."),tt=s(),b=n("p"),rt=h("Din text här..."),nt=s(),O=n("p"),et=h("Din text här..."),at=s(),T=n("h2"),lt=h("DOING"),it=s(),L=n("p"),st=h("Din text här..."),ot=s(),P=n("p"),ct=h("Din text här..."),ht=s(),k=n("p"),pt=h("Din text här..."),dt=s(),C=n("h3"),gt=h("DONE"),xt=s(),y=n("p"),mt=h("Din text här..."),ft=s(),H=n("p"),ut=h("Din text här..."),Et=s(),I=n("p"),Dt=h("Din text här..."),vt=s(),N=n("script"),_t=h(`document.addEventListener("DOMContentLoaded", function() {\r
            \r
            var todoList = document.getElementById("todoList");\r
\r
            \r
\r
            \r
            tasks.forEach(function(task) {\r
                var li = document.createElement("li");\r
                li.textContent = task;\r
                todoList.appendChild(li);\r
            });\r
        });`),this.h()},l(x){D=e(x,"!DOCTYPE",{html:!0}),S=o(x),f=e(x,"HTML",{lang:!0});var u=i(f);g=e(u,"HEAD",{});var E=i(g);w=e(E,"META",{charset:!0}),q=o(E),z=e(E,"META",{name:!0,content:!0}),G=o(E),A=e(E,"TITLE",{});var Tt=i(A);R=p(Tt,"Todo App"),Tt.forEach(l),U=o(E),M=e(E,"STYLE",{});var Lt=i(M);F=p(Lt,`h1 {\r
            color:black; \r
            text-align: center;\r
            font-size: 200%;\r
        }\r
        .ram {\r
            border: 10px solid black; \r
            background-color: orange;\r
            height: 300px; \r
            }\r
        .aaa { \r
            margin-top: 20px;\r
            margin-left: 200px;\r
            text-align: left;\r
            }\r
        .bbb{\r
            text-align: center;\r
            margin-top: -165px;\r
            font-size: 200%;\r
        }\r
        .ccc{\r
            text-align: right;\r
            margin-right: 200px;\r
            margin-top: -160px;\r
            font-size: 200%;\r
        }\r
        .ddd{\r
            margin-left: 200px;\r
        }\r
        .eee{\r
            margin-left: 200px;\r
        }\r
        .fff{\r
            margin-left: 200px;\r
        }\r
        .ggg{\r
            text-align: center;\r
            margin-top: -7px;\r
        }\r
        .hhh{\r
            text-align: center;\r
        }\r
        .lll{\r
            text-align: center;\r
        }\r
        .mmm{\r
            text-align: right;\r
            margin-right: 200px;\r
            margin-top: -20px;\r
        }\r
        .nnn{\r
            text-align: right;\r
            margin-right: 200px;\r
            margin-top: 0px;\r
        }\r
        .ppp{\r
            text-align: right;\r
            margin-right: 200px;\r
            margin-top: 0px;  \r
        }`),Lt.forEach(l),E.forEach(l),V=o(u),d=e(u,"BODY",{});var m=i(d);Y=e(m,"H1",{});var Pt=i(Y);j=p(Pt,"TODO"),Pt.forEach(l),J=o(m),K=e(m,"HR",{}),Q=o(m),B=e(m,"UL",{id:!0});var Gt=i(B);Gt.forEach(l),W=o(m),r=e(m,"DIV",{class:!0});var a=i(r);v=e(a,"H1",{class:!0});var kt=i(v);X=p(kt,"TODO"),kt.forEach(l),Z=o(a),_=e(a,"P",{class:!0});var Ct=i(_);$=p(Ct,"Din text här..."),Ct.forEach(l),tt=o(a),b=e(a,"P",{class:!0});var yt=i(b);rt=p(yt,"Din text här..."),yt.forEach(l),nt=o(a),O=e(a,"P",{class:!0});var Ht=i(O);et=p(Ht,"Din text här..."),Ht.forEach(l),at=o(a),T=e(a,"H2",{class:!0});var It=i(T);lt=p(It,"DOING"),It.forEach(l),it=o(a),L=e(a,"P",{class:!0});var zt=i(L);st=p(zt,"Din text här..."),zt.forEach(l),ot=o(a),P=e(a,"P",{class:!0});var At=i(P);ct=p(At,"Din text här..."),At.forEach(l),ht=o(a),k=e(a,"P",{class:!0});var Mt=i(k);pt=p(Mt,"Din text här..."),Mt.forEach(l),dt=o(a),C=e(a,"H3",{class:!0});var Yt=i(C);gt=p(Yt,"DONE"),Yt.forEach(l),xt=o(a),y=e(a,"P",{class:!0});var Bt=i(y);mt=p(Bt,"Din text här..."),Bt.forEach(l),ft=o(a),H=e(a,"P",{class:!0});var Nt=i(H);ut=p(Nt,"Din text här..."),Nt.forEach(l),Et=o(a),I=e(a,"P",{class:!0});var St=i(I);Dt=p(St,"Din text här..."),St.forEach(l),a.forEach(l),vt=o(m),N=e(m,"SCRIPT",{});var wt=i(N);_t=p(wt,`document.addEventListener("DOMContentLoaded", function() {\r
            \r
            var todoList = document.getElementById("todoList");\r
\r
            \r
\r
            \r
            tasks.forEach(function(task) {\r
                var li = document.createElement("li");\r
                li.textContent = task;\r
                todoList.appendChild(li);\r
            });\r
        });`),wt.forEach(l),m.forEach(l),u.forEach(l),this.h()},h(){c(D,"html",""),c(w,"charset","UTF-8"),c(z,"name","viewport"),c(z,"content","width=device-width, initial-scale=1.0"),c(B,"id","todoList"),c(v,"class","aaa"),c(_,"class","ddd"),c(b,"class","eee"),c(O,"class","fff"),c(T,"class","bbb"),c(L,"class","ggg"),c(P,"class","hhh"),c(k,"class","lll"),c(C,"class","ccc"),c(y,"class","mmm"),c(H,"class","nnn"),c(I,"class","ppp"),c(r,"class","ram"),c(f,"lang","en")},m(x,u){bt(x,D,u),bt(x,S,u),bt(x,f,u),t(f,g),t(g,w),t(g,q),t(g,z),t(g,G),t(g,A),t(A,R),t(g,U),t(g,M),t(M,F),t(f,V),t(f,d),t(d,Y),t(Y,j),t(d,J),t(d,K),t(d,Q),t(d,B),t(d,W),t(d,r),t(r,v),t(v,X),t(r,Z),t(r,_),t(_,$),t(r,tt),t(r,b),t(b,rt),t(r,nt),t(r,O),t(O,et),t(r,at),t(r,T),t(T,lt),t(r,it),t(r,L),t(L,st),t(r,ot),t(r,P),t(P,ct),t(r,ht),t(r,k),t(k,pt),t(r,dt),t(r,C),t(C,gt),t(r,xt),t(r,y),t(y,mt),t(r,ft),t(r,H),t(H,ut),t(r,Et),t(r,I),t(I,Dt),t(d,vt),t(d,N),t(N,_t)},p:Ot,i:Ot,o:Ot,d(x){x&&l(D),x&&l(S),x&&l(f)}}}class Jt extends Rt{constructor(D){super(),Ut(this,D,null,Vt,Ft,{})}}export{Jt as default};
