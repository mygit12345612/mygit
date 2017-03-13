
$import("mx.containers.Container");				
$import("mx.containers.Accordion");				
$import("mx.containers.Panel");				
$import("mx.containers.TabControl");				
				
$import("mx.windows.Window");				
$import("skintest.views.mainView");				
$import("skintest.views.mainViewController");				
$import("skintest.views.mainViewUserController");				

mx.weblets.WebletManager.register(
{
    id: "skintest",
    name: "skintest",
    requires: [],
    onload: function (e) {
		
    }, 
    onstart: function (e) {
    	var mvc = new skintest.views.mainViewUserController();
		e.context.rootViewPort.setViewController(mvc);
    }
});