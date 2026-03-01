document.getElementById('pdfIndex').addEventListener('click', function() {
    // 1. Importar jsPDF de la librería
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // 2. Obtener los valores de los inputs por su atributo 'name'
    const nombre = document.getElementById('nameInput').value;
    const telefono = document.getElementById('phoneInput').value;
    const fecha = document.getElementById('dateInput').value;
    const dpi = document.getElementById('idInput').value;
    const correo = document.getElementById('mailInput').value;

    // 3. Validar que no estén vacíos (Opcional pero recomendado)
    if (!nombre || !correo) {
        alert("Por favor, llena al menos el nombre y el correo.");
        return;
    }

    // 4. Diseñar el PDF
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("CURRICULUM VITAE", 105, 20, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    
    // Línea divisoria
    doc.line(20, 25, 190, 25);

    // Contenido de los datos
    doc.text(`Nombre Completo: ${nombre}`, 20, 40);
    doc.text(`Teléfono: ${telefono}`, 20, 50);
    doc.text(`Fecha de Nacimiento: ${fecha}`, 20, 60);
    doc.text(`DPI: ${dpi}`, 20, 70);
    doc.text(`Correo Electrónico: ${correo}`, 20, 80);

    // 5. Descargar el archivo
    doc.save(`CV_${nombre.replace(/\s+/g, '_')}.pdf`);
});