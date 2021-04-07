import React, { useEffect, useState } from "react";
import axios from 'axios';

import { Card, CardBody, CardTitle } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import ReactTable from "react-table";
import classnames from "classnames";
import IntlMessages from "../../helpers/IntlMessages";
import DataTablePagination from "../../components/DatatablePagination";

import data from "../../data/products";
import listarAtividade from "../../views/app/dashboards/listarAtividade";

const CustomTbodyComponent = props => (
  <div {...props} className={classnames("rt-tbody", props.className || [])}>
    <PerfectScrollbar options={{ suppressScrollX: true }}>
      {props.children}
    </PerfectScrollbar>
  </div>
);

const dataTableColumns = [
  {
    Header: "Nome da Atividade",
    accessor: "nome",
    Cell: props => <p className="list-item-heading">{props.value}</p>
  },
  {
    Header: "Enunciado",
    accessor: "enunciado",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Nota",
    accessor: "nota",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "#",
    accessor: "glyph-icon simple-icon-trash",
    // <i className="glyph-icon simple-icon-trash" />
    Cell: props => <p className="text-muted">{props.value}</p>
  }
];

export const ReactTableWithPaginationCard = (props) => {
  console.log('props', props)

  return (
    <Card className="mb-4">
      <CardBody>
        <CardTitle>
          <IntlMessages id="table.react-pagination" />
        </CardTitle>
        <ReactTable
          // {...atividade.map((item, id)=>{
          //     data={item}
          //   })}
            // data={atividade}
          data={props.atividade}
          columns={dataTableColumns}
          
          defaultPageSize={5}
          showPageJump={false}
          showPageSizeOptions={false}
          PaginationComponent={DataTablePagination}
          className={"react-table-fixed-height"}
        />
        <i className="glyph-icon simple-icon-trash" />
      </CardBody>
    </Card>
  );
};

export const ReactTableWithScrollableCard = props => {
  return (
    <Card className="mb-4">
      <CardBody>
        <CardTitle>
          <IntlMessages id="table.react-scrollable" />
        </CardTitle>
        <ReactTable
          data={data}
          TbodyComponent={CustomTbodyComponent}
          columns={dataTableColumns}
          defaultPageSize={20}
          showPageJump={false}
          showPageSizeOptions={false}
          showPagination={false}
          className={"react-table-fixed-height"}
        />
      </CardBody>
    </Card>
  );
};

export const ReactTableAdvancedCard = props => {
  return (
    <Card className="mb-4">
      <CardBody>
        <CardTitle>
          <IntlMessages id="table.react-advanced" />
        </CardTitle>
        <ReactTable
          data={data}
          columns={dataTableColumns}
          defaultPageSize={5}
          filterable={true}
          showPageJump={true}
          PaginationComponent={DataTablePagination}
          showPageSizeOptions={true}
        />
      </CardBody>
    </Card>
  );
};
