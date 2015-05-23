loadAPI(1.0);
host.defineController("Generic","Program changer","1.0","7ab8d8ee-fd26-11e4-a322-1697f925ec7b");
host.defineMidiPorts(0,1);

function init()
{
    function nameObserver(arg){
	name=arg;
	res = name.match(/.*PC#([0-9]+).*/);
	if (res!=null)
	    if (!(res[1] === undefined)){
		program = parseInt(res[1]);
		if (program != null){
		    println(program);
		    sendProgramChange(0,program);
		}
	    }
    }
    var cursorTrack = host.createCursorTrack(0,0);        
    cursorTrack.addNameObserver(255,"",nameObserver);
}
