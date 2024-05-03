import React from 'react';

function UserProfile({ users }) {
  return (
   <div>
      <div className="bradcam_area bradcam_bg_1">
    <div className="container">
        <div className="row">
            <div className="col-xl-12">
                <div className="bradcam_text">
                    <h3>User profile  </h3>
                </div>
            </div>
        </div>
    </div>
</div>


<section >
{users && users.length > 0 ? (  // Check if users is defined and has elements
  <div className="container py-5">
    <div className="row">
      {users.map((user) => (
        <div className="col-lg-4" key={user.id}>
          <div className="card mb-4">
            <div className="card-body text-center">
              <img
                src={
                  user.gender === 'female'
                    ? 'https://cdn3.iconfinder.com/data/icons/avatars-business-human1/180/woman1-512.png'
                    : 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
                }
                alt="avatar"
                className="rounded-circle img-fluid"
               
              />
              <h5 className="my-3">{user.name}</h5>
              <p className="text-muted mb-1">{user.job_title}</p>
              {/* Removed follow and message buttons for now */}
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Full Name</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{user.name}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{user.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Phone</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{user.phone_number}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          ))}
          </div>
        </div>
      ) : (

        <p>No users found.</p>  // Display a message if no users
      )}
</section>
   </div>



);}
export default UserProfile;
