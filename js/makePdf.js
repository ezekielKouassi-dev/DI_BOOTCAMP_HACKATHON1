function generateQrcode(selectorId='qr_code',data={}) 
{

    let donnees = [
        this.uuid(),
        data
    ]
    var qrcode = new QRCode(selectorId, {
        text: JSON.stringify(donnees),
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });

    return qrcode;
}  

function   uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0,
        v = c == 'x' ? r : c;
        return v.toString(16);
    });
}
const data = {
    selectorId: this.uuids(),
    price:200,
    number:82,
    itineraires:'Angre - Plateau'
}
function makePdfjs(data){
    var pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [80, 80],
      });

      
      pdf.setFontSize(20);
      pdf.text("SOTRA", 28, 15);

      let base64Image = $("#qr_code img").attr("src");
      pdf.addImage(base64Image, 'png', 32, 50, 20, 20);
   
      
      pdf.setFontSize(12);
      pdf.text("Ligne : " + ligne.number , 8, 25);

      pdf.setFontSize(10);
      pdf.text("Itinéraire : " + ligne.itineraire, 8, 30);

      
      pdf.setFontSize(10);
      pdf.text("Prix : " + ligne.price, 8, 35);

     
      pdf.save("generated.pdf");
}