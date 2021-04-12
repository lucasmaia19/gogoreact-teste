import { injectIntl } from "react-intl";
import React, { Fragment, useEffect, useState } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    FormGroup,
    Label,
    Button,
    Form,
  } from "reactstrap";
  import { useForm } from 'react-hook-form';
  import "react-datepicker/dist/react-datepicker.css";

  import axios from 'axios';

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx } from "../../../components/common/CustomBootstrap";
import { useParams } from "react-router-dom";

// let InitialValue = {
//     nome: '',
//     enunciado: '',
//     nota: ''
// }

// let valuesDummy = {
//     nome: '',
//     enunciado: '',
//     nota: ''
// }

// export default function CreatePost() {
const CreatePost = (props) => {
    const { id } = useParams();

    // const [nome, setNome] = useState('')
    // const [enunciado, setEnunciado] = useState('')
    // const [nota, setNota] = useState('')

    // const [values, setValues] = useState('');
    const [atividade, setAtividade] = useState({
        nome: '',
        enunciado: '',
        nota: ''
    });
                                                    

    // console.log('tem id', id)
    
    useEffect(() => {

        if(id) {
            loadId()
        }

    }, [])


    function onChange(evento) {
        const { name, value } = evento.target;

        setAtividade({ ...atividade, [name]: value })
    }

    function onSubmit(evento) {
        evento.preventDefault();

        if(id){
            console.log("id a ser atualizado", id)
            axios.put(`http://localhost:3000/atividade/${id}`, atividade).then(response => {
                console.log('snapshot', response)
            })
            return;
        }

 
        console.log('atividade', atividade)
        axios.post('http://localhost:3000/atividade', atividade).then(snapshot => {
            console.log('Cadastrado com sucesso')
        })
    }

    function loadId() {
        axios.get(`http://localhost:3000/atividade/${id}`).then((snapshot) => {
            // setNome(snapshot.data.nome)
            setAtividade(snapshot.data)
            // console.log('atividade pelo id: ', snapshot.data)
            })
    }

        return(
            <div>
                <form onSubmit={onSubmit}>
                    <Fragment>
                        <Card>
                        <CardBody>
                                <CardTitle>
                                    <IntlMessages id="form-components.cadastro-atividade" />
                                    </CardTitle>
                                <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="form-components.nome" />
                                            </Label>
                                            <Colxx sm="9">
                                            {/* <input type="text" className="form-control" name="nome" ref={register({ required: true })} /> */}
                                            {/* <input type="text" className="form-control" name="nome" value={atividade.nome} onChange={(e) => atividade(e.target.value)}/> */}
                                            <input type="text" className="form-control" name="nome" value={atividade.nome} onChange={onChange}/>
                                            {/* <input type="text" className="form-control" name="nome" value={atividade.nome} onChange={onChange}/> */}
                                            </Colxx>
                                    </FormGroup>

                                    <FormGroup row>
                                    <Label sm="3">
                                            <IntlMessages id="form-components.enunciado" />
                                            </Label>
                                            <Colxx sm="9">
                                            {/* <textarea name="enunciado" cols="30" rows="10" className="form-control" ref={register({ required: true })}></textarea> */}
                                            {/* <textarea name="enunciado" cols="30" rows="10" className="form-control" value={atividade.enunciado} onChange={(e) => atividade(e.target.value)}></textarea> */}
                                            <textarea name="enunciado" cols="30" rows="10" className="form-control" value={atividade.enunciado} onChange={onChange}></textarea>
                                            {/* <textarea type="text" className="form-control" name="enunciado" onChange={onChange}/> */}
                                        </Colxx>
                                    </FormGroup>

                                    {/* <FormGroup row>
                                        <Label sm="3">
                                        <IntlMessages id="form-components.data" />
                                        </Label>
                                            <Colxx sm="2">
                                                <input mask="9999/99/99" type="text" className="form-control" name="data" ref={register({ required: true })} />
                                            </Colxx>
                                    </FormGroup> */}
                                    
                                    <FormGroup row>
                                    <Label sm="3">
                                            <IntlMessages id="form-components.nota" />
                                        </Label>
                                        <Colxx sm="2">
                                            {/* <input mask="9999/99/99" type="text" className="form-control" name="nota" ref={register({ required: true })} /> */}
                                            {/* <input mask="9999/99/99" type="text" className="form-control" name="nota" value={nota} onChange={(e) => setNota(e.target.value)} /> */}
                                            {/* <input type="text" className="form-control" name="nota" value={atividade.nota} onChange={(e) => atividade(e.target.value)}/> */}
                                            <input type="text" className="form-control" name="nota" value={atividade.nota} onChange={onChange}/>
                                        </Colxx>
                                    </FormGroup>


                                    <FormGroup row>
                                        <Colxx sm="9"></Colxx>
                                    </FormGroup>
                                    <Button className="float-right" color="primary" type="submit">
                                        <IntlMessages id="form-components.salvar" />
                                    </Button>    
                            </CardBody>
                        </Card>
                        </Fragment>
                 </form>
            </div>
            );
        }
export default injectIntl(CreatePost);