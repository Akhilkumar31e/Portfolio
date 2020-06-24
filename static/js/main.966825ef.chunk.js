(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{29:function(e,a,t){e.exports=t(74)},34:function(e,a,t){},35:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(7),c=t.n(r),i=(t(34),t(3)),s=t(4),o=t(5),m=t(6),u=(t(35),t(11)),d=t(8),E=(t(43),t(26)),v=["B.Tech, Computer Science and Engineering","Web Developer","Android Developer","Programmer"],p=t(27);function h(e){var a=e.name;return l.a.createElement("h4",{className:"display-4",id:"myName"},l.a.createElement("b",null,a))}function g(e){var a=e.tagline;return l.a.createElement("div",null,l.a.createElement("p",{className:"text-muted"},a))}var f=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,taglines:v},n.toggleNav=n.toggleNav.bind(Object(u.a)(n)),n}return Object(s.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){var e=this.state.taglines.map((function(e){return l.a.createElement("div",{key:e},l.a.createElement(g,{tagline:e}))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.b,null,l.a.createElement(d.e,{dark:!0},l.a.createElement(d.f,{onClick:this.toggleNav}),l.a.createElement(d.a,{isOpen:this.state.isNavOpen,navbar:!0},l.a.createElement(d.c,{navbar:!0},l.a.createElement(d.d,{onClick:this.toggleNav},l.a.createElement("a",{className:"btn",href:"#home",role:"button"},"Home")),l.a.createElement(d.d,{onClick:this.toggleNav},l.a.createElement("a",{className:"btn",href:"#about",role:"button"},"About")),l.a.createElement(d.d,{onClick:this.toggleNav},l.a.createElement("a",{className:"btn",href:"#education",role:"button"},"Education")),l.a.createElement(d.d,{onClick:this.toggleNav},l.a.createElement("a",{className:"btn",href:"#skills",role:"button"},"Skills")),l.a.createElement(d.d,{onClick:this.toggleNav},l.a.createElement("a",{className:"btn",href:"#projects",role:"button"},"Projects"))))),l.a.createElement("div",{className:"container",id:"home"},l.a.createElement(p.FadeTransform,{in:!0},l.a.createElement("div",{className:"row row-header"},l.a.createElement("div",{className:"col-12 col-sm-3"},l.a.createElement("img",{className:"img-fluid img-thumbnail img-rounded",src:"/Portfolio/assets/images/display_pic.jpg",alt:"Profile pic"})),l.a.createElement("div",{className:"col-12 col-sm-9"},l.a.createElement(h,{name:this.props.myName}),l.a.createElement(E.Carousel,{infiniteLoop:!0,autoPlay:!0,showThumbs:!1},e))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 align-self-center"},l.a.createElement("a",{className:"btn btn-social-icon",href:"http://instagram.com/akhil_31e"},l.a.createElement("i",{className:"fa fa-instagram fa-lg"})),l.a.createElement("a",{className:"btn btn-social-icon",href:"https://www.linkedin.com/in/akhil-kumar-ellendula-5510b2163/"},l.a.createElement("i",{className:"fa fa-linkedin fa-lg"})),l.a.createElement("a",{className:"btn btn-social-icon",href:"https://twitter.com/akhil_31e"},l.a.createElement("i",{className:"fa fa-twitter fa-lg"})),l.a.createElement("a",{className:"btn btn-social-icon",href:"https://github.com/Akhilkumar31e"},l.a.createElement("i",{className:"fa fa-github fa-lg"}))))))))}}]),t}(n.Component);var N=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"footer",id:"footerDiv"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-auto"},l.a.createElement("p",null,"\xa9 Copyright 2020 Akhil Kumar"))))))};var b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"about",id:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-display"},l.a.createElement("div",{className:"col-12 col-sm-3"},l.a.createElement("h1",null,"About Me"))),l.a.createElement("div",{className:"row  row-display"},l.a.createElement("div",{className:"col"},l.a.createElement("p",null,e.aboutMe))))))},k=[{id:0,name:"CVR College Of Engineering",stream:"B.Tech, CSE",batch:"2017-2021",grade:"9.6",image:"/Portfolio/assets/images/collegelogo.png"},{id:1,name:"FIITJEE Junior College",stream:"Intermediate, MPC",batch:"2015-2017",grade:"96%",image:"/Portfolio/assets/images/fiitjeelogo.png"},{id:2,name:"Prerana Waldorf School",stream:"X, CBSE",batch:"2015",grade:"9.6",image:"/Portfolio/assets/images/schoollogo.png"}];function w(e){var a=e.schools.map((function(e){return l.a.createElement("div",{key:e.id,className:"row row-display row-edu"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row "},l.a.createElement("div",{className:"col-2 "},l.a.createElement("img",{className:"img-fluid",src:e.image,alt:e.name})),l.a.createElement("div",{className:"col-10 "},l.a.createElement("h3",null,e.name),l.a.createElement("h6",{className:"text-muted"},e.stream,", ",l.a.createElement("span",{className:"badge badge-pill badge-light"},e.grade)),e.batch))))}));return l.a.createElement(l.a.Fragment,null,a)}var y=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={schools:k},n}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"education",id:"education"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-display"},l.a.createElement("div",{className:"col-12 col-sm-3"},l.a.createElement("h1",null,"Education"))),l.a.createElement(w,{schools:this.state.schools}))))}}]),t}(n.Component),j=[{id:0,type:"Industry Knowledge",skillset:["Data Structures ","Algorithms ","Programming "]},{id:1,type:"Programming Languages",skillset:["C ","Java ","Python ","Javascript"]},{id:2,type:"Tools and Technologies",skillset:["Android Studio ","Bootstrap ","React ","Firebase ","HTML ","CSS "]}];function C(e){var a=e.skillset,t=0,n=a.map((function(e){return 0===t?(t++,l.a.createElement("span",{key:e},e)):l.a.createElement("span",{key:e},", ",e)}));return l.a.createElement(l.a.Fragment,null,n)}function O(e){var a=e.skills.map((function(e){return l.a.createElement("div",{key:e.id,className:"row row-display row-edu"},l.a.createElement("div",{className:"co1-12 col-sm-4"},l.a.createElement("h2",{className:"text-muted"},e.type)),l.a.createElement("div",{className:"col-12 col-sm-6"},l.a.createElement(C,{skillset:e.skillset})))}));return l.a.createElement(l.a.Fragment,null,a)}var P=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={skills:j},n}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"skills",id:"skills"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-display"},l.a.createElement("div",{className:"col-12 col-sm-3"},l.a.createElement("h1",null,"Skills"))),l.a.createElement(O,{skills:this.state.skills}))))}}]),t}(n.Component),F=[{id:0,jobname:"Software Engineering Virtual Internship",company:"JPMorgan Chase&Co.",time:"April 2020-May 2020",desc:"Worked on tasks related to establishing financial data feeds, Front End web development, Data Visualization using Perspective"},{id:1,jobname:"Campus Lead:  Scaler Achiever Club",company:"Scaler Academy",time:"March 2020-Present",desc:"Leading Scaler developer community in my campus"}];function S(e){var a=e.experience.map((function(e){return l.a.createElement("div",{key:e.id,className:"row row-display row-edu"},l.a.createElement("div",{className:"col-12 col-sm-6 "},l.a.createElement("h3",null,e.jobname),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("h5",null,e.company)),l.a.createElement("div",{className:"col-6"},l.a.createElement("h5",{className:"text-muted"},e.time)))),l.a.createElement("div",{className:"col-12 job-style"},l.a.createElement("p",null,e.desc)))}));return l.a.createElement(l.a.Fragment,null,a)}var A=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={experience:F},n}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"experince",id:"experince"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-display"},l.a.createElement("div",{className:"col-12 col-sm-4"},l.a.createElement("h1",null,"Experience"))),l.a.createElement(S,{experience:this.state.experience}))))}}]),t}(n.Component),x=[{id:0,name:"Corporatz",desc:"An android application useful for corporate employees.Application includes features like Car and Bike pooling,News feed,Corporate Forum,Posting pictures and likes,Ratings and reviews for employers. It is developed using Android Studio and Firebase."}];function I(e){var a=e.projects.map((function(e){return l.a.createElement("div",{key:e.id,className:"row row-display row-edu"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h2",null,e.name),l.a.createElement("p",null,e.desc)))}));return l.a.createElement(l.a.Fragment,null,a)}var M=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={projects:x},n}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"projects",id:"projects"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-display"},l.a.createElement("div",{className:"col-12 col-sm-4"},l.a.createElement("h1",null,"Projects"))),l.a.createElement(I,{projects:this.state.projects}))))}}]),t}(n.Component);var B=function(e){var a=e.codingProfiles.map((function(e){return l.a.createElement("a",{key:e.id,className:"btn mr-auto ml-auto ",href:e.link,role:"button"},e.name)}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"codingprofile"},l.a.createElement("div",{className:"container",id:"codingProfiles"},l.a.createElement("div",{className:"row  justify-content-center"},l.a.createElement("h1",null,"Coding Profiles")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 "},l.a.createElement("div",{className:"d-flex flex-wrap bd-highlight mb-5 justify-content-center codingprofile"},a))))))};var T=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"contact"},l.a.createElement("div",{className:"container "},l.a.createElement("div",{className:"row row-display "},l.a.createElement("div",{className:"col-12 col-sm-4"},l.a.createElement("h1",null,"Contact Me")),l.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},l.a.createElement("a",{className:"btn btn-light btn-large btn-block",href:"mailto:akhilkumar31e@gmail.com",role:"button"},"Contact"))),l.a.createElement("div",{className:"row row-display"},l.a.createElement("p",null,"Also I'm active on my social links displayed at ",l.a.createElement("a",{href:"#home"},"top")," of this page.")))))},J=[{id:0,link:"https://www.codechef.com/users/akhilkumar31e",name:"Codechef"},{id:1,link:"https://www.hackerrank.com/akhilkumar31e",name:"Hackerrank"},{id:2,link:"https://leetcode.com/akhilkumar31e/",name:"LeetCode"},{id:4,link:"https://www.interviewbit.com/profile/akhilkumar31e6712",name:"InterviewBit"},{id:3,link:"https://www.spoj.com/users/akhilkumar31e/",name:"SPOJ"}],L=t(28),D=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={aboutMe:"Hey, I am Akhil Kumar, pursuing my B.Tech in Computer Sceince. I am passionate about coding and learning new technologies.I am also interested in building web and android applications.",codingProfiles:J},n}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{myName:"Akhil Kumar Ellendula"}),l.a.createElement(b,{aboutMe:this.state.aboutMe}),l.a.createElement(y,null),l.a.createElement(L.TinyButton,null),l.a.createElement(P,null),l.a.createElement(A,null),l.a.createElement(M,null),l.a.createElement(B,{codingProfiles:this.state.codingProfiles}),l.a.createElement(T,null),l.a.createElement(N,null))}}]),t}(n.Component),W=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(D,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(71),t(72),t(73);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.966825ef.chunk.js.map