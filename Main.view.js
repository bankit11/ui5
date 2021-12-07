sap.ui.jsview("oft.fin.ar.view.Main", {
    getControllerName: function() {
		return "oft.fin.ar.controller.Main";
	},

    createContent: function(oController) {

        var olabel = new sap.m.Label("idlabel",{
                text: "Name please"
        });
        var oinfd = new sap.m.Input("Idinput",{
            width: "200px"
        });
                    
    
//         var obtn =  new sap.m.Button("idbtn", {
//             text: "Click me",
//             type: sap.m.ButtonType.Attention,
//             press: oController.anubhavAmazing
// //            press: function()
// //            {
// //                alert("wow");
// //            }
//     });
    // return [olabel,oinfd,obtn];
    return olabel;
    }

});