import React from 'react';

const NewPost = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='row justify-content-center '>
      <div className='new-post p-5 col-md-6'>
        <h3 className='text-center mb-3'>
          <i className='fas fa-plus'></i> New Post
        </h3>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='location'>Location</label>
            <select className='form-control rounded' id='location'>
              <option>University City Campus</option>
              <option>Center City Campus</option>
              <option>Queen Lane Campus</option>
              <option>Natural Sciences Campus</option>
            </select>
          </div>

          {/* <div className='form-group'>
            <label htmlFor='specific area'>Sepecific Area</label>
            <input
              type='text'
              className='form-control rounded'
              id='specific area'
              placeholder='specific area'
            />
          </div> */}

          <div className='form-group'>
            <label htmlFor='date'>Date</label>
            <input type='date' className='form-control rounded' id='date' />
          </div>

          <div className='form-group'>
            <label htmlFor='contracted'>Contracted Virus</label>
            <select className='form-control rounded' id='contracted'>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <button className='btn btn-info btn-block mt-5 rounded'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
