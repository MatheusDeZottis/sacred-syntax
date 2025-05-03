// URL  DA API, essa api é voltada para uma consumação publica  

const apiURL = 'https://jsonplaceholder.typicode.com/users/';

// Função para buscar os usúarios

async function fetchUsers() {
    try {
        // Fazendo a solitação GET para API
        const response = await fetch(apiURL);
        //verificando se a resposta é bem-sucedida (status de 200 a 299)
        if (!response.ok) {
            throw new Error('Erro ao recuperar usúarios');
        }
        //convertendo a resposta para json
        const users = await response.json();
        //inprimindo os usúarios no console 
        console.log('Usuarios:', users);
    } catch (error) {
        console.error('Erro', error);
    }

}
// chamado a função para buscar os usuários
fetchUsers();