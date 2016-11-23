import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <ListGroup className="DocumentsList">
    {documents.map(({ _id, title }) => (
      <ListGroupItem key={ _id } href={`/documents/${_id}`}>{ title }</ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">
    You don't have any documents yet! <a href="/documents/new">Add one</a>?
  </Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default DocumentsList;
