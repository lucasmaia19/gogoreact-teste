import axios from "axios";

export default class Service {

    PostCadastroAtividade(formData) {
        axios.post('http://localhost:3000/atividade', formData)
		.then((response) => {
			console.log(response)
	    })
    }
}