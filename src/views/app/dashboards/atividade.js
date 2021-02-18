import { injectIntl } from "react-intl";
import React, { Component, Fragment } from "react";
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

class Atividade extends Component {
    render() {
        return(
            <Fragment>
                <Card>
                    <CardBody>
                        <CardTitle>
                            <IntlMessages id="Cadastro da Atividade" />
                        </CardTitle>
                        <Form className="dashboard-quick-post">
                            <FormGroup row>
                                <Label sm="3">
                                    <IntlMessages id="Nome" />
                                </Label>
                                <Colxx sm="9">
                                    <Input type="text" name="text" />
                                </Colxx>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm="3">
                                    <IntlMessages id="Enunciado" />
                                </Label>
                                <Colxx sm="9">
                                    <Input type="textarea" rows="3" />
                                </Colxx>
                            </FormGroup>

                            <FormGroup row>
                                <Colxx sm="9"></Colxx>
                            </FormGroup>
                            <Button className="float-right" color="primary">
                                <IntlMessages id="Salvar" />
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
            </Fragment>
        );
    }
}
export default injectIntl(Atividade);