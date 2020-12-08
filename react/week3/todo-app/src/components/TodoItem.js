import React, { useState } from 'react';
import { Modal } from './Modal';

export function TodoItem(props) {
  const { id, description, deadline, deleteCallBack, editCallback } = props;
  const [checked, setChecked] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [inputText, setInputText] = useState(description);
  const updateHandle = id => {
    setOnEdit(false);
    if (inputText) {
      editCallback(inputText, id);
    } else {
      setInputText(description);
    }
  };

  return (
    <div>
      <Modal>
        {onEdit ? (
          <div>
            <input
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
            />
            <input type="checkbox" onChange={() => setChecked(!checked)} />
            <button onClick={() => deleteCallBack()}>Delete</button>
            <button onClick={() => updateHandle(id)}>Update</button>
          </div>
        ) : (
          <div>
            {checked ? (
              <del>
                {description} | {deadline}
              </del>
            ) : (
              <span>
                {description} | {deadline}
              </span>
            )}
            <input type="checkbox" onChange={() => setChecked(!checked)} />
            <button onClick={() => deleteCallBack()}>Delete</button>
            <button onClick={() => setOnEdit(!onEdit)}>Edit</button>
          </div>
        )}
      </Modal>
    </div>
  );
}


