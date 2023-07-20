window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('resume-form').addEventListener('submit', function(e) {
    e.preventDefault();
    generateResume();
  });
});

function generateResume() {
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const dob = document.getElementById('dob').value;
  const hobbies = document.getElementById('hobbies').value;
  const skills = document.getElementById('skills').value;
  const photoInput = document.getElementById('photo-upload');
  const gender = document.getElementById('gender').value;

  const classX_Board = document.getElementById('ClassX_Board').value;
  const classX_Percentage = document.getElementById('ClassX_Percentage').value;
  const classX_YrOfPassing = document.getElementById('ClassX_YrOfPassing').value;
  const classXII_Board = document.getElementById('ClassXII_Board').value;
  const classXII_Percentage = document.getElementById('ClassXII_Percentage').value;
  const classXII_YrOfPassing = document.getElementById('ClassXII_YrOfPassing').value;
  const graduation_Board = document.getElementById('Graduation_Board').value;
  const graduation_Percentage = document.getElementById('Graduation_Percentage').value;
  const graduation_YrOfPassing = document.getElementById('Graduation_YrOfPassing').value;
  const masters_Board = document.getElementById('Masters_Board').value;
  const masters_Percentage = document.getElementById('Masters_Percentage').value;
  const masters_YrOfPassing = document.getElementById('Masters_YrOfPassing').value;

  const reader = new FileReader();
  reader.onload = function(event) {
    const photo = event.target.result;

    const resumeContent = `
      <div id="resume-container">
        <h2 align="center">${name}</h2><hr>
        <div class="resume-section">
          <div class="resume-section">
            <h3>Photo</h3>
            <img src="${photo}" alt="Profile Photo"/>
          </div>
          <div class="resume-section">
            <hr>
            <h3>QUALIFICATION</h3>
            <table class="table table-striped">
              <tr>
                <th>Sr.No.</th>
                <th>Examination</th>
                <th>Board</th>
                <th>Percentage</th>
                <th>Year of Passing</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Class X</td>
                <td>${classX_Board}</td>
                <td>${classX_Percentage}</td>
                <td>${classX_YrOfPassing}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Class XII</td>
                <td>${classXII_Board}</td>
                <td>${classXII_Percentage}</td>
                <td>${classXII_YrOfPassing}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Graduation</td>
                <td>${graduation_Board}</td>
                <td>${graduation_Percentage}</td>
                <td>${graduation_YrOfPassing}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Masters</td>
                <td>${masters_Board}</td>
                <td>${masters_Percentage}</td>
                <td>${masters_YrOfPassing}</td>
              </tr>
            </table>
          </div>
          <div class="resume-section">
            <hr>
            <h3>Contact Information</h3>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Mobile:</strong> ${mobile}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date Of Birth:</strong> ${dob}</p>
            <p><strong>Gender:</strong> ${gender}</p>
          </div>
          <div class="resume-section">
            <hr>
            <h3>Hobbies</h3>
            <p>${hobbies}</p>
          </div>
          <div class="resume-section">
            <hr>
            <h3>Skills</h3>
            <p>${skills}</p>
          </div>
        </div>
      </div>
    `;

    document.body.innerHTML = resumeContent;
  };

  if (photoInput.files && photoInput.files[0]) {
    reader.readAsDataURL(photoInput.files[0]);
  } else {
    // Handle case when no photo is selected
    const resumeContent = `
      <div id="resume-container">
        <h2 align="center">${name}</h2><hr>
        <div class="resume-section">
          <div class="resume-section">
            
            <p>No photo selected</p>
          </div>
          <div class="resume-section">
            <hr>
            <h3>QUALIFICATION</h3>
            <!-- Qualification table content -->
          </div>
          <div class="resume-section">
            <hr>
            <h3>Contact Information</h3>
            <!-- Contact information content -->
          </div>
          <div class="resume-section">
            <hr>
            <h3>Hobbies</h3>
            <!-- Hobbies content -->
          </div>
          <div class="resume-section">
            <hr>
            <h3>Skills</h3>
            <!-- Skills content -->
          </div>
        </div>
      </div>
    `;

    document.body.innerHTML = resumeContent;
  }
}
