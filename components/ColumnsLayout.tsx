import { FC } from 'react';
import { Row, Col } from 'react-bootstrap';

import Section from './Section';

interface Column {
  ratio: number;
  components: JSX.Element[];
}

interface Props {
  columns: Column[];
  gap?: number;
}

const ColumnsLayout: FC<Props> = ({ columns, gap = 0 }) => {
  return (
    <Row className={`gx-${gap}`}>
      {columns.map((column, i) => (
        <Col key={i} md={column.ratio}>
          <Section components={column.components} />
        </Col>
      ))}
    </Row>
  );
};

export default ColumnsLayout;
