(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(7),r=a.n(l),c=(a(14),a(1)),s=a(2),o=a(4),d=a(3),h=a(5),u=function(e){return i.a.createElement("div",null,e.label,i.a.createElement("input",{type:"text",id:e.id,value:e.value,onChange:function(t){return e.onChange(t)}}))},p=function(e){return i.a.createElement("div",null,e.label,i.a.createElement("input",{type:"checkbox",id:e.idCbx,checked:e.checked,onChange:function(t){return e.onChange(t)}}))},m=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).onAmountPointChange=function(e){a.setState({amountPoint:e.target.value})},a.onMinYChange=function(e){a.setState({minY:e.target.value})},a.onMaxYChange=function(e){a.setState({maxY:e.target.value})},a.onGridChange=function(){a.props.updateGridAndLabel(!a.state.checkedGrid,a.state.checkedLabelAxis),a.setState({checkedGrid:!a.state.checkedGrid})},a.onLabelChange=function(){a.props.updateGridAndLabel(a.state.checkedGrid,!a.state.checkedLabelAxis),a.setState({checkedLabelAxis:!a.state.checkedLabelAxis})},a.onWidthChange=function(e){a.setState({width:e.target.value})},a.onHeightChange=function(e){a.setState({height:e.target.value})},a.state={amountPoint:a.props.amountPoint,minY:a.props.minY,maxY:a.props.maxY,checkedGrid:a.props.checkedGrid,checkedLabelAxis:a.props.checkedLabelAxis,width:a.props.width,height:a.props.height},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"controlPanel"},i.a.createElement("div",{id:"area1"},i.a.createElement("p",null,i.a.createElement(u,{label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u043e\u0447\u0435\u043a: ",id:"countPoints",value:this.state.amountPoint,onChange:this.onAmountPointChange})),i.a.createElement("p",null,i.a.createElement(u,{label:"\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043f\u043e \u043e\u0441\u0438 Y: \u043e\u0442 ",id:"minY",value:this.state.minY,onChange:this.onMinYChange}),i.a.createElement(u,{label:" \u0434\u043e ",id:"maxY",value:this.state.maxY,onChange:this.onMaxYChange})),i.a.createElement("p",null,i.a.createElement("input",{type:"button",value:"\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0442\u043e\u0447\u043a\u0438 \u0438 \u043f\u0435\u0440\u0435\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0433\u0440\u0430\u0444\u0438\u043a",onClick:function(){e.props.generationPoints(e.state.amountPoint,e.state.minY,e.state.maxY)}}))),i.a.createElement("div",{id:"area2"},i.a.createElement("p",null,"\u0420\u0430\u0437\u043c\u0435\u0440\u044b \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445:"),i.a.createElement("p",null,i.a.createElement(u,{label:"\u0428\u0438\u0440\u0438\u043d\u0430",id:"width",value:this.state.width,onChange:this.onWidthChange}),i.a.createElement(u,{label:"\u0412\u044b\u0441\u043e\u0442\u0430",id:"height",value:this.state.height,onChange:this.onHeightChange})),i.a.createElement("p",null,i.a.createElement("input",{type:"button",value:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",onClick:function(){e.props.changeSize(e.state.width,e.state.height)}}))),i.a.createElement("p",null,i.a.createElement(p,{label:"\u0421\u0435\u0442\u043a\u0430",idCbx:"grid",checked:this.state.checkedGrid,onChange:this.onGridChange}),i.a.createElement(p,{label:"\u041c\u0435\u0442\u043a\u0438",idCbx:"tags",checked:this.state.checkedLabelAxis,onChange:this.onLabelChange})))}}]),t}(i.a.Component),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).drawChart=function(){var e=Number(a.props.amountPoint),t=Number(a.props.minY),n=Number(a.props.maxY),i=Number(a.props.width),l=Number(a.props.height),r=a.props.points;console.log("drawChart"),d3.selectAll("svg > *").remove();var c=20,s=10,o=30,d=50,h=i-d-s,u=l-c-o,p=d3.scale.linear().domain([0,e+1]).range([0,h]),m=d3.scale.linear().domain([t,n]).range([u,0]),g=d3.svg.axis().scale(p).tickSize(-u).tickPadding(10).orient("bottom"),b=d3.svg.axis().scale(m).tickPadding(10).tickSize(-h).orient("left"),k=d3.behavior.zoom().x(p).y(m).scaleExtent([1,10]).on("zoom",function(){x.select(".x.axis").call(g),x.select(".y.axis").call(b),x.selectAll("path.line").attr("d",v),f.selectAll("circle").attr("transform",function(e){return"translate("+p(e.x)+","+m(e.y)+")"}),console.log("\u0421\u0435\u0442\u043a\u0430: ",d3.select("#grid").property("checked")),console.log("\u041c\u0435\u0442\u043a\u0438: ",d3.select("#tags").property("checked")),d3.select("#grid").property("checked")?d3.selectAll(" .tick line").attr("display","block"):d3.selectAll(" .tick line").attr("display","none");d3.select("#tags").property("checked")?d3.selectAll(".axis text").attr("display","block"):d3.selectAll(".axis text").attr("display","none")}),x=d3.select("svg").call(k).attr("width",h+d+s).attr("height",u+c+o).append("g").attr("transform","translate("+d+","+c+")");x.append("g").attr("class","x axis").attr("transform","translate(0,"+u+")").call(g),x.append("g").attr("class","y axis").call(b),x.append("clipPath").attr("id","clip").append("rect").attr("width",h).attr("height",u);var v=d3.svg.line().x(function(e){return p(e.x)}).y(function(e){return m(e.y)});x.append("path").datum(r).attr("class","line").attr("clip-path","url(#clip)").attr("stroke","steelblue").attr("d",v);var f=x.selectAll(".dots").data([r]).enter().append("g").attr("class","dots").attr("clip-path","url(#clip)");f.selectAll(".dot").data(r).enter().append("circle").attr("class","dot").attr("r",2.5).attr("fill","black").attr("transform",function(e){return"translate("+p(e.x)+","+m(e.y)+")"})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){this.props.reDraw&&this.drawChart(),console.log("componentDidUpdate"),this.props.checkedGrid?d3.selectAll(" .tick line").attr("display","block"):d3.selectAll(" .tick line").attr("display","none"),this.props.checkedLabelAxis?d3.selectAll(".axis text").attr("display","block"):d3.selectAll(".axis text").attr("display","none")}},{key:"render",value:function(){return i.a.createElement("svg",{id:"svg"})}}]),t}(i.a.Component),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).generationPoints=function(e,t,n){var i=Number(t),l=Number(n),r=d3.range(e).map(function(e){return{x:e+1,y:Math.random()*(l-i)+i}});a.setState({points:r,amountPoint:e,minY:i,maxY:l,reDraw:!0})},a.changeSize=function(e,t){a.setState({width:e,height:t,reDraw:!0})},a.updateGridAndLabel=function(e,t){a.setState({checkedGrid:e,checkedLabelAxis:t,reDraw:!1})},a.state={amountPoint:21,minY:5,maxY:75,checkedGrid:!0,checkedLabelAxis:!0,reDraw:!1,points:[],width:960,height:500},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.generationPoints(this.state.amountPoint,this.state.minY,this.state.maxY)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"\u0412\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u043d\u0430 \u0440\u0430\u043d\u0434\u043e\u043c\u043d\u043e \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"),i.a.createElement(m,Object.assign({changeSize:this.changeSize,generationPoints:this.generationPoints,updateGridAndLabel:this.updateGridAndLabel},this.state)),i.a.createElement(g,this.state))}}]),t}(i.a.Component);r.a.render(i.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.88c66b55.chunk.js.map