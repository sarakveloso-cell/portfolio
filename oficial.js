async function logar() {
    const email = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, senha: senha })
        });

        const data = await response.json();


        if (data.success) {
            alert("Login realizado com sucesso!");
            window.location.href = "index.html";
        } else {
            alert(data.message || "E-mail ou senha inválidos!");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Erro ao conectar com o servidor. Verifique se o backend está rodando.");
    }
}