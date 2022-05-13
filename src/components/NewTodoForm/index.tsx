import React, { useMemo, useState } from 'react'

import { SketchPicker as Picker } from 'react-color'
import "react-color-palette/lib/css/styles.css";


import styles from "./NewTodoForm.module.css";

interface Props{
  onAddNewTodo:(title:String, color: string )=>void;
}
type Color = {
  hex: string;
  rgb?:any;
}

function NewTodoForm({ onAddNewTodo }:Props) {

  const [title, setTitle] = useState("");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState<Color>({hex:'#C4C4C4'});

  const decimalToHex = (alpha:number) =>
  alpha === 0 ? '00' : Math.round(255 * alpha).toString(16);
  const hexColor = useMemo(() => {
    if (typeof color === 'string') {
      return color;
    }
    return `${color?.hex}${decimalToHex(color?.rgb?.a)}`;
  }, [color]);
  // function onTitleChange(event:Event) {
  //   setTitle((event.target as HTMLInputElement).value);
  // }
  function onFormSubmit(event:React.FormEvent<HTMLElement>){
    event.preventDefault();
    onAddNewTodo(title, color.hex);
  }
  function DisplayColorPicker () {
    setDisplayColorPicker(prev => !prev)
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Add Todo</h1>
        <form className={styles.form} onSubmit={onFormSubmit}>
          <label htmlFor="title" className={styles.label}>Title</label>
          <input type="text" value={title} 
            onChange={(e)=> setTitle(e.target.value)} 
            className={styles.input} 
            required/>
          <div onClick={DisplayColorPicker } className={styles.pick}>Pick Color</div>
          { displayColorPicker ? 
            <div className={ styles.popover }>
              <Picker color={hexColor} onChange={setColor} />
            </div> : null }
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default NewTodoForm