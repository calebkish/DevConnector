import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteEducation } from '../../actions/profileActions';
import formatDate from '../../utils/formatDate';

class Education extends Component {
  onDeleteClick = (id) => {
    this.props.deleteEducation(id);
  }

  render() {
    const education = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>{formatDate(edu.from)} - {edu.current ? 'Current' : formatDate(edu.to)}</td>
        <td><button onClick={() => { this.onDeleteClick(edu._id) }} className="btn btn-danger">Delete</button></td>
      </tr>
    ))

    return (
      <div>
        <h4 className="mb-4">Education Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th></th>
            </tr>
            {education}
          </thead>
        </table>
      </div>
    )
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
}

export default connect(null, { deleteEducation })(Education);