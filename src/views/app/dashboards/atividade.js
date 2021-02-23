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
  import { useForm } from 'react-hook-form';
  import DatePicker from "react-datepicker";
  import "react-datepicker/dist/react-datepicker.css";

  import Switch from "rc-switch";
  import axios from 'axios';
  import InputMask from 'react-input-mask';

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx } from "../../../components/common/CustomBootstrap";

const CreatePost = (props) => {
    console.log('bateu aqui')
    const { register, handleSubmit } = useForm();
    const onSubmit = values => {
        console.log('data', values)
        axios.post('http://localhost:3000/atividade', values).then(result => {
            props.history.push("/");
        })
    };

        const [value, onChange] = useState(new Date());

        const startDate = Date;

        return(
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
                                             <input mask="9999/99/99" type="text" className="form-control" name="data" ref={register({ required: true })} />
                                             {/* <input mask="9999/99/99" type="text" className="form-control" name="data" ref={register({ required: true })} /> */}
                                        </Colxx>
                                </FormGroup>
                                
                                <FormGroup row>
                                <Label sm="3">
                                        <IntlMessages id="form-components.nota" />
                                    </Label>
                                    <Colxx sm="2">
                                        {/* <Input type="text" name="nota" onChange={onChange}/> */}
                                        {/* <Input type="text" name="text" ref={register({ required: true })}/> */}
                                        <input mask="9999/99/99" type="text" className="form-control" name="nota" ref={register({ required: true })} />
                                    </Colxx>
                                </FormGroup>

                                {/* <FormGroup row>
                                    <Label sm="3">
                                            <IntlMessages id="form-components.estado" />
                                            </Label>
                                            <Switch sm="3"
                                                 className="custom-switch custom-switch-primary"
                                                 name="estado"
                                                ref={register({ required: true })}
                                            />
                                </FormGroup> */}

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