$ns("skintest.views");

skintest.views.mainView=function(){
	var me = $extend(mx.views.View);
	var base = {};
	base.init = me.init;
	me.init = function () {
		me.permissionID = "-1";
		base.init();
		_initControls();
	};
	
	//----声明mx组件变量------
	var _Container1 = null;
	var _Container2 = null;
	var _Accordion3 = null;
	var _Panel7 = null;
	var _Panel8 = null;
	var _Panel9 = null;
	var _TabControl2 = null;
	var _TabPage1 = null;
	var _TabPage2 = null;
	var _Window = null;
	
	function _initControls(){
		//---调用初始化函数-----
		_init_Container1();
		_init_Container2();
		_init_Accordion3();
		_init_Panel7();
		_init_Panel8();
		_init_Panel9();
		_init_TabControl2();
		_init_TabPage1();
		_init_TabPage2();
	  
		me.on("activate", me.controller._onactivate);
	}
	
	//-----定义初始化函数-----
	function _init_Container1(){
		_Container1=new mx.containers.Container({id:"Container1",height:"100%",layout:"mx.layouts.AbsoluteLayout",width:"100%"});
		me.addControl(_Container1);
	}
	
	function _init_Container2(){
		_Container2=new mx.containers.Container({id:"Container2",height:"16%",layout:"mx.layouts.AbsoluteLayout",width:"100%",layoutConfigs:{left:0,top:0}});
		_Container1.addControl(_Container2);
	}
	
	function _init_Accordion3(){
		_Accordion3=new mx.containers.Accordion({id:"Accordion3",height:"84%",width:"25%",layoutConfigs:{left:0,top:89}});
		_Container1.addControl(_Accordion3);
	}
	
	function _init_Panel7(){
		_Panel7=new mx.containers.Panel({id:"Panel7",title:"Panel",height:"381",layout:"mx.layouts.AbsoluteLayout",width:"196",name:"Panel7"});
		
		_Accordion3.appendPanel(_Panel7);
	}
	
	function _init_Panel8(){
		_Panel8=new mx.containers.Panel({id:"Panel8",title:"Panel",layout:"mx.layouts.AbsoluteLayout",name:"Panel8"});
		
		_Accordion3.appendPanel(_Panel8);
	}
	
	function _init_Panel9(){
		_Panel9=new mx.containers.Panel({id:"Panel9",title:"Panel",layout:"mx.layouts.AbsoluteLayout",name:"Panel9"});
		
		_Accordion3.appendPanel(_Panel9);
	}
	
	function _init_TabControl2(){
		_TabControl2=new mx.containers.TabControl({id:"TabControl2",height:"84%",width:"75%",layoutConfigs:{left:192,top:89}});
		_Container1.addControl(_TabControl2);
	}
	
	function _init_TabPage1(){
		_TabPage1=new mx.containers.TabPage({id:"TabPage1",text:"TabPage1",layout:"mx.layouts.AbsoluteLayout",name:"TabPage1",autoInit:true});
		_TabControl2.appendPage(_TabPage1);
	}
	
	function _init_TabPage2(){
		_TabPage2=new mx.containers.TabPage({id:"TabPage2",text:"TabPage2",layout:"mx.layouts.AbsoluteLayout",name:"TabPage2",autoInit:true});
		_TabControl2.appendPage(_TabPage2);
	}
	
	function _init_Window() {		
		if(_Window == null || ((_Window.reusable==false) && _Window.disposed==true)) {
			_Window = skintest.context.windowManager.create({
				entry:true
			});
		}
		_Window.on("activate", function() {
			_Window.setView(me);
		});
		_Window.on("close", function(e){
		    $.each(_Window.controls, function(i, o){
				o.$e.detach();
			});
		});
	}
	
	me.getWindow = function() {
		_init_Window();
		return _Window;
	};
	
	
	me.findControlById = function(controlId){
		try{
			return me.findControl("id", controlId);
		} catch(err) {
			mx.indicate("info","未找到对应的mx控件:    "+ err.message);
			return null;
		}	
	};
    return me.endOfClass(arguments);
};