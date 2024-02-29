var accept = mc.getProperty('AcceptHeader');
var responseCode = mc.getProperty('query.param.responseCode');
var responseCodeSC;
var responses = [];

if (!responses[200]) {
 responses [200] = [];
}
responses[200]["application/json"] = {
  "monedaOrigen" : "string",
  "fecha" : "string",
  "sucursales" : [ {
    "nombreSucursal" : "string",
    "cotizaciones" : [ {
      "id" : "string",
      "codigo" : "string",
      "compra" : 1.5,
      "venta" : 1.5
    } ]
  } ]
};

if (!responses[400]) {
 responses [400] = [];
}
responses[400]["application/json"] = {
  "status_code" : "string",
  "status" : "string",
  "message" : "string",
  "descripcion" : "string"
};

if (!responses[401]) {
 responses [401] = [];
}
responses[401]["application/json"] = {
  "status_code" : "string",
  "status" : "string",
  "message" : "string",
  "descripcion" : "string"
};

if (!responses[403]) {
 responses [403] = [];
}
responses[403]["application/json"] = {
  "status_code" : "string",
  "status" : "string",
  "message" : "string",
  "descripcion" : "string"
};

if (!responses[404]) {
 responses [404] = [];
}
responses[404]["application/json"] = {
  "status_code" : "string",
  "status" : "string",
  "message" : "string",
  "descripcion" : "string"
};

if (!responses[429]) {
 responses [429] = [];
}
responses[429]["application/json"] = {
  "status_code" : "string",
  "status" : "string",
  "message" : "string",
  "descripcion" : "string"
};

if (!responses[500]) {
 responses [500] = [];
}
responses[500]["application/json"] = {
  "status_code" : "string",
  "status" : "string",
  "message" : "string",
  "descripcion" : "string"
};

responses[501] = [];
responses[501]["application/json"] = {
"code" : 501,
"description" : "Not Implemented"}
responses[501]["application/xml"] = <response><code>501</code><description>Not Implemented</description></response>;

if (responseCode == null) {
 responseCode = 200;
}

if (!responses[responseCode]) {
  if (responses["default"]) {
    responseCode = "default"
  } else {
    responseCode = 501;
  }
}
if (responseCode === "default") {
  responseCodeSC = mc.getProperty('query.param.responseCode');
} else {
  responseCodeSC = responseCode;
}
if (accept == null || !responses[responseCode][accept]) {
 accept = "application/json"; // assign whatever available
}

if (accept == "application/json") {
 mc.setProperty('CONTENT_TYPE', 'application/json');
 mc.setProperty('HTTP_SC', responseCodeSC + "");
 mc.setPayloadJSON(responses[responseCode]["application/json"]);
}