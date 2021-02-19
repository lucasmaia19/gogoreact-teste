import axios from "axios";

export default class Service {

    PostCadastroAtividade(formData) {
        axios.post('http://localhost:8080/atividade/upload-com-dados', formData)
		.then((response) => {
			console.log(response)
	    })
    }
}