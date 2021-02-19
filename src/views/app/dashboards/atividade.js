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
// import FormikDatePicker from "./FormikFields";
import moment from "moment";
import axios from "axios";
import Service from "./service/service";
import Switch from "rc-switch";

const InitialValue = {
    nome: '',
    enunciado: '',
    data: '',
    nota: '',
}


function onChange(evento) {
    const [values, setValues] = (InitialValue);
    setValues({ ...values, [name]: value })
    const { name, value } = evento.target;
    
    }
    const url = "http://localhost:3000/atividade"
    
    
    const cadastroService = new Service();
    
    
    function onSubmit(evento) {

        
      // evento.preventDefault();
      const formData = new FormData();
    console.log('formData', formData)
    cadastroService.PostCadastroAtividade(formData)
    
    // const dados = values;
    // Object.keys(dados).forEach(k => {
        //   formData.append(k, dados[k]);
        // });
    }
    
    class Atividade extends Component {
        
        
        constructor(props) {
        super(props);
        this.state = {
          startDate: null,
          startDateTime: null,
          startDateRange: null,
          endDateRange: null,
          embeddedDate: moment()
        };
      }

    handleChangeDate = date => {
        this.setState({
          startDate: date
        });
      };

    render() {
        const { messages } = this.props.intl;
        return(
            <form onSubmit={onSubmit}>
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
                                        <Input type="text" name="text" onChange={onChange}/>
                                        {/* <Input type="text" name="text"/> */}
                                    </Colxx>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm="3">
                                        <IntlMessages id="form-components.enunciado" />
                                    </Label>
                                    <Colxx sm="9">
                                        <Input type="textarea" rows="3" onChange={onChange}/>
                                        {/* <Input type="textarea" rows="3"/> */}
                                    </Colxx>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm="3">
                                        <IntlMessages id="form-components.data" />
                                    </Label>
                                        <Colxx sm="2">
                                            <DatePicker rows="3"
                                            // name="date"
                                            selected={this.state.startDate}
                                            placeholderText={messages["maia"]}
                                            // onChange={onChange}
                                            />
                                        </Colxx>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm="3">
                                        <IntlMessages id="form-components.nota" />
                                    </Label>
                                    <Colxx sm="2">
                                        <Input type="text" name="text" onChange={onChange}/>
                                        {/* <Input type="text" name="text"/> */}
                                    </Colxx>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm="3">
                                            <IntlMessages id="form-components.estado" />
                                        </Label>
                                    <Switch sm="3"
                                        className="custom-switch custom-switch-primary"
                                        // checked={this.state.switchCheckedPrimary}
                                        onChange={switchCheckedPrimary => {
                                        this.setState({ switchCheckedPrimary });
                                        }}
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
}
// }
export default injectIntl(Atividade);