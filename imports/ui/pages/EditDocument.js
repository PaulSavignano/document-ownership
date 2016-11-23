import React from 'react';
import DocumentEditor from '../components/DocumentEditor.js';

const renderDocumentEditor = (doc) => {
  return doc ? (
    <div>
      <h4 className="page-header">Editing "{ doc.title }"</h4>
      <DocumentEditor doc={ doc } />
    </div>
  ) : <Alert bsStyle="warning">Shucks. That document is not for you to edit!</Alert>
}

const EditDocument = ({ doc }) => (
  <div className="EditDocument">
    { renderDocumentEditor(doc) }
    <DocumentEditor doc={ doc } />
  </div>
);

EditDocument.propTypes = {
  doc: React.PropTypes.object,
};

export default EditDocument;
