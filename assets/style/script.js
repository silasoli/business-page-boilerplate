function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

function alertResult(icon, title) {
  return Swal.fire({
    icon,
    title,
  });
}

function sendEmail() {
  const nameCostumers = window.document.getElementById("name-input");
  const contactCostumers = window.document.getElementById("textarea-input");
  const emailCostumers = window.document.getElementById("email-input");

  if (!emailCostumers.value || !nameCostumers.value || !contactCostumers.value)
    return alertResult("error", "Preencha todos os campos!");

  const validate = validateEmail(emailCostumers.value);
  if (!validate) return alertResult("error", "Email inválido.");

  alertResult("success", "Email enviado.");

  emailCostumers.value = "";
  nameCostumers.value = "";
  contactCostumers.value = "";
}
