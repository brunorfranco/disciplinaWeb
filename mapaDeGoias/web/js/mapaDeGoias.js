function setOnMouseHoverCidades() {
	 var inputs = getInputElements('idsCidades');
	 
	 for(var i=0; i<inputs.length; i++){
//		 var id = inputs[i].value;
		 var idCidade = inputs[i].value.split("|")[0];
		 var nomeCidade = inputs[i].value.split("|")[1];
		 var populacaoCidade = inputs[i].value.split("|")[2];
		 var resposta = 'cidade'+idCidade;
		 $(idCidade).maphilight();
//		 $(id).maphilight();
		 
		 $(idCidade).mouseover(function(e) {
			    $(idCidade).mouseover();
			}).mouseout(function(e) {
			    $(idCidade).mouseout();
			}).click(function(e) { e.preventDefault(); });
	 }
}

function getInputElements(formId) {
    var form = document.getElementById(formId);
    if (form === null) {
        return null;
    }
    return form.getElementsByTagName('input');
}


  function init(evt) {

    if ( window.svgDocument == null ) {

      svgDoc = evt.target.ownerDocument;

    }

  }
  
  function displayName(name) {
	  
	    svgDoc.getElementById('country_name').firstChild.data = name;
	  
	  }


