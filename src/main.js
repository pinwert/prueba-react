import React from 'react';
import {render} from 'react-dom';

function FormExam(){
  return <form action="/" method="post">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" />
    </div>
    <div>
      <label for="mail">E-mail:</label>
      <input type="email" id="mail" />
      </div>
      <div>
        <label for="msg">Message:</label>
        <textarea id="msg"></textarea>
      </div>
      <button>Send message.</button>
    </form>
}
window.onload = function(){
  render(<FormExam/>, document.querySelector('#form'));
}
