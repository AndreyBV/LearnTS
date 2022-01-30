function strip(x: string | number) {
	if (typeof x === 'number') {
		return x.toFixed(2);
	}
	return x.trim();
}

class MyResponse {
	header = 'Resp header';
	result = 'Resp res';
}

class MyError {
	header = 'Error header';
	msg = 'Error msg';
}

function handle(res: MyResponse | MyError) {
	if (res instanceof MyResponse) {
		return {
			info: res.header + res.result,
		};
	}
	return { info: res.header + res.msg };
}

// *********

type AlertType = 'success' | 'dander' | 'warning';
function setAlertType(type: AlertType) {}

setAlertType('dander');
setAlertType('success');
// setAlertType('test');
