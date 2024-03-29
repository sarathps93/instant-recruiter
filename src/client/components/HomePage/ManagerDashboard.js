import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => state;

const ManagerDashboard = (props) => {
  const managerPosts = props.fetchJobsReducer.jobPosts.filter(post => post.ManagerId === props.authenticationReducer.userData.Id);
  return (
    <React.Fragment>
      <div style={{ display: 'block' }}>
        <button
          type="button"
          id="logout"
          onClick={() => props.history.push('/')}
        >
          Back to homepage
        </button>
      </div>
      <div className="dashboard_view">
        {managerPosts.length
          ? managerPosts.map(post => (
            <div key={post.JobId} className="employeee-job-posts">
              <p>
                <strong>Job reference id: </strong>
                {post.JobId}
              </p>
              <p>
                <strong>Job Location: </strong>
                {post.Location}
              </p>
              <p>
                <strong>Job Description: </strong>
                {post.JobDesc}
              </p>
              <p>
                <strong>Required Skillsets: </strong>
                {post.Skills}
              </p>
              <p>
                <strong>Expected Band: </strong>
                {post.Band}
              </p>
            </div>
          )) : <div> You don&apos;t have any active job posts</div>}
      </div>
    </React.Fragment>
  );
};

export default connect(mapStateToProps)(ManagerDashboard);
