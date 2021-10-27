(this["webpackJsonpgradient-genrator"]=this["webpackJsonpgradient-genrator"]||[]).push([[0],{23:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var i,o,r,a,c,d,l,s,p,f,u,b,x=t(0),j=t.n(x),h=t(8),g=t.n(h),m=t(9),O=t(10),v=t(15),y=t(14),C=t(2),w=t(3),G=w.a.div(i||(i=Object(C.a)(["\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: linear-gradient(",");\n"])),(function(n){return n.gradientValue})),k=w.a.div(o||(o=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),D=w.a.h1(r||(r=Object(C.a)(["\n  font-family: 'Roboto';\n  font-size: 34px;\n  color: #ededed;\n  font-weight: 500;\n"]))),T=w.a.p(a||(a=Object(C.a)(["\n  font-family: 'Roboto';\n  font-size: 24px;\n  color: #ededed;\n"]))),I=w.a.ul(c||(c=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  @media screen and (min-width: 768px) {\n    width: 80%;\n    max-width: 430px;\n  }\n"]))),S=w.a.div(d||(d=Object(C.a)(["\n  display: flex;\n  justify-content: space-around;\n  min-width: 320px;\n"]))),A=w.a.div(l||(l=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),R=w.a.p(s||(s=Object(C.a)(["\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n"]))),z=w.a.input(p||(p=Object(C.a)(["\n  width: 100px;\n  height: 50px;\n  background-color: transparent;\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  cursor: pointer;\n"]))),V=w.a.button(f||(f=Object(C.a)(["\n  color: #1e293b;\n  font-family: 'Roboto';\n  font-size: 14px;\n  font-weight: 600;\n  background-color: #00c9b7;\n  min-width: 25px;\n  border-radius: 6px;\n  border: none;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-right: 24px;\n  margin-left: 15px;\n  margin-bottom: 10px;\n  margin-left: 0px;\n  margin-top: 25px;\n  outline: none;\n  cursor: pointer;\n"]))),B=w.a.li(u||(u=Object(C.a)(["\n  width: 49%;\n  list-style-type: none;\n  @media screen and (min-width: 768px) {\n    width: 24%;\n  }\n"]))),F=w.a.button(b||(b=Object(C.a)(["\n  color: ",";\n  background-color: #ffffff;\n  font-family: 'Roboto';\n  font-size: 14px;\n  font-weight: 600;\n  width: 100%;\n  border-radius: 6px;\n  border: none;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-right: 24px;\n  margin-bottom: 10px;\n  outline: none;\n  opacity: ",";\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.isActive?"#334155":"#1e293b"}),(function(n){return n.isActive?1:.5})),E=t(1),J=function(n){var e=n.gradientDirectionDetails,t=n.isActive,i=n.clickGradientDirectionItem,o=e.displayText,r=e.value;return Object(E.jsx)(B,{children:Object(E.jsx)(F,{isActive:t,type:"button",onClick:function(){i(r)},children:o})})},L=[{directionId:"TOP",value:"top",displayText:"Top"},{directionId:"BOTTOM",value:"bottom",displayText:"Bottom"},{directionId:"RIGHT",value:"right",displayText:"Right"},{directionId:"LEFT",value:"left",displayText:"Left"}],M=function(n){Object(v.a)(t,n);var e=Object(y.a)(t);function t(){var n;Object(m.a)(this,t);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={activeGradientDirection:L[0].value,firstColor:"#8ae323",secondColor:"#014f7b",gradientValue:"to ".concat(L[0].value,",#8ae323,#014f7b")},n.onGenerate=function(){var e=n.state,t=e.firstColor,i=e.secondColor,o=e.activeGradientDirection;n.setState({gradientValue:"to ".concat(o,", ").concat(t,", ").concat(i)})},n.onChangeToColor=function(e){n.setState({secondColor:e.target.value})},n.onChangeFromColor=function(e){n.setState({firstColor:e.target.value})},n.clickGradientDirectionItem=function(e){n.setState({activeGradientDirection:e})},n}return Object(O.a)(t,[{key:"render",value:function(){var n=this,e=this.state,t=e.activeGradientDirection,i=e.firstColor,o=e.secondColor,r=e.gradientValue;return Object(E.jsx)(G,{"data-testid":"gradientGenerator",gradientValue:r,children:Object(E.jsxs)(k,{children:[Object(E.jsx)(D,{children:"Generate a CSS Color Gradient"}),Object(E.jsx)(T,{children:"Choose Direction"}),Object(E.jsx)(I,{children:L.map((function(e){return Object(E.jsx)(J,{gradientDirectionDetails:e,isActive:t===e.value,clickGradientDirectionItem:n.clickGradientDirectionItem},e.directionId)}))}),Object(E.jsx)(T,{children:"Pick the Colors"}),Object(E.jsxs)(S,{children:[Object(E.jsxs)(A,{children:[Object(E.jsx)(R,{children:i}),Object(E.jsx)(z,{onChange:this.onChangeFromColor,value:i,type:"color"})]}),Object(E.jsxs)(A,{children:[Object(E.jsx)(R,{children:o}),Object(E.jsx)(z,{onChange:this.onChangeToColor,value:o,type:"color"})]})]}),Object(E.jsx)(V,{onClick:this.onGenerate,children:"Generate"})]})})}}]),t}(x.Component),P=M,H=(t(23),function(){return Object(E.jsx)(P,{})});g.a.render(Object(E.jsx)(j.a.StrictMode,{children:Object(E.jsx)(H,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.bd114a61.chunk.js.map