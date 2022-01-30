"use strict";
var FormNS;
(function (FormNS) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state,
            };
        }
    }
    FormNS.myForm = new MyForm('v@test.test');
})(FormNS || (FormNS = {}));
console.log(FormNS.myForm);
//# sourceMappingURL=namespaces.js.map