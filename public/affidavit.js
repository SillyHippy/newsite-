document.getElementById('affidavit-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const values = {};
  // Checkbox field names as in the new layout
  const checkboxNames = [
    'Personal Service', 'Substituted at Residence', 'Substituted at Business', 'Posting', 'Non-Service',
    'Unknown at address', 'Moved left no forwarding', 'Service canceled by litigant',
    'Unable to serve in a timely fashion', 'Address does not exist', 'other'
  ];
  for (const [key, value] of formData.entries()) {
    if (checkboxNames.includes(key)) {
      values[key] = 'Yes';
    } else {
      values[key] = value;
    }
  }
  // Set unchecked checkboxes to Off
  checkboxNames.forEach(name => {
    if (!(name in values)) {
      values[name] = 'Off';
    }
  });

  // Fetch the PDF template
  const existingPdfBytes = await fetch('Affidavit.pdf').then(res => res.arrayBuffer());

  // Load PDF with pdf-lib
if (!window.PDFLib || typeof window.PDFLib.PDFDocument !== 'function') {
  alert('PDF library failed to load. Please check that pdf-lib.min.js is present, not blocked, and loaded before affidavit.js.');
  return;
}
const { PDFDocument } = window.PDFLib;
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Get the form
  const form = pdfDoc.getForm();

  // Fill fields by name
  Object.keys(values).forEach(fieldName => {
    try {
      const field = form.getFieldMaybe ? form.getFieldMaybe(fieldName) : form.getField(fieldName);
      if (field) {
        if (checkboxNames.includes(fieldName)) {
          // For checkboxes, set to 'Yes' or 'Off'
          if (values[fieldName] === 'Yes' && field.check) field.check();
          else if (field.uncheck) field.uncheck();
        } else if (field.setText) {
          field.setText(values[fieldName]);
        }
      }
    } catch (err) {
      // Ignore missing fields
    }
  });

  // Do NOT flatten the form; keep fields editable in the output PDF
  // Download the filled PDF
  const pdfBytes = await pdfDoc.save({ useObjectStreams: false });
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'Filled_Affidavit.pdf';
  a.click();
  URL.revokeObjectURL(url);
});
