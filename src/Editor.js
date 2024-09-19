import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import './Editor.css';
import EmojiPickerComponent from './EmojiPicker';
const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
    <h1 class="centered">Hello buddy..</h1>
    <p class="centered bold">SELECT YOUR EMOJI😊</p>
  `,  });

  const handleEmojiClick = (event, emojiObject) => {
    if (editor) {
      editor.chain().focus().insertContent(emojiObject.emoji).run();
    }
  };
  

  return (
    <div>
      <EditorContent editor={editor} />
      <EmojiPickerComponent onEmojiClick={handleEmojiClick} />
    </div>
  );
};

export default Editor;