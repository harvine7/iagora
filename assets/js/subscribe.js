const btn = document.getElementById("submitBtn")
const inputs = document.querySelector("form")
btn.addEventListener('click', () => {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "dc40a45923071f",
        Password: "694364d4ea5bd6",
        To: 'subscription@no-reply.iagora.space',
        From: inputs.elements["user-email"].value,
        Subject: "You have new subscriber!",
        Body: "Make sure to add <b>" + inputs.elements["user-email"].value + "</b> to your subscriber list",
    });

    document.getElementById("before-sub").classList.remove("d-flex");
    document.getElementById("before-sub").classList.add("before-sub");
    document.getElementById("after-sub").classList.remove("after-sub");
    document.getElementById("after-sub").classList.add("d-flex");

})

