import{u as i,r as v,j as e,G as R,a as O,L as f,R as w,b as S,T as y,c as P,A as te,X as A,Y as z,d as L,B as ae,e as re,P as ie,f as ne,F as K,g as q,I as D,h as W,i as oe,k as se,l as le,m as ce,n as de,o as me,p as pe,q as he,C as xe,M as ue,s as ge,t as ve,v as fe,w as je,O as be,x as we,y as ye,z as H,D as Y,E as Z,H as J,J as _e,K as Pe,N as g,Q as Ne,S as ke,U as Ce}from"./vendor-kM2w8Tri.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();const Me=()=>{const t=[],a=["James","Mary","John","Patricia","Robert","Jennifer","Michael","Linda","William","Elizabeth","David","Barbara","Richard","Susan","Joseph","Jessica"],n=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez","Hernandez","Lopez","Wilson","Anderson","Thomas","Taylor"],o=["yahoo.com","gmail.com","oracle.net","outlook.org","wikipedia.edu"],r=(c,s)=>new Date(c.getTime()+Math.random()*(s.getTime()-c.getTime())),l=()=>{const c=a[Math.floor(Math.random()*a.length)],s=n[Math.floor(Math.random()*n.length)];return`${c} ${s}`},d=(c,s)=>{const x=o[Math.floor(Math.random()*o.length)];return`${`${c.toLowerCase()}.${s.toLowerCase()}`}@${x}`};for(let c=0;c<52;c++){const s=l(),[x,b]=s.split(" ");t.push({id:c+1,image:`https://avatar.iran.liara.run/public/${c+1}.png`,fullName:s,username:`user${c+1}`,phone:`+${Math.floor(Math.random()*1e4)}3456789${c+1}`,email:d(x,b),status:c%3===0,price:`$${(Math.random()*100).toFixed(2)}`,createdAt:r(new Date(2013,0,1),new Date).toDateString(),activities:[{activitie:"purchased Playstation 5 Digital Edition",time:` ${+(Math.random()*10).toFixed(0)==0?"just now":`${(Math.random()*10).toFixed(0)} minutes ago`}`},{activitie:"purchased Xbox Series X",time:` ${+(Math.random()*10).toFixed(0)==0?"just now":`${(Math.random()*10).toFixed(0)} hours ago`}`},{activitie:"purchased Google Stadia",time:` ${+(Math.random()*10).toFixed(0)==0?"just now":`${(Math.random()*10).toFixed(0)} days ago`}`},{activitie:"purchased Nintendo Switch",time:` ${+(Math.random()*10).toFixed(0)==0?"just now":`${(Math.random()*10).toFixed(0)} weeks ago`}`},{activitie:"purchased Phone X",time:` ${+(Math.random()*10).toFixed(0)==0?"just now":`${(Math.random()*10).toFixed(0)} months ago`}`},{activitie:"purchased Chromebook X",time:` ${+(Math.random()*10).toFixed(0)==0?"just now":`${(Math.random()*10).toFixed(0)} years ago`}`},{activitie:"purchased HomePod",time:` ${+(Math.random()*10).toFixed(0)==0?"just now":`${(Math.random()*10).toFixed(0)} years ago`}`}]})}return t},j=Me(),Fe=i.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  bottom: 2rem;
  width: 100%;
  padding: 2rem 4rem;

  .page-info {
    font-size: 1.4rem;
    color: var(--color-white-2);
    width: 5rem;
    flex: 1;
    text-align: center;
  }

  button {
    background-color: transparent;
    border: none;
    color: var(--color-white-2);
    font-size: 2rem;
  }
`,Le=({totalItems:t,itemsPerPage:a,onPageChange:n})=>{const[o,r]=v.useState(0),l=Math.ceil(t/a),d=()=>{const s=(o+1)%l;r(s),n(s)},c=()=>{const s=(o-1+l)%l;r(s),n(s)};return e.jsxs(Fe,{children:[e.jsx("button",{onClick:c,disabled:o===0,children:e.jsx(R,{})}),e.jsx("span",{className:"page-info",children:`Page ${o+1} of ${l}`}),e.jsx("button",{onClick:d,disabled:o===l-1,children:e.jsx(O,{})})]})},Se=i.div`
  .user_container {
    padding: 2rem 1rem;
    min-width: 40rem;

    @media screen and (max-width: 1020px) {
      min-width: min-content;
    }

    @media screen and (max-width: 720px) {
      padding: 2rem 0.5rem;
      min-width: min-content;
    }

    .user {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--color-lines);
      margin-bottom: 1rem;

      @media screen and (max-width: 720px) {
        gap: 0.5rem;
      }

      .user_image {
        width: 6rem;

        @media screen and (max-width: 720px) {
          width: 4rem;
        }

        img {
          border: 2px solid var(--color-teal-1);
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          object-fit: cover;

          @media screen and (max-width: 720px) {
            width: 3.5rem;
            height: 3.5rem;
          }
        }
      }

      .user_info {
        margin-right: auto;
        p {
          font-size: 1.4rem;
          color: var(--color-white-2);
          font-weight: 200;

          @media screen and (max-width: 720px) {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;function Ae(){const[a,n]=v.useState(0),o=j.slice(a*6,(a+1)*6);return e.jsxs(Se,{children:[e.jsx("h1",{children:"Users"}),e.jsx("div",{className:"user_container",children:o.map(r=>e.jsx(f,{to:`/users/${r.id}`,children:e.jsxs("div",{className:"user",children:[e.jsx("div",{className:"user_image",children:e.jsx("img",{src:r.image,alt:r.fullName})}),e.jsxs("div",{className:"user_info",children:[" ",e.jsx("p",{children:r.fullName}),e.jsx("p",{children:r.email})]}),e.jsx("div",{className:"user_price",children:e.jsx("p",{children:r.price})})]})},r.id))}),e.jsx(Le,{totalItems:j.length,itemsPerPage:6,onPageChange:r=>n(r)})]})}const ze=i.div`
  display: flex;
  padding: 0.5rem;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
    a {
      align-self: flex-end;
    }
  }

  .boxInfo {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    .title {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  .chartInfo {
    width: 100%;
    flex: 1;

    .chart {
      width: 100%;
      height: 8em;
    }

    .texts {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.2rem;

      .percentage {
        font-size: 1.6rem;
        font-weight: 600;
      }

      .duration {
        font-size: 1.2rem;
        color: var(--color-grey-0);
      }
    }
  }
`;function M({percentage:t,value:a,title:n,icon:o,color:r,dataChart:l,link:d}){return e.jsxs(ze,{children:[e.jsxs("div",{className:"boxInfo",children:[e.jsxs("div",{className:"title",children:[o,e.jsx("span",{children:n})]}),e.jsx("h1",{children:a}),e.jsx(f,{to:d,style:{color:r},children:"View all"})]}),e.jsxs("div",{className:"chartInfo",children:[e.jsx("div",{className:"chart",children:e.jsx(w,{children:e.jsxs(S,{data:l,children:[e.jsx(y,{contentStyle:{backgroundColor:"transparent",color:"var(--color-white)",border:"none"},position:{x:80,y:-20},labelStyle:{display:"none"}}),e.jsx(P,{type:"monotone",dot:!1,dataKey:"pv",strokeWidth:2,stroke:r,activeDot:{r:4}})]})})}),e.jsxs("div",{className:"texts",children:[e.jsxs("span",{className:"percentage",style:{color:t>0?"var(--color-green-1)":"var(--color-button-red-1)"},children:[t,"%"]}),e.jsx("span",{className:"duration",children:"this month"})]})]})]})}const De=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],Be=i.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h2 {
    margin-bottom: 1.6rem;
    padding: 0 1.6rem;
  }
`;function $e(){return e.jsxs(Be,{children:[e.jsx("h2",{children:"Revenue Analytics"}),e.jsx(w,{width:"100%",height:"80%",children:e.jsxs(te,{width:500,height:400,data:De,margin:{top:10,right:30,left:0,bottom:0},children:[e.jsx(A,{dataKey:"name"}),e.jsx(z,{}),e.jsx(y,{contentStyle:{backgroundColor:"transparent",border:"none"},position:{x:580,y:-70}}),e.jsx(L,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"var(--color-teal-1)",fill:"var(--color-teal-1)"}),e.jsx(L,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"var(--color-accent-4)",fill:"var(--color-accent-4)"}),e.jsx(L,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"var(--color-purple-2)",fill:"var(--color-purple-2)"})]})})]})}const Te=[{name:"Page A",pv:2400,amt:2400},{name:"Page B",pv:1398,amt:2210},{name:"Page C",pv:9800,amt:2290},{name:"Page D",pv:3908,amt:2e3},{name:"Page E",pv:4800,amt:2181},{name:"Page F",pv:3800,amt:2500},{name:"Page G",pv:4300,amt:2100}],Ee=[{name:"Page A",pv:200,amt:2400},{name:"Page B",pv:5e3,amt:2210},{name:"Page C",pv:9800,amt:2290},{name:"Page D",pv:200,amt:2e3},{name:"Page E",pv:4e3,amt:2181},{name:"Page F",pv:0,amt:2500},{name:"Page G",pv:4300,amt:2100}],B=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],Ie=[{name:"Page A",pv:4555,amt:2400},{name:"Page B",pv:656,amt:2210},{name:"Page C",pv:87878,amt:2290},{name:"Page D",pv:545,amt:2e3},{name:"Page E",pv:44,amt:2181},{name:"Page F",pv:778,amt:2500},{name:"Page G",pv:4122,amt:2100}],Ge=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],Ue=[{name:"Page A",uv:500,pv:20,amt:2400},{name:"Page B",uv:800,pv:1398,amt:2210},{name:"Page C",uv:1200,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:50,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],Re=i.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    padding: 0 1rem;
  }
`;function $({title:t,color:a,data:n}){return e.jsxs(Re,{children:[e.jsx("h2",{children:t}),e.jsx(w,{width:"100%",height:"100%",children:e.jsxs(ae,{width:150,height:40,data:n,children:[e.jsx(re,{dataKey:"uv",fill:a}),e.jsx(y,{contentStyle:{backgroundColor:"transparent",color:"black",border:"none"},position:{x:220,y:-50},labelStyle:{display:"none"},cursor:!1})]})})]})}const T=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200},{name:"Group E",value:278},{name:"Group F",value:189}],Oe=i.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2rem;

  @media screen and (max-width: 1360px) {
  }

  .chartWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .legend {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;

    @media screen and (max-width: 900px) {
      gap: 0.5rem;
    }

    &_item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;function Ke(){return e.jsxs(Oe,{children:[e.jsx("h2",{children:"Leads by Source"}),e.jsxs("div",{className:"chartWrapper",children:[e.jsx(w,{width:"100%",height:"100%",children:e.jsxs(ie,{width:400,height:300,children:[e.jsx(ne,{dataKey:"value",isAnimationActive:!1,data:T,cx:"50%",cy:"50%",outerRadius:80,fill:"var(--color-purple-2)",label:!0}),e.jsx(y,{})]})}),e.jsx("div",{className:"legend",children:T.map((t,a)=>e.jsx("div",{className:"legend_item",children:e.jsxs("div",{className:"legend_item_info",children:[e.jsx("div",{className:"legend_item_label",children:t.name}),e.jsx("div",{className:"legend_item_value",children:t.value})]})},`item-${a}`))})]})]})}const qe=i.div`
  width: 100%;
  background-color: var(--color-primary-3);

  .layoutContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, minmax(16rem, min-content));
    gap: 2rem;
    padding: 2rem;

    @media screen and (max-width: 1360px) {
      grid-template-columns: repeat(3, minmax(min-content, 1fr));
      grid-template-rows: repeat(5, minmax(16rem, min-content));
    }

    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(min-content, 1fr));
      grid-template-rows: repeat(5, minmax(18rem, min-content));
    }

    @media screen and (max-width: 720px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(8, minmax(18rem, min-content));
    }

    @media screen and (max-width: 500px) {
      padding: 0.5rem;
    }

    .box {
      background-color: var(--color-primary-2);
      color: var(--color-white);
      border: 1px solid var(--color-lines);
      padding: 1rem;
      border-radius: 1rem;

      @media screen and (max-width: 720px) {
        grid-column: 1 / span 1 !important;
      }
    }

    .box_1 {
      grid-column: 1 / span 1;
      grid-row: 1 / span 3;
      position: relative;

      @media screen and (max-width: 1360px) {
        grid-row: 1 / span 2;
      }
    }

    .box_2 {
      grid-column: 2 / span 1;

      @media screen and (max-width: 1360px) {
        grid-column: 2 / span 1;
      }

      @media screen and (max-width: 720px) {
        grid-row: 3 / span 1;
      }
    }

    .box_3 {
      @media screen and (max-width: 1360px) {
        grid-column: 3 / span 1;

        @media screen and (max-width: 900px) {
          grid-column: 2 / span 1;
        }

        @media screen and (max-width: 720px) {
          grid-row: 4 / span 1;
        }
      }
    }

    .box_4 {
      grid-column: 4 / span 1;
      grid-row: 1 / span 3;

      @media screen and (max-width: 1360px) {
        grid-column: 2 / span 2;
        grid-row: 3 / span 4;
      }

      @media screen and (max-width: 900px) {
        display: none;
      }
    }

    .box_5 {
      @media screen and (max-width: 1360px) {
        grid-column: 2 / span 1;

        @media screen and (max-width: 900px) {
          grid-column: 1 / span 1;
        }

        @media screen and (max-width: 720px) {
          grid-row: 5 / span 1;
        }
      }
    }

    .box_6 {
      @media screen and (max-width: 900px) {
        grid-column: 2 / span 1;
        grid-row: 3 / span 1;
      }

      @media screen and (max-width: 720px) {
        grid-row: 6 / span 1;
      }
    }

    .box_7 {
      grid-column: 2 / span 2;
      grid-row: 3 / span 3;

      @media screen and (max-width: 1360px) {
        grid-column: 1 / span 1;
        grid-row: 3 / span 2;
      }

      @media screen and (max-width: 720px) {
        display: none;
      }
    }

    .box_8 {
      grid-row: 4 / span 2;

      @media screen and (max-width: 1360px) {
        grid-column: 1 / span 1;
        grid-row: 5 / span 1;
      }

      @media screen and (max-width: 900px) {
        grid-column: 2 / span 1;
      }

      @media screen and (max-width: 720px) {
        grid-row: 8 / span 1;
      }
    }

    .box_9 {
      grid-row: 4 / span 2;
      @media screen and (max-width: 1360px) {
        grid-column: 1 / span 1;
        grid-row: 6 / span 1;
      }

      @media screen and (max-width: 900px) {
        grid-column: 2 / span 1;
        grid-row: 4 / span 1;
      }

      @media screen and (max-width: 720px) {
        grid-row: 7 / span 1;
      }
    }
  }
`;function We(){return e.jsx(qe,{children:e.jsxs("div",{className:"layoutContainer",children:[e.jsx("div",{className:"box box_1",children:e.jsx(Ae,{})}),e.jsx("div",{className:"box box_2",children:e.jsx(M,{dataChart:Te,color:"var(--color-teal-1)",percentage:70,value:"30.238",title:"Total Users",icon:e.jsx(K,{}),link:"/users"})}),e.jsx("div",{className:"box box_3",children:e.jsx(M,{dataChart:Ee,color:"var(--color-purple-2)",value:"11.238",percentage:-40,title:"Total Products",icon:e.jsx(q,{}),link:"/products"})}),e.jsx("div",{className:"box box_4",children:e.jsx(Ke,{})}),e.jsx("div",{className:"box box_5",children:e.jsx(M,{dataChart:B,color:"var(--color-accent-4)",value:"87.238",percentage:78,title:"Total Orders",icon:e.jsx(D,{})})}),e.jsx("div",{className:"box box_6",children:e.jsx(M,{dataChart:Ie,color:"var(--color-accent-1)",value:"57.238",percentage:28,title:"Total Sales",icon:e.jsx(W,{})})}),e.jsx("div",{className:"box box_7",children:e.jsx($e,{})}),e.jsx("div",{className:"box box_8",children:e.jsx($,{color:"var(--color-accent-1)",data:Ge,title:"Total Orders"})}),e.jsx("div",{className:"box box_9",children:e.jsx($,{color:"var(--color-accent-4)",data:Ue,title:"Profit Earned"})})]})})}const He="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='500'%20zoomAndPan='magnify'%20viewBox='0%200%20375%20374.999991'%20height='500'%20preserveAspectRatio='xMidYMid%20meet'%20version='1.0'%3e%3cdefs%3e%3cclipPath%20id='e84f246059'%3e%3cpath%20d='M%20222%20262%20L%20360%20262%20L%20360%20329%20L%20222%20329%20Z%20M%20222%20262%20'%20clip-rule='nonzero'/%3e%3c/clipPath%3e%3cclipPath%20id='9fecec54cf'%3e%3cpath%20d='M%20275.292969%20369.542969%20L%20222.855469%20262.441406%20L%20307.054688%20221.214844%20L%20359.492188%20328.316406%20Z%20M%20275.292969%20369.542969%20'%20clip-rule='nonzero'/%3e%3c/clipPath%3e%3cclipPath%20id='fd8ab6cfc8'%3e%3cpath%20d='M%20275.292969%20369.542969%20L%20222.855469%20262.441406%20L%20307.054688%20221.214844%20L%20359.492188%20328.316406%20Z%20M%20275.292969%20369.542969%20'%20clip-rule='nonzero'/%3e%3c/clipPath%3e%3cclipPath%20id='2582dda49d'%3e%3cpath%20d='M%2076%20140%20L%20204%20140%20L%20204%20351%20L%2076%20351%20Z%20M%2076%20140%20'%20clip-rule='nonzero'/%3e%3c/clipPath%3e%3cclipPath%20id='4873d8061f'%3e%3cpath%20d='M%2022.65625%20208.285156%20L%20203.90625%20140.527344%20L%20256.953125%20282.433594%20L%2075.707031%20350.191406%20Z%20M%2022.65625%20208.285156%20'%20clip-rule='nonzero'/%3e%3c/clipPath%3e%3cclipPath%20id='28d153c6bc'%3e%3cpath%20d='M%2022.65625%20208.285156%20L%20203.90625%20140.527344%20L%20256.953125%20282.433594%20L%2075.707031%20350.191406%20Z%20M%2022.65625%20208.285156%20'%20clip-rule='nonzero'/%3e%3c/clipPath%3e%3c/defs%3e%3cpath%20fill='%23c69427'%20d='M%20371.027344%20352.804688%20L%20268.90625%20147.402344%20C%20238.835938%20174.296875%20212.378906%20221.480469%20213.851562%20260.144531%20L%20244.75%20321.074219%20C%20245.863281%20323.261719%20247.753906%20324.949219%20250.054688%20325.804688%20L%20358.886719%20366.292969%20C%20367.175781%20369.375%20374.964844%20360.722656%20371.027344%20352.804688%20Z%20M%20187.765625%20240.554688%20C%20187.503906%20240.941406%20187.261719%20241.351562%20187.042969%20241.792969%20L%20148.273438%20320.367188%20C%20147.171875%20322.597656%20145.261719%20324.328125%20142.925781%20325.195312%20L%2032.085938%20366.425781%20C%2023.84375%20369.496094%2016.070312%20360.949219%2019.898438%20353.035156%20L%20184.429688%2012.839844%20C%20187.960938%205.542969%20198.34375%205.480469%20201.953125%2012.742188%20L%20265.414062%20140.386719%20C%20230.617188%20165.261719%20203.367188%20200.019531%20187.765625%20240.554688%20'%20fill-opacity='1'%20fill-rule='nonzero'/%3e%3cg%20clip-path='url(%23e84f246059)'%3e%3cg%20clip-path='url(%239fecec54cf)'%3e%3cg%20clip-path='url(%23fd8ab6cfc8)'%3e%3cpath%20fill='%23ffde59'%20d='M%20222.878906%20262.492188%20C%20252.988281%20281.945312%20293.191406%20297.714844%20344.820312%20298.515625%20L%20359.277344%20328.035156%20C%20274.613281%20322.136719%20225.296875%20264.394531%20222.878906%20262.492188%20Z%20M%20222.878906%20262.492188%20'%20fill-opacity='1'%20fill-rule='nonzero'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20clip-path='url(%232582dda49d)'%3e%3cg%20clip-path='url(%234873d8061f)'%3e%3cg%20clip-path='url(%2328d153c6bc)'%3e%3cpath%20fill='%23ffde59'%20d='M%20203.582031%20140.648438%20C%20167.453125%20186.140625%20135.671875%20248.488281%20126.238281%20331.625%20L%2076.34375%20350.277344%20C%2099.21875%20214.667969%20200.128906%20144.25%20203.582031%20140.648438%20Z%20M%20203.582031%20140.648438%20'%20fill-opacity='1'%20fill-rule='nonzero'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";console.log(j[0]);const Ye=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-primary-2);
  border-bottom: 1px solid var(--color-lines);
  padding: 2rem;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  right: 0;

  .logo {
    display: flex;
    align-items: center;
    gap: 2rem;

    img {
      width: 3.5rem;
      height: 3.5rem;
    }

    span {
      color: var(--color-white);
      align-self: end;
      font-size: 1.6rem;

      @media screen and (max-width: 400px) {
        display: none;
      }
    }
  }
  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    li {
      svg {
        color: var(--color-white);
        font-size: 2rem;
        cursor: pointer;
      }
    }

    &_notification {
      position: relative;
      span {
        position: absolute;
        top: -1rem;
        right: -0.5rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: var(--color-button-red-1);
        color: var(--color-white);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        font-weight: 600;
        text-align: center;
        line-height: 1.5rem;
        font-family: "Poppins", sans-serif;
      }
    }

    &_profile {
      a {
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          cursor: pointer;
          object-fit: cover;
          border: 2px solid var(--color-white);
          transition: all 0.3s ease-in-out;
        }

        &:hover {
          img {
            transform: scale(1.1);
            border: 2px solid var(--color-accent-1);
            transition: all 0.3s ease-in-out;
          }
        }
      }

      @media screen and (max-width: 720px) {
        .search,
        .appsSharp,
        .expand {
          display: none;
        }
      }

      span {
        font-weight: 400;
      }
    }
  }
`;function Ze(){return e.jsxs(Ye,{children:[e.jsx(f,{to:"/",children:e.jsxs("div",{className:"logo",children:[e.jsx("img",{src:He,alt:"Company logo"}),e.jsx("span",{children:"Ahd"})]})}),e.jsxs("ul",{className:"icons",children:[e.jsx("li",{className:"icons_item search",children:e.jsx(oe,{})}),e.jsx("li",{className:"icons_item appsSharp",children:e.jsx(D,{})}),e.jsx("li",{className:"icons_item expand",children:e.jsx(se,{})}),e.jsxs("li",{className:"icons_item icons_notification",children:[e.jsx(le,{}),e.jsx("span",{children:"1"})]}),e.jsx("li",{className:"icons_item icons_profile",children:e.jsxs(f,{to:"/users/1",children:[e.jsx("img",{src:j[0].image,alt:"profile"}),e.jsx("span",{children:j[0].fullName})]})}),e.jsx("li",{className:"icons_item",children:e.jsx(ce,{})})]})]})}const Je=[{sectionTitle:"Main",items:[{path:"/",icon:e.jsx(de,{}),title:"Home"},{path:"/users/1",icon:e.jsx(me,{}),title:"Profile"}]},{sectionTitle:"Lists",items:[{path:"/users",icon:e.jsx(K,{}),title:"Users"},{path:"/products",icon:e.jsx(q,{}),title:"Products"},{path:"/",icon:e.jsx(pe,{}),title:"Orders"},{path:"/",icon:e.jsx(he,{}),title:"Posts"}]},{sectionTitle:"General",items:[{path:"/",icon:e.jsx(D,{}),title:"Elements"},{path:"/",icon:e.jsx(xe,{}),title:"Notes"},{path:"/",icon:e.jsx(ue,{}),title:"Forms"},{path:"/",icon:e.jsx(ge,{}),title:"Calendar"}]},{sectionTitle:"Maintenance",items:[{path:"/",icon:e.jsx(ve,{}),title:"Settings"},{path:"/",icon:e.jsx(fe,{}),title:"Backups"}]},{sectionTitle:"Analytics",items:[{path:"/",icon:e.jsx(W,{}),title:"Charts"},{path:"/",icon:e.jsx(je,{}),title:"Logs"}]}],Xe=i.div`
  border-right: 1px solid var(--color-lines);
  padding: 2rem;
  min-width: 18rem;

  @media screen and (max-width: 920px) {
    min-width: 8rem;
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .item {
      display: flex;
      flex-direction: column;
      color: var(--color-white-2);

      &_list {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        margin-bottom: 1.2rem;
        margin-left: 1rem;
        transition: all 0.2s ease-in-out;

        &:hover {
          color: var(--color-white);
        }

        svg {
          font-size: 2rem;
          transform: translateY(-2px);
        }

        &_title {
          text-transform: capitalize;
          font-weight: 200;

          @media screen and (max-width: 920px) {
            display: none;
          }
        }
      }

      &_title {
        color: var(--color-grey-0);
        text-transform: uppercase;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
      }
    }
  }
`;function Ve(){return e.jsx(Xe,{children:e.jsx("div",{className:"menu",children:Je.map(t=>e.jsxs("div",{className:"item",children:[e.jsx("span",{className:"item_title",children:t.sectionTitle}),t.items.map(a=>e.jsxs(f,{className:"item_list",to:a.path,children:[a.icon,e.jsx("span",{className:"item_list_title",children:a.title})]},a.title))]},t.sectionTitle))})})}function Qe(){const[t,a]=v.useState(window.innerWidth<720);return v.useEffect(()=>{const n=()=>{a(window.innerWidth<720)};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[t]),t}const et=i.div`
  display: flex;
  height: 4rem;
  background-color: var(--color-primary-2);
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  font-size: 1.4rem;
  height: 8rem;
  border-top: 1px solid var(--color-lines);
`;function tt(){const t=Qe();return e.jsx(et,{children:t?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Ahmidou"}),e.jsx("span",{children:"Copyright © 2024."})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"AHMIDOU EL MEHDI"}),e.jsx("span",{children:"Copyright © 2024. All rights reserved."})]})})}const at=i.div`
  background-color: var(--color-primary-2);
  color: var(--color-white);
`,rt=i.main`
  display: flex;
`;function it(){return e.jsxs(at,{children:[e.jsx(Ze,{}),e.jsxs(rt,{children:[e.jsx(Ve,{})," ",e.jsx(be,{})]}),e.jsx(tt,{})]})}const nt=()=>{const t=[],a=["Smartphone","Laptop","Smartwatch","Tablet","Desktop PC","E-reader","Gaming Console","Portable Speaker","Camera","Headphones","Wireless Charger","Bluetooth Earbuds","VR Headset","Fitness Tracker","Projector","Drone"],n=["Black","White","Gray","Silver","Gold","Blue","Red","Green","Yellow","Pink","Purple","Cyan","Magenta"],o=["Electronix","TechGear","SmartTech","Innovatech","GizmoWorks","NextGen Tech","PioneerTech","Quantum Devices","GearBest","EcoTech"],r=()=>a[Math.floor(Math.random()*a.length)],l=()=>n[Math.floor(Math.random()*n.length)],d=()=>o[Math.floor(Math.random()*o.length)],c=s=>`https://source.unsplash.com/random/200x200?sig=${s}`;for(let s=0;s<18;s++){const x=r(),b=l(),N=d(),F=s%3===0;t.push({id:s+1,title:x,color:b,producer:N,inStock:F,price:`$${(Math.random()*1e3).toFixed(2)}`,createdAt:new Date().toDateString(),imageUrl:c(s+1),descriptions:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."]})}return t},X=nt(),ot=i.table`
  width: 100%;
  min-height: min-content;
  border-collapse: collapse;
  margin: 2.5rem 0;
  font-size: 1.4rem;
  min-width: 40rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.15);
`,st=i.thead`
  background-color: var(--color-grey-1);
  color: var(--color-white);
  text-align: left;
`,lt=i.th`
  padding: 1rem 1.5rem;
  cursor: pointer;

  .columnTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;
    border-right: 1px solid var(--color-white-2);

    .sortIcon {
      color: var(--color-white);
      flex-direction: column;
      display: flex;
      align-items: center;
      width: 2.2rem;
      height: 2.2rem;
      transform: translateY(1px);

      svg {
        display: none;
        font-size: 1.7rem;
      }
    }
  }
  &:hover .sortIcon svg {
    display: block;
  }
`,ct=i.tbody`
  tr {
    border-bottom: 1px solid var(--color-gray-1);
    text-align: left;
  }

  tr:nth-of-type(even) {
    background-color: var(--color-primary-3);
  }

  tr:last-of-type {
    border-bottom: 2px solid var(--color-red-1);
  }
`,dt=i.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0rem;
`,E=i.button`
  padding: 0.5rem 1.5rem;
  border: none;
  background-color: transparent;
  color: ${t=>t.$isActive?"var(--color-white)":"var(--color-teal-1)"};
  cursor: pointer;

  &:hover {
    color: var(--color-white);
  }
`,I=i.button`
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  border: none;
`,V=({data:t,columns:a,renderItem:n,itemPerPage:o=8})=>{const[r,l]=v.useState(1),[d,c]=v.useState("fullName"),[s,x]=v.useState("asc"),b=[...t].sort((m,C)=>m[d]<C[d]?s==="asc"?-1:1:m[d]>C[d]?s==="asc"?1:-1:0),N=r*o,F=N-o,Q=b.slice(F,N),_=Math.ceil(t.length/o),k=m=>l(m),ee=m=>{m===d?x(s==="asc"?"desc":"asc"):(c(m),x("asc"))};return e.jsxs(e.Fragment,{children:[e.jsxs(ot,{children:[e.jsx(st,{children:e.jsx("tr",{children:a.map(m=>e.jsx(lt,{onClick:()=>ee(m.key),children:e.jsxs("span",{className:"columnTitle",children:[m.title," ",e.jsxs("span",{className:"sortIcon",children:[e.jsx(we,{}),e.jsx(ye,{})]})]})},m.key))})}),e.jsx(ct,{children:Q.map(m=>n(m))})]}),e.jsxs(dt,{children:[e.jsx(I,{onClick:()=>r>1&&k(r-1),disabled:r===1,children:e.jsx(R,{})}),Array.from({length:_},(m,C)=>{const p=C+1;if(_>5){if(p<=2||p>_-2)return e.jsx(E,{$isActive:p===r,onClick:()=>k(p),children:p},p);if(p===3)return e.jsx("span",{children:"..."},"ellipsis")}else return e.jsx(E,{$isActive:p===r,onClick:()=>k(p),children:p},p);return null}),e.jsx(I,{onClick:()=>r<_&&k(r+1),disabled:r===_,children:e.jsx(O,{})})]})]})},h=i.td`
  padding: 1.2rem 1.5rem;
`,G=i.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: transparent;
  color: ${t=>t.$delete?"var(--color-button-red-1)":"var(--color-teal-1)"};
  border-radius: 0.5rem;
  cursor: pointer;

  svg {
    font-size: 2.2rem;
  }
`,mt=i.div`
  min-width: 4rem;
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: left;

  img {
    width: 4rem;
    height: auto;
    border-radius: 50%;
  }
`,pt=[{key:"id",title:"ID"},{key:"imageUrl",title:"Image"},{key:"title",title:"Title"},{key:"color",title:"Color"},{key:"producer",title:"Producer"},{key:"inStock",title:"Stock"},{key:"price",title:"Price"},{key:"createdAt",title:"Created At"},{key:"action",title:"Action"}],ht=({product:t})=>e.jsxs("tr",{children:[e.jsxs(h,{children:[" ",t.id," "]}),e.jsx(h,{children:e.jsx(f,{to:`/products/${t.id}`,children:e.jsx(mt,{children:e.jsx("img",{src:t.imageUrl,alt:t.title})})})}),e.jsx(h,{children:t.title}),e.jsx(h,{children:t.color}),e.jsx(h,{children:t.producer}),e.jsx(h,{children:t.inStock?"Yes":"No"}),e.jsx(h,{children:t.price}),e.jsx(h,{children:t.createdAt}),e.jsxs(h,{children:[e.jsx(G,{children:e.jsx(H,{})}),e.jsx(G,{$delete:!0,children:e.jsx(Y,{})})]})]},t.id),xt=i.div`
  height: 100vh;
  width: 100%;
  max-height: calc(100vh - 16rem);
  padding: 2rem 4rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 1rem;
    background-color: var(--color-primary-3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-primary-2);
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-primary-1);
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 2.4rem;
    }

    button {
      background-color: var(--color-teal-1);
      color: var(--color-white);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      cursor: pointer;

      &:hover {
        background-color: var(--color-teal-2);
        transition: all 0.2s ease-in-out;
        transform: scale(1.05);
      }
    }
  }
`;function ut(){return e.jsxs(xt,{children:[e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:"Products"}),e.jsx("button",{children:"Add Product"})]}),e.jsx(V,{data:X,columns:pt,renderItem:t=>e.jsx(ht,{product:t}),itemLink:"users",itemPerPage:"8"})]})}const u=i.td`
  padding: 1.2rem 1.5rem;
`,U=i.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: transparent;
  color: ${t=>t.$delete?"var(--color-button-red-1)":"var(--color-teal-1)"};
  border-radius: 0.5rem;
  cursor: pointer;

  svg {
    font-size: 2.2rem;
  }
`,gt=i.div`
  min-width: 4rem;
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: left;

  img {
    width: 4rem;
    height: auto;
    border-radius: 50%;
  }
`;function vt({user:t}){return e.jsxs("tr",{children:[e.jsx(u,{children:t.id}),e.jsx(u,{children:e.jsx(f,{to:`/users/${t.id}`,children:e.jsx(gt,{children:e.jsx("img",{src:t.image,alt:"User"})})})}),e.jsx(u,{children:t.fullName}),e.jsx(u,{children:t.email}),e.jsx(u,{children:t.phone}),e.jsx(u,{children:t.createdAt}),e.jsx(u,{children:t.status?"✔":"✘"}),e.jsxs(u,{children:[e.jsx(U,{children:e.jsx(H,{})}),e.jsx(U,{$delete:!0,children:e.jsx(Y,{})})]})]},t.id)}const ft=[{key:"id",title:"ID"},{key:"avatar",title:"Avatar"},{key:"fullName",title:"Full Name"},{key:"email",title:"Email"},{key:"phone",title:"Phone"},{key:"createdAt",title:"Created At"},{key:"status",title:"Verified"},{key:"action",title:"Action"}],jt=i.div`
  width: 100%;
  min-height: calc(100vh - 16rem);
  padding: 2rem 4rem;
  position: relative;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 1rem;
    background-color: var(--color-primary-3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-primary-2);
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-primary-1);
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 2.4rem;
    }

    button {
      background-color: var(--color-teal-1);
      color: var(--color-white);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      cursor: pointer;

      &:hover {
        background-color: var(--color-teal-2);
        transition: all 0.2s ease-in-out;
        transform: scale(1.05);
      }
    }
  }
`;function bt(){return e.jsxs(jt,{children:[e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:"Users"}),e.jsx("button",{children:"Add User"})]}),e.jsx(V,{data:j,columns:ft,renderItem:t=>e.jsx(vt,{user:t}),itemPerPage:"8"})]})}function wt(){return e.jsx("div",{children:"Login"})}const yt=i.div`
  height: 100%;
  width: 100%;
  padding: 2rem 4rem;

  @media screen and (max-width: 720px) {
    height: 100%;
    padding: 0.5rem;
  }
`,_t=i.div`
  display: flex;
  gap: 8rem;
  padding: 2rem;
  width: 100%;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }

  .view {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 3;

    .info {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &__top {
        display: flex;
        align-items: center;
        gap: 2rem;

        img {
          width: 10rem;
          height: 10rem;
          object-fit: cover;
        }

        h1 {
          font-size: 1.9rem;
          font-weight: 500;
        }

        button {
          background-color: var(--color-grey-1);
          padding: 0.2rem 1rem;
          border: 1px solid var(--color-white-2);
          border-radius: 0.5rem;
          font-size: 1.2rem;
        }
      }

      .details {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;

        @media screen and (max-width: 720px) {
          padding: 0.5rem;
        }

        &__item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        &__title {
          color: var(--color-white-2);
          font-size: 1.7rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        &__value {
          color: var(--color-white-2);
          font-size: 1.6rem;
        }
      }
    }

    .chart {
      width: 100%;
      height: 40rem;
      padding: 2rem 0;
    }
  }

  .activities {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    flex: 2;

    .list {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      position: relative;
      padding: 4rem 0 0 0;

      &::before {
        content: "";
        width: 2px;
        height: 100%;
        background-color: var(--color-button-red-2);
        margin-bottom: 2rem;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
      }

      li {
        padding: 1rem;
        position: relative;
        background-color: var(--color-red-2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
          background-color: var(--color-red-1);
        }

        &::before {
          content: "";
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background-color: var(--color-red-1);
          display: inline-block;
          margin-bottom: 0.5rem;
          position: absolute;
          left: -5px;
          top: 0;
          transform: translateY(-50%);
        }
      }

      &__itemInfo {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
          font-size: 1.6rem;
        }

        time {
          font-size: 1.1rem;
        }
      }
    }
  }
`;function Pt(){const{id:t}=Z(),a=j.find(n=>n.id===+t);return e.jsx(yt,{children:e.jsxs(_t,{children:[e.jsxs("div",{className:"view",children:[e.jsxs("div",{className:"info",children:[e.jsxs("div",{className:"info__top",children:[e.jsx("img",{src:a.image,alt:"profile"}),e.jsxs("h1",{children:[" ",a.fullName]}),e.jsx("button",{children:"Edit"})]}),e.jsxs("div",{className:"details",children:[e.jsxs("div",{className:"details__item",children:[e.jsx("span",{className:"details__title",children:"username:"}),e.jsx("span",{className:"details__value",children:a.username})]}),e.jsxs("div",{className:"details__item",children:[e.jsx("span",{className:"details__title",children:"fullname:"}),e.jsx("span",{className:"details__value",children:a.fullName})]}),e.jsxs("div",{className:"details__item",children:[e.jsx("span",{className:"details__title",children:"email:"}),e.jsx("span",{className:"details__value",children:a.email})]}),e.jsxs("div",{className:"details__item",children:[e.jsx("span",{className:"details__title",children:"phone:"}),e.jsx("span",{className:"details__value",children:a.phone})]}),e.jsxs("div",{className:"details__item",children:[e.jsx("span",{className:"details__title",children:"status:"}),e.jsx("span",{className:"details__value",children:a.status})]})]})]}),e.jsx("div",{className:"chart",children:e.jsx(w,{children:e.jsxs(S,{data:B,children:[e.jsx(A,{}),e.jsx(z,{}),e.jsx(J,{}),e.jsx(y,{position:{x:80,y:-20},labelStyle:{display:"none"},contentStyle:{backgroundColor:"transparent",border:"none"}}),e.jsx(P,{type:"monotone",dataKey:"pv",stroke:"var(--color-teal-1)",activeDot:{r:8}}),e.jsx(P,{type:"monotone",dataKey:"uv",stroke:"var(--color-purple-2)"})]})})})]}),e.jsxs("div",{className:"activities",children:[e.jsx("h2",{children:"Latest Activities"}),e.jsx("ul",{className:"list",children:a.activities.map((n,o)=>e.jsx("li",{children:e.jsxs("div",{className:"list__itemInfo",children:[e.jsxs("p",{children:[a.fullName," ",n.activitie]}),e.jsx("time",{children:n.time})]})},o))})]})]})})}const Nt=i.div`
  height: 100%;
  width: 100%;

  @media screen and (max-width: 720px) {
    padding: 0.5rem;
    height: 100%;
  }
`,kt=i.div`
  display: flex;
  gap: 8rem;
  padding: 2rem;
  width: 100%;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }

  .view {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 3;

    .info {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &__top {
        display: flex;
        align-items: center;
        gap: 2rem;

        img {
          width: 10rem;
          height: 10rem;
          object-fit: cover;
        }

        h1 {
          font-size: 1.9rem;
          font-weight: 500;
        }

        button {
          background-color: var(--color-grey-1);
          padding: 0.2rem 1rem;
          border: 1px solid var(--color-white-2);
          border-radius: 0.5rem;
          font-size: 1.2rem;
        }
      }

      .details {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;

        &__item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        &__title {
          color: var(--color-white-2);
          font-size: 1.7rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        &__value {
          color: var(--color-white-2);
          font-size: 1.6rem;
        }
      }
    }

    .chart {
      width: 100%;
      height: 40rem;
      padding: 2rem 0;
    }
  }

  .descriptions {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    flex: 2;

    .list {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      position: relative;
      padding: 4rem 0 0 0;

      &::before {
        content: "";
        width: 2px;
        height: 100%;
        background-color: var(--color-button-red-2);
        margin-bottom: 2rem;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
      }

      li {
        padding: 1rem;
        position: relative;
        background-color: var(--color-red-2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
          background-color: var(--color-red-1);
        }

        &::before {
          content: "";
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background-color: var(--color-red-1);
          display: inline-block;
          margin-bottom: 0.5rem;
          position: absolute;
          left: -5px;
          top: 0;
          transform: translateY(-50%);
        }
      }

      &__itemInfo {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
          font-size: 1.6rem;
        }
      }
    }
  }
`;function Ct(){const{id:t}=Z(),a=X.find(n=>n.id===+t);return e.jsx(Nt,{children:e.jsxs(kt,{children:[e.jsxs("div",{className:"view",children:[e.jsxs("div",{className:"info",children:[e.jsxs("div",{className:"info__top",children:[e.jsx("img",{src:a.imageUrl,alt:"profile"}),e.jsxs("h1",{children:[" ",a.title]}),e.jsx("button",{children:"Edit"})]}),e.jsxs("div",{className:"details",children:[e.jsxs("div",{className:"details__item",children:[e.jsx("span",{className:"details__title",children:"title:"}),e.jsx("span",{className:"details__value",children:a.title})]}),e.jsxs("div",{className:"details__item",children:[e.jsx("span",{className:"details__title",children:"producer:"}),e.jsx("span",{className:"details__value",children:a.producer})]}),e.jsxs("div",{className:"details__item",children:[e.jsx("span",{className:"details__title",children:"color:"}),e.jsx("span",{className:"details__value",children:a.color})]}),e.jsxs("div",{className:"details__item",children:[e.jsx("span",{className:"details__title",children:"price:"}),e.jsx("span",{className:"details__value",children:a.price})]}),e.jsxs("div",{className:"details__item",children:[e.jsx("span",{className:"details__title",children:"stock:"}),e.jsx("span",{className:"details__value",children:a.inStock?"yes":"no"})]})]})]}),e.jsx("div",{className:"chart",children:e.jsx(w,{children:e.jsxs(S,{data:B,children:[e.jsx(A,{}),e.jsx(z,{}),e.jsx(J,{}),e.jsx(y,{position:{x:80,y:-20},labelStyle:{display:"none"},contentStyle:{backgroundColor:"transparent",border:"none"}}),e.jsx(P,{type:"monotone",dataKey:"pv",stroke:"var(--color-teal-1)",activeDot:{r:8}}),e.jsx(P,{type:"monotone",dataKey:"uv",stroke:"var(--color-purple-2)"})]})})})]}),e.jsxs("div",{className:"descriptions",children:[e.jsx("h2",{children:"Product description "}),e.jsx("ul",{className:"list",children:a.descriptions.map((n,o)=>e.jsx("li",{children:e.jsx("div",{className:"list__itemInfo",children:e.jsxs("p",{children:[a.title," ",n]})})},o))})]})]})})}function Mt(){return e.jsx(e.Fragment,{children:e.jsx(_e,{children:e.jsxs(Pe,{children:[e.jsxs(g,{path:"/",element:e.jsx(it,{}),children:[e.jsx(g,{index:!0,element:e.jsx(We,{})}),e.jsx(g,{path:"/products",element:e.jsx(ut,{})}),e.jsx(g,{path:"/products/:id",element:e.jsx(Ct,{})}),e.jsx(g,{path:"/users/",element:e.jsx(bt,{})}),e.jsx(g,{path:"users/:id",element:e.jsx(Pt,{})})]}),e.jsx(g,{path:"/login",element:e.jsx(wt,{})})]})})})}const Ft=Ne`
:root {
  /* color primary */
  --color-primary-1: #01080E;
  --color-primary-2: #011221;
  --color-primary-3: #011627;
  /* color secondary */
  --color-grey-0: #999D9E;
  --color-grey-1: #607B96;
  --color-teal-1: #3C9D93;
  --color-teal-2: #0c7469;
  --color-purple-1 : #263B50;
  --color-purple-2 : #5565E8;
  --color-green-1: #32CD32;
  --color-red-1: #FF6347;
  --color-red-2: #f443361b;

  /* color accent */
  --color-accent-1: #C98BDF;
  --color-accent-2: #E99287;
  --color-accent-3: #43D9AD;
  --color-accent-4: #FEA55F;
  /* color lines */
  --color-black: #000;
  --color-lines : #1E2D3D;
  --color-white : #FFFFFF;
  --color-white-2 : #e5e9f0;

  /*color button */
  --color-button-red-1 : #F44336;
  --color-button-red-2 : #f44336b3;
  --color-button-d-1: #FEA55F;
  --color-button-d-2: #FFAC6B;
  --color-button-p-1: #1C2B3A;
  --color-button-p-2: #263B50;
  --color-button-p-3: #ffee10;

  --break-point-mob: 768px;
  --break-point-tab: 1024px;
  --break-point-desk: 1440px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;

  @media screen and (max-width: 720px) {
    font-size: 50%;
  }
}

body {
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
}


input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}


/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
`;ke.createRoot(document.getElementById("root")).render(e.jsxs(Ce.StrictMode,{children:[e.jsx(Ft,{}),e.jsx(Mt,{})]}));
