import { useState } from 'react';
import avatar from 'images/avatar.png';
import languages from 'images/languages.jpg';
import defaultImage from 'images/default.png';
import techSkills from 'images/techSkills.jpg';
import softSkills from 'images/softSkills.jpg';
import { Summary } from './HomePage.styled';
import Modal from 'components/Modal/Modal';

export const HomePage = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const showModal = () => {
    setModal(true);
  };

  return (
    <>
      <Summary>
      <div>
      {/* <img src={techSkills} alt="techSkills" width="250px" height="250px"/> */}
          <ul>
            <h2>Tech skills</h2>
            <li>HTML5</li>
            <li>CSS/SCSS</li>
            <li>Responsive/Adaptive design</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>REST API</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node JS</li>
            <li>MongoDB/Postman</li>
          </ul>
        </div>
        <img src={avatar} alt="avatar" width="250px" height="250px"/>
        <div>
          <h1>Polina Krasovska</h1>
          <p>junior full stack developer</p>

          <p>BLA BLA BLA ABOUT ME BLA BLA BLA ABOUT MEBLA BLA BLA ABOUT MEBLA BLA BLA ABOUT MEBLA BLA BLA ABOUT MEv</p>
        </div>
        <div>
        {/* <img src={softSkills} alt="softSkills" width="250px" height="250px"/> */}
          <ul>
            <h2>Soft skills</h2>
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Responsibility</li>
            <li>Agile</li>
            <li>Patience</li>
            <li>Time management</li>
            <li>Scrum</li>
            <li>Leadership</li>
          </ul>
        </div>
      </Summary>
      <img src={languages} alt="avatar" width="300px" />
      <h2>Project examples</h2>
      <br />
      <Summary>
        <Summary>
          <li>
            <h3>wallet</h3>Application with
            analytics of income and expenses
            <br />
            <img src={defaultImage} alt="default" width="100px" />
            <br />
            React, Node JS | Team project | Scrum master 
            <br />
            <a href="https://github.com/sla6ak/app-team-wallet">
              GitHub (Front End)
            </a>
            |
            <a href="https://github.com/sla6ak/api-team-wallet">
              GitHub (Back End)
            </a>
          </li>
          <li>
            <h3>phonebook</h3>Application with
            analytics of income and expenses
            <br />
            <img src={defaultImage} alt="default" width="100px" />
            <br />
            React, Node JS | Team project | Scrum master 
            <br />
            <a href="https://github.com/sla6ak/app-team-wallet">
              GitHub (Front End)
            </a>
            |
            <a href="https://github.com/sla6ak/api-team-wallet">
              GitHub (Back End)
            </a>
          </li>
          <li>
            <h3>filmoteka</h3>Application with
            analytics of income and expenses
            <br />
            <img src={defaultImage} alt="default" width="100px" />
            <br />
            React, Node JS | Team project | Scrum master 
            <br />
            <a href="https://github.com/sla6ak/app-team-wallet">
              GitHub (Front End)
            </a>
            |
            <a href="https://github.com/sla6ak/api-team-wallet">
              GitHub (Back End)
            </a>
          </li>
          <li>
            <h3>icecream</h3>Application with
            analytics of income and expenses
            <br />
            <img src={defaultImage} alt="default" width="100px" />
            <br />
            React, Node JS | Team project | Scrum master 
            <br />
            <a href="https://github.com/sla6ak/app-team-wallet">
              GitHub (Front End)
            </a>
            |
            <a href="https://github.com/sla6ak/api-team-wallet">
              GitHub (Back End)
            </a>
          </li>
          <li>
            <h3>webstudio</h3>Application with
            analytics of income and expenses
            <br />
            <img src={defaultImage} alt="default" width="100px" />
            <br />
            React, Node JS | Team project | Scrum master 
            <br />
            <a href="https://github.com/sla6ak/app-team-wallet">
              GitHub (Front End)
            </a>
            |
            <a href="https://github.com/sla6ak/api-team-wallet">
              GitHub (Back End)
            </a>
          </li>
        </Summary>
      </Summary>
      <Summary>

        
      </Summary>
      <button type="button" onClick={showModal}>
        Contact me
      </button>
      {modal && <Modal />}
    </>
  );
};
