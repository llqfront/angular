var _Q = {
	css : function(obj,attr,value){
		if(!obj)return null;
		if(arguments.length===2){	
			if(typeof attr == 'string'){
				if(attr == 'float'){
					if(-[1,]){
						attr = 'cssFloat';
					}else {
						attr = 'styleFloat';
					}
				}
				if(obj.currentStyle){
					return obj.currentStyle[attr];
				}else {
					return getComputedStyle(obj,false)[attr];
				}
			}else {
				for(var key in attr){
					obj.style[key] = attr[key];
					if(key=='float'){
						if(-[1,]){
							key = 'cssFloat';
							obj.style[key] = attr['float'];
						}else {
							key = 'styleFloat';
							obj.style[key] = attr['float'];
						}
					}
				}
			}
		}else if(arguments.length===3){
			if(attr == 'float'){
				if(-[1,]){
					attr = 'cssFloat';
				}else {
					attr = 'styleFloat';
				}
			}
			obj.style[attr] = value;
		}
	},
	first : function(oParent){
		if(!oParent)return null;
		return oParent.firstElementChild || oParent.firstChild;
	},
	last : function(oParent){
		if(!oParent)return null;
		return oParent.lastElementChild || oParent.lastChild;
	},
	prev : function(obj){
		if(!obj)return null;
		return obj.previousElementSibling || obj.previousSibling;
	},
	next : function(obj){
		if(!obj)return null;
		return obj.nextElementSibling || obj.nextSibling;
	},
	haveClass : function(obj,className){
		if(!obj || !obj.className) return false;
		var sClass = obj.className;
		var allClass = sClass.split(' ');
		var res = false;
		for(var i=0,len=allClass.length;i<len;i++){
			if(allClass[i]==className){
				res = true;
				break;
			}
		}
		return res;
	},
	addClass : function(obj,name){
		if(!obj || _Q.haveClass(obj,name)) return false;
		if(obj.className !==''){
			obj.className +=' '+name;
		}else {
			obj.className = name;
		}
	},
	removeClass : function (obj,name){
		if(!obj){return null;}
		var sClass = obj.className;
		var aClass = sClass.split(' ');
		for (var i=0,len=aClass.length;i<len;i++ ){
			if(name == aClass[i]){
				aClass[i] = aClass[len-1];
				aClass.pop(aClass[len-1]);
				break;
			}
		}
		obj.className = aClass.join(' ');
	},
	addEvent : function(obj,type,fn){
		if(!obj)return null;
		if(obj.addEventListener){
			obj.addEventListener(type,function(event){
				var rtn = fn.call(obj,event);
				if(rtn==false){
					event.cancelBubble = true;
					event.preventDefault();
				}
			},false)
		}else {
			obj.attachEvent('on'+type,function(){
				var rtn = fn.call(obj,window.event);
				if(rtn==false){
					window.event.cancelBubble = true;
					return false;
				}
			})
		}
	},
	getPos : function(obj,bCurrent){
		var pos = {x:0,y:0};
		if(!obj){
			return pos;
		}
		if(bCurrent){
			pos.x = parseInt(obj.getBoundingClientRect().left);
			pos.y = parseInt(obj.getBoundingClientRect().top);
		}else{
			pos.x = parseInt(obj.getBoundingClientRect().left + (document.documentElement.scrollLeft||document.body.scrollLeft),10);
			pos.y = parseInt(obj.getBoundingClientRect().top + (document.documentElement.scrollTop||document.body.scrollTop));
		}
		return pos;
	},
	getEle : function(f,s){
		var result = [];
		var elements = null;
		if(s.charAt(0) == '.'){
			if(typeof f === 'string'){
				var par = document.getElementById(f.substring(1));
				if(!par){
					return result;
				}else{
					elements = par.getElementsByTagName('*');
				}
			}else if(typeof f === 'object' && f!=null){
				elements = f.getElementsByTagName('*');
			}else{
				elements = [];
			}
			for(var i=0;i<elements.length;i++){
				if(/\s/.test(elements[i].className)){
					var names = elements[i].className.split(' ');
					if(_Q.strComper(s.substring(1),names) === true){
						result.push(elements[i]);
					}
				}else{
					if(elements[i].className == s.substring(1)){
						result.push(elements[i]);
					}
				}
			}
		}else{
			if(typeof f === 'string'){
				var par = document.getElementById(f.substring(1));
				if(!par){
					return result;
				}
				result = document.getElementById(f.substring(1)).getElementsByTagName(s);
			}else if(typeof f === 'object'){
				result = f.getElementsByTagName(s);
			}
		}
		return result;
	},
	Q : function (arg){
		this.aElements = [];
		switch (typeof arg){
			case 'string':
				switch(arg.charAt(0)){
					case '#':
						if(/\s/.test(arg)){
							var aArg = arg.split(' ');
							this.aElements = _Q.getEle(aArg[0],aArg[1]);
						}else{
							this.aElements.push(document.getElementById(arg.substring(1)));
						}
						break;
					default:
						this.aElements = _Q.getEle(document,arg);
						break
					}
				break;
			case 'function':
				addEvent(window,'load',arg);
				break;
		}
		return this.aElements;
	},
	strComper : function (a,b){
		for(var i=0;i<b.length;i++){
			if(a == b[i]){
				return true;
				break;
			}
		}
	},
	startMove : function(obj,oTarget,fn){
		if(!obj){return null;}
		clearInterval(obj.timer);obj.timer = null;
		obj.timer = setInterval(function(){
			var iCur = 0;
			var attr = '';
			var bStop = true;
			for(attr in oTarget){
				if(attr == 'opacity'){
					//iCur = Math.round(_Q.css(obj,'opacity')*100);
					iCur = parseInt(parseFloat(_Q.css(obj,'opacity')).toFixed(2)*100);
				}else {
					iCur = parseInt(_Q.css(obj,attr))
				}
				if(isNaN(iCur)){iCur=0;}
				var iSpeed = (oTarget[attr]-iCur)/9;
				iSpeed=iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				iCur+=iSpeed;
				if(oTarget[attr]!=iCur){bStop=false;}
				if(attr == 'opacity'){
					obj.style.filter='alpha(opacity:'+iCur+')';
					obj.style.opacity=iCur/100;
				}else {
					obj.style[attr]=iCur+'px';
				}
			}
			if(bStop){
				clearInterval(obj.timer);
				obj.timer=null;
				if(fn){fn.call(obj);}
			}
		},30)
	},
	stopMove : function (obj){
		if(!obj){return null;}
		if(obj.timer){clearInterval(obj.timer);obj.timer = null;}
	}
}