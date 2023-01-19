/**
 * 
 * @param {String} selectorId 
 * @param {any} data 
 * @returns 
 */
function generateQrcode(selectorId='qr_code',data) 
{

    var qrcode = new QRCode(selectorId, {
        text: JSON.stringify(data),
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });

    return qrcode;
}  



/**
 * @description: cette fonction permet de faire le pdf
 * @param {*} data 
 */
function makePdfjs(data){


    var pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [80, 80],
      });

      
      pdf.setFontSize(20);
      pdf.text("SOTRA", 28, 15);

    //   let base64Image = $(`#${data.selectorId} img`).attr("src");
    //   pdf.addImage(base64Image, 'png', 32, 50, 20, 20);
   
      
      pdf.setFontSize(12);
      pdf.text("Ligne : " + data.number , 8, 25);

      pdf.setFontSize(10);
      pdf.text("Itinéraire : " + data.itineraire, 8, 30);

      
      pdf.setFontSize(10);
      pdf.text("Prix : " + data.price, 8, 35);

     
      pdf.save("tiket.pdf");
}

