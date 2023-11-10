const handleSendEmail = () => {
  // get input email element
  const userEmail = document.getElementById("user-email");
  const inputValue = userEmail.value;
  //   regex email format
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //   check is email format is right
  if (regexEmail.test(inputValue)) {
    alert("email sent");
    return;
  }

  alert("email doesn't match email pattern");
};
