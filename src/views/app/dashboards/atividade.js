import { injectIntl } from "react-intl";
import React, { Component, Fragment, useState } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    FormGroup,
    Label,
    Button,
    Form,
    Input
  } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx } from "../../../components/common/CustomBootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import FormikDatePicker from "./FormikFields";
import moment from "moment";
import Service from "./service/service";
import Switch from "rc-switch";
import axios from 'axios';
import { useForm } from 'react-hook-form';

const InitialValue = {
    nome: '',
    enunciado: '',
    data: '',
    nota: '',
}



// function onChange(evento) {
    //     setValues({ ...values, [name]: value })
//     const { name, value } = evento.target;

// }
// const cadastroService = new Service();


// function onSubmit(evento) {
    //     evento.preventDefault();

    //     const formData = new FormData();
    //     const dados = values;
    //     console.log('formData', formData)
//     cadastroService.PostCadastroAtividade(formData)

//     Object.keys(dados).forEach(k => {
    //         formData.append(k, dados[k]);
//     });
//     cadastroService.PostCadastroAtividade(formData)
// }


const CreatePost = (props) => {
    // const [values, setValues] = useState(InitialValue);
    console.log('bateu aqui')
    const { register, handleSubmit } = useForm();
    const onSubmit = values => {
        console.log('data', values)
        axios.post('http://localhost:3000/atividade', values).then(result => {
            props.history.push("/");
        })
    };

// const CreatePost = (props) => {
//     console.log('bateu aqui')
//     const { register, handleSubmit, errors } = useForm();
//     const onSubmit = data => {
//         console.log('data', data)
//         axios.post('http://localhost:3000/atividade', data).then(result => {
//             props.history.push("/");
//         })
//     };

    // class Atividade extends Component {
        
    
    //     constructor(props) {
    //     super(props);
    //     this.state = {
    //       startDate: null,
    //       startDateTime: null,
    //       startDateRange: null,
    //       endDateRange: null,
    //       embeddedDate: moment()
    //     };
    //   }

    // handleChangeDate = date => {
    //     this.setState({
    //       startDate: date
    //     });
    //   };

    // render() {
        // const { messages } = null;
        return(
            // <form onSubmit={onSubmit}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Fragment>
                    <Card>
                        <CardBody>
                            <CardTitle>
                                <IntlMessages id="form-components.cadastro-atividade" />
                            </CardTitle>
                            <Form className="dashboard-quick-post">
                                <FormGroup row>
                                    <Label sm="3">
                                        <IntlMessages id="form-components.nome" />
                                    </Label>
                                    <Colxx sm="9">
                                        {/* <Input type="text" name="nome" onChange={onChange}/> */}
                                        {/* <Input type="text" className="form-control" name="title" ref={register({ required: true })}/> */}
                                        <input type="text" className="form-control" name="nome" ref={register({ required: true })} />
                                    </Colxx>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm="3">
                                        <IntlMessages id="form-components.enunciado" />
                                    </Label>
                                    <Colxx sm="9">
                                        {/* <Input type="textarea" name="enunciado" rows="3" onChange={onChange}/> */}
                                        {/* <Input type="textarea" rows="3" ref={register({ required: true })}/> */}
                                        <textarea name="enunciado" cols="30" rows="10" className="form-control" ref={register({ required: true })}></textarea>
                                    </Colxx>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm="3">
                                        <IntlMessages id="form-components.data" />
                                    </Label>
                                        <Colxx sm="2">
                                            <DatePicker rows="3"
                                            name="date"
                                            selected={null}
                                            placeholderText={null}
                                            // onChange={onChange}
                                            name="data" className="form-control"
                                            ref={register({ required: true })}
                                            />
                                        </Colxx>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm="3">
                                        <IntlMessages id="form-components.nota" />
                                    </Label>
                                    <Colxx sm="2">
                                        {/* <Input type="text" name="nota" onChange={onChange}/> */}
                                        <Input type="text" name="text" ref={register({ required: true })}/>
                                    </Colxx>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm="3">
                                            <IntlMessages id="form-components.estado" />
                                        </Label>
                                    <Switch sm="3"
                                        className="custom-switch custom-switch-primary"
                                        name="estado"
                                        // checked={this.state.switchCheckedPrimary}
                                        ref={register({ required: true })}
                                        // onChange={switchCheckedPrimary => {
                                        // this.setState({ switchCheckedPrimary });
                                        // }}
                                    />
                                </FormGroup>

                                <FormGroup row>
                                    <Colxx sm="9"></Colxx>
                                </FormGroup>
                                <Button className="float-right" color="primary" type="submit">
                                    <IntlMessages id="form-components.salvar" />
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Fragment>
              </form>
            );
        }
export default injectIntl(CreatePost);
// export default injectIntl(Atividade);